export default function HeroSection() {
  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            Updated for 2025–26
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight font-heading animate-slide-up">
            Scholarship{" "}
            <span className="relative">
              <span className="relative z-10 text-accent-light">
                Opportunities
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-3 bg-accent/20 rounded-sm -z-0" />
            </span>
            <br />
            <span className="text-white/90">2025–26</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto animate-slide-up stagger-2">
            Discover scholarships for undergraduate students across India.
            <br className="hidden sm:block" />
            Find the right opportunity to fund your education.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg mx-auto animate-slide-up stagger-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition-colors duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-white font-heading">
                26
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                Scholarships
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition-colors duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-accent-light font-heading">
                3L+
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                Total Scholars
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:bg-white/15 transition-colors duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-white font-heading">
                7
              </div>
              <div className="text-xs sm:text-sm text-white/60 mt-1">
                Categories
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="mt-12 animate-float">
            <div className="inline-flex flex-col items-center gap-1 text-white/40">
              <span className="text-xs font-medium">Explore below</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 80L60 74.7C120 69.3 240 58.7 360 53.3C480 48 600 48 720 53.3C840 58.7 960 69.3 1080 69.3C1200 69.3 1320 58.7 1380 53.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="var(--background)"
          />
        </svg>
      </div>
    </section>
  );
}
