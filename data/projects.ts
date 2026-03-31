export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  demoLabel?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SAT & Graduation Rate Analysis",
    description:
      "Engineered a Python data pipeline to convert raw Excel into a cleaned analysis dataset and SQL seed script (CREATE TABLE + INSERT) for 47 institutions. Conducted comparative statistical analysis — correlation, OLS regression, and hypothesis testing — across 20 public and 27 private institutions; found stronger association in public (r=0.701, p<0.001) vs private (r=0.572, p<0.01) schools with distinct slope coefficients (0.104 vs 0.062). Built a reproducible workflow (Jupyter + Git) and tested an ANCOVA-style interaction model (interaction p=0.175); predicted Truman at SAT≈1190 (72.3% vs 76%, 3.7 pp error).",
    techStack: ["Python", "SQL", "Pandas", "Statsmodels", "SciPy", "Jupyter", "Git"],
    githubUrl: "https://github.com/DungLe-304/graduation-rates-sat-analysis",
    demoUrl: "",
    imageUrl: "/images/scatter_with_fits.png",
    featured: true,
  },
  {
    id: 2,
    title: "Walmart Sales Analytics Dashboard",
    description:
      "Engineered a MySQL analytics pipeline on 1,000 Walmart transactions across 3 branches — data cleaning, feature engineering (time_of_day, day_name, month_name), and 20+ EDA queries. Surfaced key insights: Naypyitaw (Branch C) led revenue ($110,568), Food & Beverages was top product line ($56,145, avg. rating 7.11/10), afternoon hours drove peak sales (454 transactions, ~$148K revenue) with a consistent 4.76% gross margin. Deployed a self-contained interactive HTML dashboard with 5 KPI cards, 7 Chart.js visualizations, and dynamic filter controls (Branch, Product Line, Customer Type, Gender, Payment) — hosted on GitHub Pages.",
    techStack: ["MySQL", "SQL", "JavaScript", "Chart.js", "HTML", "CSS"],
    githubUrl: "https://github.com/DungLe-304/walmart-sales-analytics",
    demoUrl: "https://dungle-304.github.io/walmart-sales-analytics/walmart_dashboard.html",
    demoLabel: "Click here to view the live dashboard",
    imageUrl: "/images/walmart-analytics.png",
    featured: true,
  },
];
