export interface ContentLink {
  label: string;
  href: string;
  download?: string;
}

export interface Stat {
  value: string;
  label: string;
  detail: string;
}

export interface Role {
  title: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ChartBar {
  label: string;
  value: number;
}

export interface BarChartData {
  title: string;
  summary: string;
  bars: ChartBar[];
  note: string;
}

export interface Project {
  slug: string;
  title: string;
  context?: string;
  date: string;
  problem: string;
  approach: string;
  results: string[];
  stack: string[];
  links: ContentLink[];
  image?: ContentImage;
  chart?: BarChartData;
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Honor {
  title: string;
  issuer: string;
  date: string;
  detail?: string;
  links: ContentLink[];
  image?: ContentImage;
  imageLabel?: string;
}

export interface Resume {
  name: string;
  alias: string;
  headline: string[];
  availability: string;
  targetRoles: string[];
  location: string;
  summary: string;
  nav: ContentLink[];
  resumeLink: ContentLink;
  actions: ContentLink[];
  stats: Stat[];
  experience: Role[];
  projects: Project[];
  moreProjects: Project[];
  skills: SkillGroup[];
  leadership: Role[];
  honors: Honor[];
  education: { school: string; degree: string; gpa: string; period: string; location: string };
  contactHeading: string;
  contact: ContentLink[];
  portrait: ContentImage;
  siteUrl: string;
}

const resumeLink: ContentLink = {
  label: "Resume (PDF)",
  href: "/documents/dung-le-resume.pdf",
  download: "DungLe_Resume.pdf",
};

export const resume: Resume = {
  name: "Dung C. Le",
  alias: "Tony Le",
  headline: ["Data Science @ Truman State", "Former Data Analyst Intern @ VinSmart Future (Vingroup)"],
  availability: "Seeking Summer 2027 internships",
  targetRoles: ["Data Analyst", "Data Engineer", "Data Scientist"],
  location: "Kirksville, MO · Open to relocation",
  summary:
    "Data Science student at Truman State University and former Data Analyst Intern at Vingroup's VinSmart Future, working across Python, R, and SQL from data cleaning and statistical modeling to dashboard deployment.",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Honors", href: "#honors" },
    { label: "Contact", href: "#contact" },
  ],
  resumeLink,
  actions: [
    resumeLink,
    { label: "GitHub", href: "https://github.com/DungLe-304" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dung-le430" },
    { label: "Email", href: "mailto:lechidung204@gmail.com" },
  ],
  stats: [
    { value: "2,200+", label: "recordings auto-labeled", detail: "Binary classifier, VinSmart Future" },
    { value: "200+", label: "calls benchmarked", detail: "Gipformer vs. Gemini ASR" },
    { value: "185", label: "buildings analyzed", detail: "Top 10: ~7.3 MW of solar" },
    { value: "40+", label: "students tutored", detail: "Precalculus through Calculus II" },
  ],
  experience: [
    {
      title: "Data Analyst Intern, AI/Callbot Team",
      org: "VinSmart Future (Vingroup)",
      period: "May 2026 – August 2026",
      bullets: [
        "Benchmarked two production ASR engines (Gipformer vs. Gemini) on 200+ labeled calls with a Python WER/CER pipeline and stakeholder dashboard; traced foreign-language errors to running mode (online vs. offline), not audio noise.",
        "Built a binary classifier to auto-label audio/transcript pairs as usable or unusable for ASR training, owning EDA through feature extraction and replacing manual review of 2,200+ recordings.",
        "Engineered a speaker-diarization pipeline (Pyannote) to segment unsegmented two-speaker call transcripts into agent and customer channels, enabling per-speaker WER analysis across 150+ labeled calls and revealing systematically higher error rates on customer-side audio than on agent-side.",
      ],
    },
    {
      title: "AI Engineering Fellow",
      org: "CodePath x Anthropic",
      period: "May 2026 – August 2026",
      bullets: [
        "Selected for a competitive 10-week program built with Anthropic engineers; extended open-source repositories with LLM-assisted development in hands-on labs.",
      ],
    },
    {
      title: "CS 180 (Java I) Grader / Teaching Assistant",
      org: "Truman State University",
      period: "August 2026 – Present",
      bullets: [
        "Grade Java assignments against instructor rubrics for correctness, control flow, and OOP design; support students during weekly lab hours and flag recurring issues to the instructor.",
      ],
    },
    {
      title: "Mathematics Tutor",
      org: "Truman State University",
      period: "September 2025 – Present",
      bullets: [
        "Tutored 40+ students across Precalculus, Calculus I, and Calculus II through 1:1 and small-group sessions, with 32 students achieving an A grade across all three courses.",
        "Created practice sets and recap sheets spanning limits, integration techniques, and series convergence.",
      ],
    },
  ],
  projects: [
    {
      slug: "roofwatt",
      title: "RoofWatt: AI Solar Lead Finder",
      context: "HackPrinceton",
      date: "November 2026",
      problem: "Which Houston commercial rooftops make the strongest solar leads, ranked by payback?",
      approach:
        "Co-built an AI agent (LangChain deepagents, Gemini) that screens commercial buildings using CoStar property data and Vexcel aerial imagery, ranks rooftops by solar payback, and drafts proposals to building owners. Built the data pipeline, roof-area and financial models (NREL PVWatts energy output, savings, payback, CO₂ avoided), and a Streamlit/pydeck map.",
      results: [
        "Analyzed 185 buildings.",
        "The top 10 represent ~7.3 MW of solar, ~$886K in annual savings, and ~3,400 t of CO₂ avoided per year.",
      ],
      stack: ["LangChain deepagents", "Gemini", "NREL PVWatts", "Streamlit", "pydeck"],
      links: [
        { label: "GitHub", href: "https://github.com/DungLe-304/roofwatt" },
        { label: "Live demo", href: "https://roofwatt.streamlit.app" },
      ],
      image: {
        src: "/images/projects/roofwatt-overview.png",
        alt: "RoofWatt overview: discover rooftops on a map, compare energy, savings, payback, and emissions, then draft an owner proposal.",
        width: 1568,
        height: 1003,
      },
    },
    {
      slug: "sat-graduation",
      title: "SAT & Graduation Rate Analysis",
      date: "December 2025",
      problem: "Does the link between SAT scores and graduation rates differ between public and private colleges?",
      approach:
        "Engineered an end-to-end Python analytics pipeline (pandas, SciPy, Statsmodels) on 47 U.S. colleges: data cleaning, SQL seed script, 7 analytical queries, regression diagnostics, Plotly charts, and a predict_grad_rate() function. Compared 20 public and 27 private institutions using Pearson correlation, OLS regression, and ANCOVA-style interaction modeling.",
      results: [
        "Public schools showed a higher SAT-graduation correlation (r=0.701, p<0.001) than private schools (r=0.572, p<0.01).",
        "The difference was not statistically significant (interaction term p=0.175).",
      ],
      stack: ["Python", "SQL", "pandas", "SciPy", "Statsmodels", "Plotly"],
      links: [{ label: "GitHub", href: "https://github.com/DungLe-304/graduation-rates-sat-analysis" }],
      image: {
        src: "/images/projects/sat-scatter-with-fits.png",
        alt: "Scatter plot of graduation rate against SAT score for public and private colleges, with a fitted line for each sector and Truman State marked.",
        width: 750,
        height: 500,
      },
      chart: {
        title: "SAT-graduation correlation (r)",
        summary:
          "Correlation between SAT and graduation rate: public colleges r equals 0.701, private colleges r equals 0.572. The SAT by sector interaction is not statistically significant, p equals 0.175.",
        bars: [
          { label: "Public", value: 0.701 },
          { label: "Private", value: 0.572 },
        ],
        note: "SAT × sector interaction not statistically significant (p=0.175)",
      },
    },
  ],
  moreProjects: [
    {
      slug: "walmart-sales",
      title: "Walmart Sales Analytics Dashboard",
      date: "March 2025",
      problem: "Which branches, product lines, and times of day drive Walmart sales?",
      approach:
        "Engineered a MySQL analytics pipeline on 1,000 transactions across 3 branches, with data cleaning, feature engineering, and 20+ EDA queries, then deployed an interactive dashboard with 5 KPI cards and 7 Chart.js visualizations.",
      results: [
        "Naypyitaw (Branch C) led revenue at $110,568, and Food & Beverages was the top product line at $56,145.",
        "Afternoon hours drove peak sales, with 454 transactions and ~$148K in revenue.",
      ],
      stack: ["MySQL", "SQL", "JavaScript", "Chart.js", "HTML", "CSS"],
      links: [
        { label: "GitHub", href: "https://github.com/DungLe-304/walmart-sales-analytics" },
        { label: "Live dashboard", href: "https://dungle-304.github.io/walmart-sales-analytics/walmart_dashboard.html" },
      ],
      image: {
        src: "/images/projects/walmart-analytics.png",
        alt: "Walmart sales dashboard with KPI cards and charts for revenue by branch and product line, day of week, payment method, and time of day.",
        width: 1468,
        height: 1051,
      },
    },
  ],
  skills: [
    { name: "Languages", items: ["Python", "R", "SQL", "Java", "JavaScript", "TypeScript", "HTML", "CSS"] },
    { name: "Data & ML", items: ["pandas", "NumPy", "scikit-learn", "PyTorch", "SciPy", "Statsmodels"] },
    {
      name: "Statistics & Modeling",
      items: ["EDA", "OLS", "Classification", "Model diagnostics", "Cross-validation", "Hypothesis testing"],
    },
    {
      name: "Tools & BI",
      items: ["Jupyter", "Git", "GitHub", "FastAPI", "Flask", "MongoDB", "REST APIs", "Tableau", "Power BI", "Excel"],
    },
  ],
  leadership: [
    {
      title: "Chair of Finance",
      org: "Community of College Entrepreneurs (CCE)",
      period: "November 2026 – Present",
      bullets: ["Manage the chapter budget, track event income and expenses, and prepare funding requests and financial reports."],
    },
    {
      title: "Vice President / Risk Manager",
      org: "Truman ASA Student Chapter",
      period: "May 2026 – Present",
      bullets: [
        "Co-lead a 40+ member student chapter, organizing weekly study nights and hands-on workshops on data cleaning (R tidyverse, Python pandas) and statistical modeling; also serve as the chapter's Risk Manager.",
      ],
    },
  ],
  honors: [
    {
      title: "3rd Place, TruHacks x Boeing 2026",
      issuer: "Hackathon Business Category",
      date: "March 2026",
      detail: "Built SyncShift, an AI-driven smart scheduling app for campus workers.",
      links: [
        { label: "SyncShift on GitHub", href: "https://github.com/DungLe-304/TruHacks2026-Business" },
        { label: "Pitch deck", href: "/documents/syncshift-pitch-deck.pdf" },
      ],
      imageLabel: "View photo",
      image: {
        src: "/images/awards/truhacks-2026.jpg",
        alt: "Dung Le standing in front of a projector screen that reads Third Place, Sync Shift.",
        width: 3024,
        height: 4032,
      },
    },
    {
      title: "President's List",
      issuer: "Truman State University",
      date: "Spring 2025",
      detail: "Recognized for a 4.0 grade point average for the semester.",
      links: [],
      imageLabel: "View letter",
      image: {
        src: "/images/awards/presidents-list.png",
        alt: "Truman State University email announcing inclusion on the President's List for a 4.0 grade point average in the 2025 spring semester.",
        width: 1212,
        height: 1650,
      },
    },
    {
      title: "Anthropic Claude Code in Action Certification",
      issuer: "Anthropic",
      date: "March 2026",
      links: [{ label: "Verify certificate", href: "https://verify.skilljar.com/c/zraqd9ioaqor" }],
      imageLabel: "View certificate",
      image: {
        src: "/images/certifications/claude-code-in-action.jpg",
        alt: "Anthropic certificate of completion for Claude Code in Action, issued to Dung Le.",
        width: 800,
        height: 618,
      },
    },
    {
      title: "AI Engineering Fellow",
      issuer: "CodePath x Anthropic",
      date: "May 2026",
      detail: "Program admission for CodePath's Applied AI Engineering course.",
      links: [],
      imageLabel: "View admission",
      image: {
        src: "/images/certifications/codepath-applied-ai-engineering.jpg",
        alt: "CodePath admission graphic reading: Officially admitted. I'm an Emerging Engineer! Applied AI Engineering.",
        width: 800,
        height: 800,
      },
    },
  ],
  education: {
    school: "Truman State University",
    degree: "B.S. in Data Science, Minor in Mathematics",
    gpa: "3.73 / 4.0",
    period: "August 2024 – Present",
    location: "Kirksville, MO",
  },
  contactHeading: "Let's connect.",
  contact: [
    { label: "Email", href: "mailto:lechidung204@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dung-le430" },
    { label: "GitHub", href: "https://github.com/DungLe-304" },
  ],
  portrait: {
    src: "/images/avatar.jpg",
    alt: "Portrait of Dung C. Le",
    width: 1113,
    height: 1711,
  },
  siteUrl: "https://dungleportfolio.vercel.app",
};
