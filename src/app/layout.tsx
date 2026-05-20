import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scholarship Opportunities 2025-26 | Discover & Apply",
  description:
    "Discover 26+ scholarships for Indian undergraduate students. Search, filter, and find the perfect scholarship for engineering, medical, STEM, and more. Curated by Avanti Fellows.",
  keywords: [
    "scholarships India",
    "undergraduate scholarships",
    "engineering scholarships",
    "medical scholarships",
    "STEM scholarships",
    "scholarships for girls",
    "Avanti Fellows",
    "2025-26 scholarships",
  ],
  authors: [{ name: "Nethavath Praveen" }],
  openGraph: {
    title: "Scholarship Opportunities 2025-26",
    description:
      "Discover 26+ scholarships for Indian undergraduate students across Engineering, Medical, STEM, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
