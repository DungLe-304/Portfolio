import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { resume } from "@/content/resume";
import "@/styles/globals.css";

// Single-weight Newsreader cuts keep the display font small. License: src/app/fonts/OFL.txt
const display = localFont({
  src: [
    { path: "./fonts/newsreader-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/newsreader-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: "Times New Roman",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// Runs before first paint: marks that JavaScript is on (tabs rely on it) and applies a saved dark
// theme without a flash. Light is the default.
const themeScript = `(function(){var r=document.documentElement,t;r.classList.add("js");try{t=localStorage.getItem("theme")}catch(e){}r.classList.toggle("dark",t==="dark")})()`;

const title = `${resume.name} | Data Science Portfolio`;
const description = `${resume.headline.join(" · ")}. ${resume.availability}: ${resume.targetRoles.join(", ")}.`;

export const metadata: Metadata = {
  metadataBase: new URL(resume.siteUrl),
  title,
  description,
  authors: [{ name: resume.name, url: resume.siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: resume.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#f3ede2",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body id="top">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-2 focus:z-50 focus:bg-ink focus:px-4 focus:py-2.5 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
