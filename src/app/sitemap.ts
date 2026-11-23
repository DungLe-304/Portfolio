import type { MetadataRoute } from "next";
import { resume } from "@/content/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: resume.siteUrl, changeFrequency: "monthly", priority: 1 }];
}
