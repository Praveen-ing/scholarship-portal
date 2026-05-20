"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { Scholarship } from "@/types";

interface ScholarshipModalProps {
  scholarship: Scholarship | null;
  onClose: () => void;
}

export default function ScholarshipModal({
  scholarship,
  onClose,
}: ScholarshipModalProps) {
  const [logoError, setLogoError] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (scholarship) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      setLogoError(false);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [scholarship, handleKeyDown]);

  if (!scholarship) return null;

  const initials = scholarship.name
    .split(" ")
    .filter((w) => w.length > 2 || scholarship.name.split(" ").length <= 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const categoryLabels: Record<string, string> = {
    girls: "👩‍🎓 Girls",
    engineering: "⚙️ Engineering",
    stem: "🔬 STEM",
    medical: "🏥 Medical",
    income_based: "💰 Income Based",
    open_to_all: "🌐 Open to All",
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-primary-dark/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with color */}
        <div
          className="relative p-6 sm:p-8"
          style={{
            background: `linear-gradient(135deg, ${scholarship.color} 0%, ${scholarship.color}CC 100%)`,
          }}
        >
          {/* Close button */}
          <button
            id="modal-close"
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/30 transition-colors duration-200 cursor-pointer"
            aria-label="Close modal"
          >
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shrink-0 overflow-hidden">
              {!logoError && scholarship.logo ? (
                <Image
                  src={scholarship.logo}
                  alt={`${scholarship.name} logo`}
                  width={48}
                  height={48}
                  className="object-contain p-1"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-white text-xl font-bold font-heading">
                  {initials}
                </span>
              )}
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading leading-tight">
                {scholarship.name}
              </h3>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-sm text-white/80 bg-white/15 px-3 py-1 rounded-full">
                  📅 {scholarship.openingMonth}
                </span>
                {scholarship.scholars !== "N/A" && (
                  <span className="text-sm text-white/80 bg-white/15 px-3 py-1 rounded-full">
                    👥 {scholarship.scholars} scholars
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[55vh]">
          {/* Benefit */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">💰</span>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide font-heading">
                Benefits
              </h4>
            </div>
            <div className="bg-gradient-to-r from-accent/5 to-primary/5 rounded-2xl p-4 border border-accent/10">
              <div className="text-lg font-bold text-primary font-heading mb-1">
                {scholarship.benefitAmount}
              </div>
              <p className="text-sm text-text-secondary leading-relaxed">
                {scholarship.benefits}
              </p>
            </div>
          </div>

          {/* Eligibility */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">📋</span>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide font-heading">
                Eligibility Criteria
              </h4>
            </div>
            <ul className="space-y-2.5">
              {scholarship.eligibility.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                    style={{ backgroundColor: scholarship.color }}
                  >
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-lg">🏷️</span>
              <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wide font-heading">
                Categories
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {scholarship.categories.map((cat) => (
                <span
                  key={cat}
                  className="text-sm px-3 py-1.5 rounded-lg bg-border-light text-text-secondary font-medium"
                >
                  {categoryLabels[cat] || cat}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-border bg-border-light/50">
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span>Press ESC to close</span>
            <span>Expected Opening: {scholarship.openingMonth}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
