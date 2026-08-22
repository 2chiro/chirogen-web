import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Section } from "@/components/ui";
import { categoryLabels, formatDate, getNewsList } from "@/lib/news";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "お知らせ",
  description: `${site.name} のアップデート・メンテナンス・イベントのお知らせ。`,
};

export default async function NewsIndexPage() {
  const posts = await getNewsList();

  return (
    <>
      <PageHeader
        eyebrow="News"
        title="お知らせ"
        lead="アップデート・メンテナンス・イベントの告知を掲載します。緊急の連絡は Discord が最速です。"
      />

      <Section>
        {posts.length === 0 ? (
          <p className="text-sm text-muted">お知らせはまだありません。</p>
        ) : (
          <ul className="space-y-4">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/news/${post.slug}`}
                  className="block rounded-xl border border-line bg-surface p-6 transition-colors hover:bg-surface-2"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <time dateTime={post.date} className="font-mono text-xs text-muted">
                      {formatDate(post.date)}
                    </time>
                    <span className="rounded border border-line px-2 py-0.5 text-xs text-magic">
                      {categoryLabels[post.category]}
                    </span>
                    {post.draft && (
                      <span className="rounded border border-gun px-2 py-0.5 text-xs text-gun">
                        下書き
                      </span>
                    )}
                  </div>
                  <h2 className="mt-3 text-lg font-semibold">{post.title}</h2>
                  {post.summary && (
                    <p className="mt-2 text-sm leading-relaxed text-muted">{post.summary}</p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}
