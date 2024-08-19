import { MetadataRoute } from "next";

const robot = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["blogs/api", "blogs/[id]/api"],
    },
    sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`,
  };
};

export default robot;
