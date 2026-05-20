export default function Footer() {
  return (
    <footer id="about" className="bg-primary mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center text-white font-bold font-heading">
                S
              </div>
              <div>
                <h3 className="text-white font-bold font-heading">
                  ScholarHub
                </h3>
                <p className="text-white/50 text-xs">by Avanti Fellows</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Helping students discover and access scholarship opportunities
              across India. Your education deserves the best support.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-accent transition-colors duration-200"
                >
                  All Scholarships
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-accent transition-colors duration-200"
                >
                  For Girls
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-accent transition-colors duration-200"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 text-sm hover:text-accent transition-colors duration-200"
                >
                  STEM & Science
                </a>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-semibold font-heading mb-4 text-sm uppercase tracking-wide">
              About
            </h4>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              This scholarship portal is curated to help undergraduate students
              find the right financial support for their education.
            </p>
            <div className="flex items-center gap-2 text-accent/80 text-sm">
              <span>📧</span>
              <span>scholarship@avantifellows.org</span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2025 ScholarHub. All rights reserved.
          </p>
          <p className="text-white/50 text-sm font-medium">
            Designed with ❤️ by{" "}
            <span className="text-accent font-semibold">
              Nethavath Praveen
            </span>{" "}
            | IIIT Hyderabad
          </p>
        </div>
      </div>
    </footer>
  );
}
