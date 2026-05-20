"use client";

import { FILTER_CATEGORIES } from "@/types";

interface FilterChipsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  counts: Record<string, number>;
}

export default function FilterChips({
  activeFilter,
  onFilterChange,
  counts,
}: FilterChipsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {FILTER_CATEGORIES.map((category) => {
          const isActive = activeFilter === category.id;
          const count =
            category.id === "all" ? counts.total : counts[category.id] || 0;

          return (
            <button
              key={category.id}
              id={`filter-${category.id}`}
              onClick={() => onFilterChange(category.id)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 border-2 cursor-pointer select-none ${
                isActive
                  ? "bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105"
                  : "bg-white text-text-secondary border-border hover:border-accent/50 hover:text-accent hover:shadow-md"
              }`}
            >
              <span className="text-base">{category.icon}</span>
              <span>{category.label}</span>
              <span
                className={`inline-flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full text-xs font-semibold transition-colors duration-300 ${
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-border-light text-text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
