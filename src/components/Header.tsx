"use client";

import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-lg transition-all duration-300 ${
              scrolled
                ? "bg-primary shadow-md"
                : "bg-white/20 backdrop-blur-sm"
            }`}
          >
            S
          </div>
          <div>
            <h1
              className={`text-lg font-bold font-heading leading-tight transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              ScholarHub
            </h1>
            <p
              className={`text-xs transition-colors duration-300 ${
                scrolled ? "text-text-secondary" : "text-white/70"
              }`}
            >
              by Avanti Fellows
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#scholarships"
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
              scrolled ? "text-text-secondary" : "text-white/80"
            }`}
          >
            Scholarships
          </a>
          <a
            href="#about"
            className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
              scrolled ? "text-text-secondary" : "text-white/80"
            }`}
          >
            About
          </a>
        </nav>

        <div
          className={`hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-accent text-white shadow-md hover:bg-accent-dark"
              : "bg-white/15 text-white backdrop-blur-sm hover:bg-white/25"
          }`}
        >
          <span className="text-base">🎓</span>
          <span>26 Scholarships</span>
        </div>
      </div>
    </header>
  );
}
