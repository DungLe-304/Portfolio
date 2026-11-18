export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 3,
    title: "RoofWatt — AI Solar Rooftop Screener (HackPrinceton Fall 2026)",
    date: "November 2026",
    description:
      "Built an AI agent with LangChain deepagents that ranks commercial rooftops by solar economics from a plain-English request — it plans the work, calls 7 tools (building search, roof analysis, solar estimate, financials, ranking, aerial imagery), and drafts a proposal letter to the owner of the best building.\n" +
      "Screened all 185 Houston office buildings in the CoStar extract (171 large enough to rank) in about a minute, combining CoStar building records, NREL PVWatts v8 energy estimates, EIA electricity prices, LBNL installed costs, the 30% federal ITC, and EPA eGRID emissions to compute annual kWh, savings, payback, and CO₂ avoided per building.\n" +
      "Shipped a Streamlit app with a live tool trace, ranked table, 2D map, Vexcel aerial roof images, a what-if panel that re-ranks without re-calling the agent, and switchable Cloud (Gemini) / Local (Ollama) AI engines — every number in the answer comes from a tool, not the language model. Entered in the Sustainability, CoStar, Amazon, and LangChain tracks.",
    techStack: ["Python", "LangChain deepagents", "Gemini", "Ollama", "Streamlit", "pandas", "pydeck", "NREL PVWatts API", "pytest"],
    githubUrl: "https://github.com/DungLe-304/roofwatt",
    demoUrl: "https://roofwatt.streamlit.app",
    imageUrl: "/images/projects/roofwatt-overview.png",
  },
  {
    id: 1,
    title: "SAT & Graduation Rate Analysis",
    date: "December 2025",
    description:
      "Engineered an end-to-end Python analytics pipeline (pandas, SciPy, Statsmodels) on 47 U.S. colleges — converting raw Excel into a cleaned dataset, a SQL seed script, and 7 analytical SQL queries (sector statistics, SAT band breakdowns, outperformer detection, residual analysis, and imputation sensitivity checks).\n" +
      "Conducted comparative statistical analysis using Pearson correlation, OLS regression, and ANCOVA-style interaction modeling across 20 public and 27 private institutions; identified a significantly stronger SAT–graduation association in public schools (r=0.701, p<0.001) vs. private (r=0.572, p<0.01) with distinct slope coefficients (0.104 vs. 0.062); interaction term p=0.175 (non-significant).\n" +
      "Built a fully reproducible analytical workflow with regression diagnostics (Residuals vs. Fitted, Q-Q plot, Cook's Distance), an interactive Plotly scatter chart with hover tooltips, a sensitivity analysis excluding imputed SAT records, and a predict_grad_rate() function with extrapolation warnings — all documented in a structured methodology writeup.",
    techStack: ["Python", "SQL", "NumPy", "pandas", "Statsmodels", "SciPy", "Plotly", "Jupyter", "Git"],
    githubUrl: "https://github.com/DungLe-304/graduation-rates-sat-analysis",
    demoUrl: "",
    imageUrl: "/images/projects/sat-scatter-with-fits.png",
  },
  {
    id: 2,
    title: "Walmart Sales Analytics Dashboard",
    date: "March 2025",
    description:
      "Engineered a MySQL analytics pipeline on 1,000 Walmart transactions across 3 branches — data cleaning, feature engineering (time_of_day, day_name, month_name), and 20+ EDA queries.\n" +
      "Surfaced key insights: Naypyitaw (Branch C) led revenue ($110,568), Food & Beverages was top product line ($56,145, avg. rating 7.11/10), afternoon hours drove peak sales (454 transactions, ~$148K revenue) with a consistent 4.76% gross margin.\n" +
      "Deployed a self-contained interactive HTML dashboard with 5 KPI cards, 7 Chart.js visualizations, and dynamic filter controls (Branch, Product Line, Customer Type, Gender, Payment) — hosted on GitHub Pages.",
    techStack: ["MySQL", "SQL", "JavaScript", "Chart.js", "HTML", "CSS"],
    githubUrl: "https://github.com/DungLe-304/walmart-sales-analytics",
    demoUrl: "https://dungle-304.github.io/walmart-sales-analytics/walmart_dashboard.html",
    demoLabel: "Click here to view the live dashboard",
    imageUrl: "/images/projects/walmart-analytics.png",
  },
];
