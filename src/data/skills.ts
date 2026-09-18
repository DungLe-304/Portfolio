export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["Python", "R", "SQL", "Java", "JavaScript", "HTML", "CSS", "TypeScript"],
  },
  {
    category: "Data & ML",
    skills: ["pandas", "NumPy", "scikit-learn", "PyTorch", "SciPy", "Statsmodels"],
  },
  {
    category: "Statistics & Modeling",
    skills: ["EDA", "OLS/ANCOVA", "Interaction Models", "Classification", "Model Diagnostics", "Cross-validation", "Hypothesis Testing"],
  },
  {
    category: "Tools & Backend",
    skills: ["Jupyter", "Git", "GitHub", "FastAPI", "Flask", "MongoDB", "REST APIs"],
  },
  {
    category: "Visualization & BI",
    skills: ["Tableau", "Power BI", "Excel"],
  },
  {
    category: "Databases",
    skills: ["MySQL", "MongoDB", "SQL DDL/DML", "Data Pipelines"],
  },
];
