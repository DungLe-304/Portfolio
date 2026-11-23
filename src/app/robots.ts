import type { MetadataRoute } from "next";
import { resume } from "@/content/resume";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${resume.siteUrl}/sitemap.xml`,
  };
}
