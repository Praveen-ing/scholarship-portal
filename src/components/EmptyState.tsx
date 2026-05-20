interface EmptyStateProps {
  searchQuery: string;
  onReset: () => void;
}

export default function EmptyState({ searchQuery, onReset }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 sm:py-24 px-4 animate-fade-in">
      {/* Illustration */}
      <div className="relative mb-8">
        <div className="w-28 h-28 rounded-full bg-border-light flex items-center justify-center">
          <svg
            className="w-14 h-14 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-warning/10 flex items-center justify-center text-xl">
          😕
        </div>
      </div>

      {/* Message */}
      <h3 className="text-xl font-semibold text-text-primary font-heading mb-2">
        No scholarships found
      </h3>
      <p className="text-text-secondary text-center max-w-md mb-6 leading-relaxed">
        {searchQuery ? (
          <>
            We couldn&apos;t find any scholarships matching &quot;
            <span className="font-semibold text-primary">{searchQuery}</span>
            &quot;. Try a different search term or reset filters.
          </>
        ) : (
          "No scholarships match your current filters. Try selecting a different category."
        )}
      </p>

      {/* Reset button */}
      <button
        id="reset-filters"
        onClick={onReset}
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary-light shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
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
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
        Reset Filters
      </button>
    </div>
  );
}
