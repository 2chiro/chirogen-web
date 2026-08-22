import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

export type NewsCategory = "update" | "maintenance" | "event" | "notice";

export type NewsMeta = {
  slug: string;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  draft: boolean;
};

export type NewsPost = NewsMeta & {
  body: string;
};

const NEWS_DIR = path.join(process.cwd(), "content", "news");

export const categoryLabels: Record<NewsCategory, string> = {
  update: "アップデート",
  maintenance: "メンテナンス",
  event: "イベント",
  notice: "お知らせ",
};

function isNewsCategory(value: unknown): value is NewsCategory {
  return typeof value === "string" && value in categoryLabels;
}

function parse(slug: string, raw: string): NewsPost {
  const { data, content } = matter(raw);
  const title = typeof data.title === "string" ? data.title : slug;
  const date = typeof data.date === "string" ? data.date : "";
  const summary = typeof data.summary === "string" ? data.summary : "";

  if (!date) {
    throw new Error(`content/news/${slug}.mdx: frontmatter "date" が必要です`);
  }

  return {
    slug,
    title,
    date,
    category: isNewsCategory(data.category) ? data.category : "notice",
    summary,
    draft: data.draft === true,
    body: content,
  };
}

async function readAll(): Promise<NewsPost[]> {
  const entries = await fs.readdir(NEWS_DIR);
  const posts = await Promise.all(
    entries
      .filter((entry) => entry.endsWith(".mdx"))
      .map(async (entry) => {
        const slug = entry.replace(/\.mdx$/, "");
        const raw = await fs.readFile(path.join(NEWS_DIR, entry), "utf8");
        return parse(slug, raw);
      }),
  );

  return posts
    .filter((post) => !post.draft || process.env.NODE_ENV === "development")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export async function getNewsList(limit?: number): Promise<NewsMeta[]> {
  const posts = await readAll();
  return (limit ? posts.slice(0, limit) : posts).map(
    ({ slug, title, date, category, summary, draft }) => ({
      slug,
      title,
      date,
      category,
      summary,
      draft,
    }),
  );
}

export async function getNewsPost(slug: string): Promise<NewsPost | null> {
  const posts = await readAll();
  return posts.find((post) => post.slug === slug) ?? null;
}

export function formatDate(date: string): string {
  const [year, month, day] = date.split("-");
  return `${year}年${Number(month)}月${Number(day)}日`;
}
