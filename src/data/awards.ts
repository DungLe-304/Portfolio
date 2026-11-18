export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  category: "competition" | "scholarship" | "certification" | "recognition";
  // Certificate pop-up (for certifications)
  certificateUrl?: string;
  thumbnailUrl?: string;    // preview image shown in the Certifications grid
  certificateAlt?: string;  // alt text describing the certificate image
  // Competition gallery (for hackathons / competitions)
  gallery?: {
    images: string[];       // paths under /public
    presentationUrl?: string;
    repoUrl?: string;
    projectName?: string;
    projectTagline?: string;
    summary?: string;
  };
}

export const awards: Award[] = [
  {
    id: 7,
    title: "Participant, HackPrinceton Fall 2026",
    issuer: "Princeton University",
    date: "November 2026",
    description:
      "Built RoofWatt — an AI agent that ranks commercial rooftops by solar payback and drafts a proposal to the building owner. Entered in the Sustainability, CoStar, Amazon, and LangChain tracks.",
    category: "competition",
    gallery: {
      images: ["/images/projects/roofwatt-overview.png"],
      repoUrl: "https://github.com/DungLe-304/roofwatt",
      projectName: "RoofWatt",
      projectTagline: "Find the roofs where solar pays",
      summary:
        "RoofWatt screens all 185 Houston office buildings in the CoStar extract, estimates " +
        "each roof's energy, savings, payback, and CO₂ avoided with NREL PVWatts and published " +
        "cost and tariff data, ranks them in code, and shows the top 10 on a map with Vexcel " +
        "aerial imagery — then drafts a pitch letter to the owner of the best building.",
    },
  },
  {
    id: 6,
    title: "Vice President / Risk Manager, Truman ASA Chapter",
    issuer: "Truman State University",
    date: "April 2026",
    category: "recognition",
  },
  {
    id: 1,
    title: "President's List",
    issuer: "Truman State University",
    date: "Spring 2025",
    description:
      "Awarded for achieving a perfect 4.0 semester GPA — recognizing academic excellence across all coursework.",
    category: "recognition",
    certificateUrl: "/images/awards/presidents-list.png",
  },
  {
    id: 2,
    title: "3rd Place, TruHacks x Boeing 2026 (Hackathon Business Category)",
    issuer: "TruHacks Hackathon",
    date: "March 2026",
    description:
      "Placed 3rd out of competing teams in a hackathon co-organized with Boeing. Built SyncShift — an AI-driven smart scheduling app for campus workers — in under 24 hours.",
    category: "competition",
    gallery: {
      images: ["/images/awards/truhacks-2026.jpg"],
      presentationUrl: "/documents/syncshift-pitch-deck.pdf",
      repoUrl: "https://github.com/DungLe-304/TruHacks2026-Business",
      projectName: "SyncShift",
      projectTagline: "AI-Driven Smart Scheduling for Campus Workers",
      summary:
        "SyncShift solves a gap no existing tool addresses: F-1 international students " +
        "are legally capped at 20 hrs/week, yet no scheduling platform understands " +
        "their real availability. Using an Uber-inspired AI matching algorithm, " +
        "SyncShift automatically fills open shifts by scanning availability, ranked " +
        "priorities, and hour compliance — no manager phone calls required.",
    },
  },
  {
    id: 3,
    title: "Anthropic Claude Code in Action",
    issuer: "Anthropic",
    date: "March 2026",
    description:
      "Certified for proficiency in using Claude Code for AI-assisted software development workflows.",
    category: "certification",
    certificateUrl: "/documents/certificates/claude-code-in-action.pdf",
    thumbnailUrl: "/images/certifications/claude-code-in-action.jpg",
    certificateAlt:
      "Anthropic certificate of completion for Claude Code in Action, issued to Dung Le",
  },
  {
    id: 4,
    title: "Google Gemini Certified Student",
    issuer: "Google",
    date: "December 2025",
    description:
      "Certified by Google for demonstrated knowledge and practical skills with the Gemini AI platform.",
    category: "certification",
    certificateUrl: "/documents/certificates/google-gemini.pdf",
    thumbnailUrl: "/images/certifications/google-gemini.jpg",
    certificateAlt:
      "Google for Education Gemini Certified Student certificate awarded to Dung Le",
  },
  {
    id: 5,
    title: "CodePath x Anthropic AI Engineering Fellowship",
    issuer: "CodePath",
    date: "May 2026",
    description:
      "Selected for a competitive, 10-week technical pathway developed in partnership with Anthropic engineers to master AI-native software development.",
    category: "certification",
    certificateUrl: "/images/certifications/codepath-applied-ai-engineering.jpg",
    thumbnailUrl: "/images/certifications/codepath-applied-ai-engineering.jpg",
    certificateAlt:
      "CodePath admission graphic reading \"Officially admitted. I'm an Emerging Engineer!\" for the Applied AI Engineering course",
  },
];
