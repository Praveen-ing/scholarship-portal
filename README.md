# 🎓 ScholarHub — Scholarship Discovery Portal

> A modern, responsive scholarship discovery website for Indian undergraduate students. Browse, search, and filter 26+ scholarships across Engineering, Medical, STEM, and more.

🌐 **Live Site**: [https://scholarship-portal-ten.vercel.app/](https://scholarship-portal-ten.vercel.app/)

---

## 📸 Overview

ScholarHub is a student-friendly web portal that aggregates scholarship opportunities for Indian undergraduate students. It features a searchable, filterable card-based interface with detailed scholarship information, built with modern web technologies and deployed on Vercel.

### Key Highlights

- **26 scholarships** from top organizations (TATA AIG, Reliance, Infosys, HDFC, SBI, LIC, Airtel, and more)
- **Real-time search** by scholarship name, benefits, or eligibility
- **7 filter categories**: Girls, Engineering, STEM, Medical, Income Based, Open to All
- **Detailed modals** with full eligibility, benefits, and opening months
- **Real company logos** for all 26 scholarship providers
- **Fully responsive** — works on mobile, tablet, and desktop
- **Deployed on Vercel** with automatic CI/CD from GitHub

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | [Next.js 15](https://nextjs.org/) | React framework with App Router, SSR/SSG |
| **Language** | [TypeScript](https://www.typescriptlang.org/) | Type-safe JavaScript |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS framework |
| **Fonts** | Google Fonts (Poppins + Inter) | Modern typography |
| **Data** | Local JSON file | No database needed — static scholarship data |
| **Deployment** | [Vercel](https://vercel.com/) | Auto-deploy from GitHub on every push |
| **Images** | `next/image` | Optimized image loading with lazy loading |

### Why This Stack?

- **Next.js 15** — Industry-standard React framework, perfect for static sites with excellent SEO
- **TypeScript** — Catch errors at compile time, better developer experience
- **Tailwind CSS** — Rapid UI development with consistent design tokens
- **JSON data** — No database overhead for static content; easy to update
- **Vercel** — Zero-config deployment, free for hobby projects, automatic HTTPS

---

## 📁 Project Structure

```
scholarship-portal/
├── data/
│   └── scholarships.json          # All 26 scholarships (structured JSON)
├── public/
│   └── logos/                     # 26 real company logos (PNG)
│       ├── tata-aig.png
│       ├── reliance.png
│       ├── infosys.png
│       ├── hdfc.png
│       ├── kotak.png
│       ├── sbi.png
│       ├── lic.png
│       ├── azim-premji.png
│       ├── airtel.png
│       ├── vahani.png
│       ├── ffe.png
│       ├── aditya-birla.png
│       ├── panasonic.png
│       ├── schaeffler.png
│       ├── legrand.png
│       ├── idfc.png
│       ├── dxc.png
│       ├── deutsche-bank.png
│       ├── loreal.png
│       ├── colgate.png
│       ├── santoor.png
│       ├── rolls-royce.png
│       ├── muthoot.png
│       ├── jindal.png
│       ├── u-go.png
│       └── aspire.png
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout (fonts, SEO meta tags)
│   │   ├── page.tsx               # Main homepage (all components)
│   │   └── globals.css            # Design system (colors, animations)
│   ├── components/
│   │   ├── Header.tsx             # Sticky header with scroll effects
│   │   ├── HeroSection.tsx        # Hero banner with stats
│   │   ├── SearchBar.tsx          # Search with Ctrl+K shortcut
│   │   ├── FilterChips.tsx        # Category filter buttons
│   │   ├── ScholarshipCard.tsx    # Individual scholarship card
│   │   ├── ScholarshipModal.tsx   # Full details popup
│   │   ├── EmptyState.tsx         # No results message
│   │   ├── LoadingSkeleton.tsx    # Loading shimmer effect
│   │   └── Footer.tsx             # Footer with attribution
│   └── types/
│       └── index.ts               # TypeScript interfaces
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🎨 Design System

### Color Palette

| Token | Hex Code | Usage |
|-------|----------|-------|
| **Primary** | `#1E3A5F` | Headers, buttons, key text |
| **Primary Light** | `#2A4F7F` | Hover states |
| **Accent** | `#14B8A6` | CTAs, highlights, badges, active states |
| **Accent Light** | `#2DD4BF` | Hover accent |
| **Background** | `#F8FAFC` | Page background |
| **Card Background** | `#FFFFFF` | Card surfaces |
| **Text Primary** | `#1E293B` | Body text |
| **Text Secondary** | `#64748B` | Muted text, descriptions |
| **Border** | `#E2E8F0` | Card borders, dividers |

### Typography

| Element | Font | Weight |
|---------|------|--------|
| **Headings** | Poppins | 600 (SemiBold), 700 (Bold), 800 (ExtraBold) |
| **Body Text** | Inter | 400 (Regular), 500 (Medium) |

### Animations

- **Fade In** — Smooth opacity transition on page load
- **Slide Up** — Cards animate upward with staggered delays
- **Scale In** — Modal entrance animation
- **Shimmer** — Loading skeleton pulse effect
- **Float** — Gentle vertical hover on scroll indicator
- **Hover Lift** — Cards lift on mouse hover (`-translate-y-1`)

---

## 🌟 Features

### 1. Hero Section
- Gradient background with decorative blur elements
- Title: "Scholarship Opportunities 2025–26"
- Live statistics: 26 scholarships, 3L+ scholars, 7 categories
- Animated scroll indicator

### 2. Search
- Real-time search by scholarship name, benefits, or eligibility text
- Keyboard shortcut: `Ctrl+K` to focus
- Clear button to reset search
- Debounced input for performance

### 3. Filter Categories
- **All** (26) — Show everything
- **Girls** (14) — Female-only scholarships
- **Engineering** (20) — For engineering students
- **STEM** (7) — Science, Technology, Engineering, Math
- **Medical** (8) — Medical/BDS/Nursing scholarships
- **Income Based** (23) — Income-criteria scholarships
- **Open to All** (7) — No gender/stream restrictions

### 4. Scholarship Cards
- Real company logos (26 organizations)
- Color-coded accent bars
- Scholarship name, opening month, scholar count
- Benefit amount in highlighted card
- Top 3 eligibility criteria preview
- Category tags
- "View Details →" button with hover animation

### 5. Details Modal
- Full-screen modal with branded color header
- Company logo + scholarship name
- Complete benefits breakdown
- Numbered eligibility criteria list
- Category tags
- ESC key to close, click backdrop to close

### 6. Loading & Empty States
- Shimmer skeleton cards during initial load
- Friendly empty state with reset button when no results match

### 7. Responsive Design
- **Mobile** (< 768px): 1-column card grid
- **Tablet** (768px–1024px): 2-column card grid
- **Desktop** (> 1024px): 3-column card grid

### 8. Sticky Header
- Transparent on top → White with shadow on scroll
- Logo, navigation, and scholarship count badge

---

## 📊 Scholarship Data

All 26 scholarships sourced from the [Avanti Fellows Assignment Sheet](https://docs.google.com/spreadsheets/d/1KozRe-VzFND_fRBUvuTFw9UOZhyIh2yjXmoEUNiKq7w/edit?gid=909680988#gid=909680988).

### Data Structure (per scholarship)

```json
{
  "id": 1,
  "name": "Scholarship Name",
  "scholars": "Number of scholars",
  "eligibility": ["Criteria 1", "Criteria 2", "..."],
  "benefits": "Full benefit description",
  "benefitAmount": "Short benefit summary",
  "openingMonth": "Expected opening month",
  "categories": ["engineering", "girls", "income_based"],
  "color": "#E53935",
  "logo": "/logos/org-name.png"
}
```

### All 26 Scholarships

| # | Scholarship | Scholars | Benefit | Opens |
|---|------------|----------|---------|-------|
| 1 | TATA AIG Scholarship | 80 | Full Coverage | September |
| 2 | Reliance Foundation Scholarship | 5,000 | Up to ₹2,00,000 | August |
| 3 | Infosys STEM Star Scholarship | 2,000 | Up to ₹1,00,000/yr | July |
| 4 | HDFC Bank Parivartan's ECSS | 6,262 | ₹30,000–₹50,000 | August |
| 5 | Kotak Kanya Scholarship | 500 | ₹1,50,000/yr | June |
| 6 | SBI Platinum Jubilee Asha | 23,230 | ₹75,000–₹5,00,000 | September |
| 7 | LIC Golden Jubilee Scholarship | 11,200 | ₹15,000–₹40,000/yr | September |
| 8 | Azim Premji Scholarship | 2,50,000 | ₹30,000/yr | Sep & Jan |
| 9 | Bharti Airtel Scholarship | 500 | Full Coverage + Laptop | July |
| 10 | Vahani Scholarship | 60 | Full Coverage + Laptop | August |
| 11 | Foundation for Excellence (FFE) | 5,000 | ₹50,000/yr | August |
| 12 | Aditya Birla Capital Scholarship | N/A | ₹25,000–₹60,000 | November |
| 13 | Panasonic Ratti Chatr Scholarship | 30 | ₹70,250/yr | July |
| 14 | Aspire Scholarship Program | 28 | Full Coverage | July |
| 15 | HOPE Scholarship (Schaeffler) | 32 | ₹50,000/yr | July |
| 16 | Legrand Empowering Scholarship | 50 | Up to ₹60,000/yr | September |
| 17 | IDFC FIRST Bank Scholarship | 270 | ₹1,00,000/yr | August |
| 18 | DXC Progressing Minds (STEM) | N/A | ₹50,000 | August |
| 19 | Deutsche Bank Engineering | 200 | ₹1,00,000 + Laptop | August |
| 20 | U-Go Scholarship Program | N/A | ₹40,000–₹60,000/yr | September |
| 21 | L'Oréal India (Women in Science) | N/A | ₹62,500 | September |
| 22 | Colgate Keep India Smiling (BDS) | 1,000 | ₹75,000 | October |
| 23 | Santoor Scholarship Programme | 1,500 | ₹30,000 | October |
| 24 | Rolls-Royce Wings4Her | N/A | ₹35,000 | October |
| 25 | Muthoot M George Scholarship | 210 | ₹1,20,000–₹2,40,000 | November |
| 26 | Sitaram Jindal Foundation | N/A | Tuition + Accommodation | Always Open |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Praveen-ing/scholarship-portal.git

# Navigate to the project
cd scholarship-portal

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at **http://localhost:3000**

### Build for Production

```bash
npm run build
```

---

## 🌐 Deployment

This project is deployed on **Vercel** with automatic deployments from the `main` branch.

**Live URL**: [https://scholarship-portal-ten.vercel.app/](https://scholarship-portal-ten.vercel.app/)

Every `git push` to `main` triggers an automatic redeployment.

### Deploy Your Own

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select the forked repo → Click Deploy
4. Done! Your site will be live in ~2 minutes

---

## 📱 QR Code

A QR code linking to the deployed site can be generated at [qrcode-monkey.com](https://www.qrcode-monkey.com/). This QR is designed to be embedded in the A4 Scholarship Handbook page.

---

## 🔧 How to Update Scholarship Data

1. Edit `data/scholarships.json`
2. Add/modify scholarship entries following the existing JSON structure
3. Place new logos in `public/logos/` (PNG format)
4. Commit and push — Vercel auto-deploys

---

## 📜 Credits

- **Data Source**: [Avanti Fellows Scholarship Team](https://avantifellows.org/)
- **Designed & Developed by**: Nethavath Praveen | IIIT Hyderabad
- **Scholarship logos**: Respective organizations

---

## 📄 License

This project was created as part of the Avanti Fellows Design Internship Assignment. All scholarship data and logos belong to their respective organizations.
