export interface Experience {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const experience: Experience[] = [
  {
    role: "Data Analyst Intern",
    org: "VinSmart Future (Vingroup) — AI/Callbot Team",
    period: "May 2026 – Aug 2026",
    bullets: [
      "Benchmarked two production ASR engines (Gipformer vs. Gemini) across 200+ manually labeled customer-service call recordings, building a WER/CER evaluation pipeline in Python and delivering an interactive dashboard to stakeholders via Azure Blob Storage; isolated running mode (online vs. offline), not audio noise, as the dominant driver of erroneous foreign-language output, redirecting the team's debugging effort.",
      "Designed and built a binary classifier to auto-label audio/transcript pairs as usable or unusable for ASR training, owning the full workflow from EDA to feature extraction on the production call corpus, replacing a manual review step for a dataset of 2,200+ recordings.",
      "Engineered a speaker-diarization pipeline (Pyannote) to segment unsegmented two-speaker call transcripts into agent and customer channels, enabling per-speaker WER analysis across 150+ labeled calls and revealing systematically higher error rates on customer-side audio than on agent-side.",
    ],
  },
  {
    role: "CS 180 (Java I) Grader / Teaching Assistant",
    org: "Truman State University",
    period: "Aug 2026 – Present",
    bullets: [
      "Grade programming assignments for an introductory Java course against instructor-provided rubrics, reviewing student code for correctness, control flow, and object-oriented design.",
      "Support students on Java fundamentals — variables, control structures, methods, and basic OOP — during weekly lab hours, and flag recurring submission issues to the instructor.",
    ],
  },
  {
    role: "AI Engineering Fellow",
    org: "CodePath x Anthropic",
    period: "May 2026 – Aug 2026",
    bullets: [
      "Selected for a competitive, 10-week technical pathway developed in partnership with Anthropic engineers to master AI-native software development.",
      "Engaging in hands-on labs to analyze and extend open-source repositories, applying LLM-driven strategies to solve real-world engineering challenges.",
    ],
  },
  {
    role: "Mathematics Tutor",
    org: "Truman State University",
    period: "Sep 2025 – Present",
    bullets: [
      "Tutored 30+ students across Precalculus, Calculus I, and Calculus II through 1:1 and small-group sessions, with 24 students achieving an A grade across all three courses.",
      "Developed targeted practice sets and concept recap sheets spanning key topics: trigonometric identities & the unit circle, limits & derivatives, integration techniques (u-substitution, integration by parts, partial fractions, trigonometric substitution), improper integrals, and sequences & series (convergence tests).",
    ],
  },
];
