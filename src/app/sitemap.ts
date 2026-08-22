import type { MetadataRoute } from "next";
import { getNewsList } from "@/lib/news";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/join", "/features", "/rules", "/news", "/legal/terms", "/legal/privacy"];
  const posts = await getNewsList();

  return [
    ...staticPaths.map((path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })),
    ...posts.map((post) => ({
      url: `${site.url}/news/${post.slug}`,
      lastModified: new Date(post.date),
    })),
  ];
}
