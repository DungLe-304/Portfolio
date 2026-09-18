import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Dung Chi Le | Data Science Student",
  description:
    "Portfolio of Dung Chi Le — Data Science student at Truman State University with production experience as a Data Analyst Intern at Vingroup's VinSmart Future. Comfortable across the full analytics workflow in Python, R, and SQL.",
  keywords: ["portfolio", "data science", "data engineering", "internship", "Python", "SQL"],
  authors: [{ name: "Dung Chi Le" }],
  openGraph: {
    title: "Dung Chi Le | Portfolio",
    description: "Data Science student seeking internship opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
