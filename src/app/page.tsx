"use client";

import { useState, useMemo, useEffect } from "react";
import { Scholarship } from "@/types";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import FilterChips from "@/components/FilterChips";
import ScholarshipCard from "@/components/ScholarshipCard";
import ScholarshipModal from "@/components/ScholarshipModal";
import EmptyState from "@/components/EmptyState";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import Footer from "@/components/Footer";
import scholarshipsData from "../../data/scholarships.json";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedScholarship, setSelectedScholarship] =
    useState<Scholarship | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const scholarships: Scholarship[] = scholarshipsData;

  useEffect(() => {
    // Simulate a brief loading state for visual effect
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Filter logic
  const filteredScholarships = useMemo(() => {
    let results = scholarships;

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (s) =>
          s.name.toLowerCase().includes(query) ||
          s.benefits.toLowerCase().includes(query) ||
          s.eligibility.some((e) => e.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (activeFilter !== "all") {
      results = results.filter((s) => s.categories.includes(activeFilter));
    }

    return results;
  }, [scholarships, searchQuery, activeFilter]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { total: scholarships.length };
    scholarships.forEach((s) => {
      s.categories.forEach((cat) => {
        counts[cat] = (counts[cat] || 0) + 1;
      });
    });
    return counts;
  }, [scholarships]);

  const handleReset = () => {
    setSearchQuery("");
    setActiveFilter("all");
  };

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />

      {/* Search & Filter Section */}
      <section
        id="scholarships"
        className="relative -mt-4 sm:-mt-6 z-10 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto space-y-6">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <FilterChips
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            counts={categoryCounts}
          />
        </div>
      </section>

      {/* Results count */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-2">
        {!isLoading && (
          <div className="flex items-center justify-between animate-fade-in">
            <p className="text-sm text-text-secondary">
              Showing{" "}
              <span className="font-semibold text-text-primary">
                {filteredScholarships.length}
              </span>{" "}
              {filteredScholarships.length === 1
                ? "scholarship"
                : "scholarships"}
              {activeFilter !== "all" && (
                <span className="text-accent font-medium">
                  {" "}
                  in {activeFilter.replace("_", " ")}
                </span>
              )}
              {searchQuery && (
                <span className="text-text-muted">
                  {" "}
                  for &quot;{searchQuery}&quot;
                </span>
              )}
            </p>
            {(searchQuery || activeFilter !== "all") && (
              <button
                onClick={handleReset}
                className="text-sm text-accent hover:text-accent-dark font-medium transition-colors duration-200 cursor-pointer"
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </section>

      {/* Scholarship Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex-1">
        {isLoading ? (
          <LoadingSkeleton />
        ) : filteredScholarships.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredScholarships.map((scholarship, index) => (
              <ScholarshipCard
                key={scholarship.id}
                scholarship={scholarship}
                index={index}
                onViewDetails={setSelectedScholarship}
              />
            ))}
          </div>
        ) : (
          <EmptyState searchQuery={searchQuery} onReset={handleReset} />
        )}
      </section>

      <Footer />

      {/* Modal */}
      <ScholarshipModal
        scholarship={selectedScholarship}
        onClose={() => setSelectedScholarship(null)}
      />
    </main>
  );
}
