export interface Award {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  category: "competition" | "scholarship" | "certification" | "recognition";
  // Certificate pop-up (for certifications)
  certificateUrl?: string;
  // Competition gallery (for hackathons / competitions)
  gallery?: {
    images: string[];       // paths under /public
    presentationUrl?: string;
    repoUrl?: string;
    projectName?: string;
    projectTagline?: string;
  };
}

export const awards: Award[] = [
  {
    id: 1,
    title: "President's List",
    issuer: "Truman State University",
    date: "Spring 2025",
    description:
      "Awarded for achieving a perfect 4.0 semester GPA — recognizing academic excellence across all coursework.",
    category: "recognition",
    certificateUrl: "/certifications/presidents-list.png",
  },
  {
    id: 2,
    title: "3rd Place — TruHacks x Boeing 2026",
    issuer: "TruHacks Hackathon",
    date: "March 2026",
    description:
      "Placed 3rd out of competing teams in a hackathon co-organized with Boeing. Built SyncShift — an AI-driven smart scheduling app for campus workers — in under 24 hours.",
    category: "competition",
    gallery: {
      images: ["/truhacks/award-photo.jpg"],
      presentationUrl: "/truhacks/syncshift-pitch.pdf",
      repoUrl: "https://github.com/DungLe-304/TruHacks2026-Business",
      projectName: "SyncShift",
      projectTagline: "AI-Driven Smart Scheduling for Campus Workers",
    },
  },
  {
    id: 3,
    title: "Anthropic Claude Code in Action",
    issuer: "Anthropic",
    date: "March 2025",
    description:
      "Certified for proficiency in using Claude Code for AI-assisted software development workflows.",
    category: "certification",
    certificateUrl: "/certifications/claude-code-in-action.pdf",
  },
  {
    id: 4,
    title: "Google Gemini Certified Student",
    issuer: "Google",
    date: "December 2025",
    description:
      "Certified by Google for demonstrated knowledge and practical skills with the Gemini AI platform.",
    category: "certification",
    certificateUrl: "/certifications/google-gemini.pdf",
  },
];
