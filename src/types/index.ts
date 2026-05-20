export interface Scholarship {
  id: number;
  name: string;
  scholars: string;
  eligibility: string[];
  benefits: string;
  benefitAmount: string;
  openingMonth: string;
  categories: string[];
  color: string;
  logo: string;
}

export interface FilterCategory {
  id: string;
  label: string;
  icon: string;
}

export const FILTER_CATEGORIES: FilterCategory[] = [
  { id: "all", label: "All", icon: "🎓" },
  { id: "girls", label: "Girls", icon: "👩‍🎓" },
  { id: "engineering", label: "Engineering", icon: "⚙️" },
  { id: "stem", label: "STEM", icon: "🔬" },
  { id: "medical", label: "Medical", icon: "🏥" },
  { id: "income_based", label: "Income Based", icon: "💰" },
  { id: "open_to_all", label: "Open to All", icon: "🌐" },
];
