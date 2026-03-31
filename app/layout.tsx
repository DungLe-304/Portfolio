import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dung Chi Le | Data Science Student",
  description:
    "Portfolio of Dung Chi Le — Data Science student at Truman State University. Experienced in data pipelines, statistical modeling, and full-stack development.",
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
    // No hardcoded "dark" class — the inline script below applies it
    // before hydration to avoid FOUC (flash of wrong theme)
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
