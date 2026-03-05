import type { MetadataRoute } from "next";

const baseUrl = "https://primetrading.ae";


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
