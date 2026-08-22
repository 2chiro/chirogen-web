import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { PageHeader, Prose, Section } from "@/components/ui";
import { categoryLabels, formatDate, getNewsList, getNewsPost } from "@/lib/news";

export async function generateStaticParams() {
  const posts = await getNewsList();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/news/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
    },
  };
}

export default async function NewsPostPage({ params }: PageProps<"/news/[slug]">) {
  const { slug } = await params;
  const post = await getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHeader
        eyebrow={`${formatDate(post.date)} / ${categoryLabels[post.category]}`}
        title={post.title}
        lead={post.summary || undefined}
      />

      <Section>
        <Prose>
          <MDXRemote
            source={post.body}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </Prose>
        <div className="mt-12">
          <Link href="/news" className="text-sm text-magic underline underline-offset-4">
            お知らせ一覧に戻る
          </Link>
        </div>
      </Section>
    </>
  );
}
