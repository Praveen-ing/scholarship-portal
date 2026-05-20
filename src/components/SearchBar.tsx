"use client";

import { useRef, useEffect } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto group">
      {/* Search icon */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors duration-200">
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
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Input */}
      <input
        ref={inputRef}
        id="search-scholarships"
        type="text"
        placeholder="Search scholarships by name..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-24 py-4 bg-white rounded-2xl border-2 border-border text-text-primary placeholder:text-text-muted text-base font-body shadow-sm focus:outline-none focus:border-accent focus:shadow-lg focus:shadow-accent/10 transition-all duration-300"
      />

      {/* Clear button */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-16 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-lg bg-border-light text-text-muted hover:bg-border hover:text-text-primary transition-all duration-200"
          aria-label="Clear search"
        >
          <svg
            className="w-4 h-4"
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
      )}

      {/* Keyboard shortcut hint */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1">
        <kbd className="px-2 py-1 text-xs font-medium text-text-muted bg-border-light rounded-md border border-border">
          Ctrl+K
        </kbd>
      </div>
    </div>
  );
}
