// Script to download real company logos from public sources
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const logosDir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(logosDir)) fs.mkdirSync(logosDir, { recursive: true });

// Map of scholarship IDs to their parent company's websites (for favicon/logo lookup)
const logoSources = {
  'tata-aig': 'https://www.tataaig.com/favicon.ico',
  'reliance': 'https://www.reliancefoundation.org/images/logo.png',
  'infosys': 'https://www.infosys.com/favicon.ico',
  'hdfc': 'https://www.hdfcbank.com/favicon.ico',
  'kotak': 'https://www.kotak.com/favicon.ico',
  'sbi': 'https://www.onlinesbi.sbi/favicon.ico',
  'lic': 'https://www.licindia.in/favicon.ico',
  'azim-premji': 'https://azimpremjifoundation.org/favicon.ico',
  'airtel': 'https://www.airtel.in/favicon.ico',
  'vahani': 'https://vahanischolarship.com/favicon.ico',
};

// Use Google's favicon API as reliable fallback
function getGoogleFaviconUrl(domain) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

const domains = [
  { name: 'tata-aig', domain: 'tataaig.com' },
  { name: 'reliance', domain: 'reliancefoundation.org' },
  { name: 'infosys', domain: 'infosys.com' },
  { name: 'hdfc', domain: 'hdfcbank.com' },
  { name: 'kotak', domain: 'kotak.com' },
  { name: 'sbi', domain: 'sbi.co.in' },
  { name: 'lic', domain: 'licindia.in' },
  { name: 'azim-premji', domain: 'azimpremjifoundation.org' },
  { name: 'airtel', domain: 'airtel.in' },
  { name: 'vahani', domain: 'vahanischolarship.com' },
  { name: 'ffe', domain: 'ffe.org' },
  { name: 'aditya-birla', domain: 'adityabirlacapital.com' },
  { name: 'panasonic', domain: 'panasonic.com' },
  { name: 'schaeffler', domain: 'schaeffler.co.in' },
  { name: 'legrand', domain: 'legrand.co.in' },
  { name: 'idfc', domain: 'idfcfirstbank.com' },
  { name: 'dxc', domain: 'dxc.com' },
  { name: 'deutsche-bank', domain: 'db.com' },
  { name: 'loreal', domain: 'loreal.com' },
  { name: 'colgate', domain: 'colgate.com' },
  { name: 'santoor', domain: 'santoorscholarships.com' },
  { name: 'rolls-royce', domain: 'rolls-royce.com' },
  { name: 'muthoot', domain: 'muthootgroup.com' },
  { name: 'jindal', domain: 'sitaramjindalfoundation.org' },
  { name: 'u-go', domain: 'buddy4study.com' },
  { name: 'aspire', domain: 'buddy4study.com' },
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (response) => {
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        // Follow redirect
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      response.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading logos using Google Favicon API (128px)...\n');
  
  for (const { name, domain } of domains) {
    const url = getGoogleFaviconUrl(domain);
    const dest = path.join(logosDir, `${name}.png`);
    try {
      await downloadFile(url, dest);
      const stats = fs.statSync(dest);
      console.log(`✓ ${name}.png (${stats.size} bytes) - ${domain}`);
    } catch (err) {
      console.log(`✗ ${name}.png - FAILED: ${err.message}`);
    }
  }
  
  console.log('\nDone! All logos saved to public/logos/');
}

main();
