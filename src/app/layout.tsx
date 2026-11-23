import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Newsreader } from "next/font/google";
import "@/styles/globals.css";

const display = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Runs before first paint so the saved or system theme never flashes.
const themeScript = `(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}var d=t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);document.documentElement.classList.toggle("dark",d)})()`;

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
