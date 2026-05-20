"use client";

import { useState } from "react";
import Image from "next/image";
import { Scholarship } from "@/types";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  index: number;
  onViewDetails: (scholarship: Scholarship) => void;
}

export default function ScholarshipCard({
  scholarship,
  index,
  onViewDetails,
}: ScholarshipCardProps) {
  const [logoError, setLogoError] = useState(false);

  const initials = scholarship.name
    .split(" ")
    .filter((w) => w.length > 2 || scholarship.name.split(" ").length <= 2)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  const categoryLabels: Record<string, string> = {
    girls: "👩‍🎓 Girls",
    engineering: "⚙️ Engg",
    stem: "🔬 STEM",
    medical: "🏥 Medical",
    income_based: "💰 Income",
    open_to_all: "🌐 Open",
  };

  return (
    <div
      className="group bg-white rounded-2xl border-2 border-border/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 hover:border-accent/30 animate-slide-up opacity-0 flex flex-col"
      style={{
        animationDelay: `${Math.min(index * 0.05, 0.5)}s`,
        animationFillMode: "forwards",
      }}
    >
      {/* Color accent bar */}
      <div
        className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
        style={{
          background: `linear-gradient(90deg, ${scholarship.color}, ${scholarship.color}88)`,
        }}
      />

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {/* Top: Logo + Name */}
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md transition-transform duration-300 group-hover:scale-110 overflow-hidden"
            style={{ backgroundColor: logoError ? scholarship.color : "#fff" }}
          >
            {!logoError && scholarship.logo ? (
              <Image
                src={scholarship.logo}
                alt={`${scholarship.name} logo`}
                width={40}
                height={40}
                className="object-contain p-1"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="text-white font-bold text-sm font-heading">
                {initials}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-text-primary font-heading leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-200">
              {scholarship.name}
            </h3>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                {scholarship.openingMonth}
              </span>
              {scholarship.scholars !== "N/A" && (
                <span className="text-xs text-text-muted">
                  {scholarship.scholars} scholars
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Benefit amount */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-3 mb-4 border border-primary/10">
          <div className="text-xs text-text-muted font-medium uppercase tracking-wide mb-0.5">
            Benefit
          </div>
          <div className="text-sm font-semibold text-primary font-heading">
            {scholarship.benefitAmount}
          </div>
        </div>

        {/* Eligibility preview */}
        <div className="mb-4 flex-1">
          <div className="text-xs text-text-muted font-medium uppercase tracking-wide mb-2">
            Key Eligibility
          </div>
          <ul className="space-y-1.5">
            {scholarship.eligibility.slice(0, 3).map((item, i) => (
              <li
                key={i}
                className="text-sm text-text-secondary flex items-start gap-2"
              >
                <span className="text-accent mt-1 shrink-0">•</span>
                <span className="line-clamp-1">{item}</span>
              </li>
            ))}
            {scholarship.eligibility.length > 3 && (
              <li className="text-xs text-text-muted pl-4">
                +{scholarship.eligibility.length - 3} more criteria
              </li>
            )}
          </ul>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {scholarship.categories.slice(0, 3).map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-0.5 rounded-md bg-border-light text-text-muted font-medium"
            >
              {categoryLabels[cat] || cat}
            </span>
          ))}
          {scholarship.categories.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-md bg-border-light text-text-muted font-medium">
              +{scholarship.categories.length - 3}
            </span>
          )}
        </div>

        {/* View details button */}
        <button
          id={`view-details-${scholarship.id}`}
          onClick={() => onViewDetails(scholarship)}
          className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer border-2 border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
        >
          View Details →
        </button>
      </div>
    </div>
  );
}
