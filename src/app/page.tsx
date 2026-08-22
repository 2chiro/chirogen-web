import Link from "next/link";
import { ServerAddress } from "@/components/server-address";
import { ButtonLink, Card, Section } from "@/components/ui";
import { categoryLabels, formatDate, getNewsList } from "@/lib/news";
import { site } from "@/lib/site";

export default async function HomePage() {
  const news = await getNewsList(3);

  return (
    <>
      <section className="relative overflow-hidden border-b border-line">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.18),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.16),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(168,85,247,0.14),transparent_50%)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="text-xs font-medium tracking-[0.3em] text-magic uppercase">
            Minecraft {site.edition} / {site.minecraftVersion}
          </p>
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-6xl">
            <span className="text-magic">魔法</span>
            <span className="text-muted"> と </span>
            <span className="text-gun">銃</span>
            <span className="text-muted"> が融合した</span>
            <br />
            PvP サバイバル
          </h1>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            ジョブに就いてスキルを磨き、稼いだ資金でアイテムを売買。極めた実力は
            1vs1・2vs2 の賞金付き PvP と、カジノで試せます。
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/join">参加方法を見る</ButtonLink>
            <ButtonLink href={site.discordUrl} variant="secondary" external>
              Discord に参加
            </ButtonLink>
          </div>

          <div className="mt-8">
            <p className="mb-2 text-xs text-muted">サーバアドレス</p>
            <ServerAddress size="lg" />
          </div>
        </div>
      </section>

      <Section
        title="Chirogen の 3 つの軸"
        description="近代科学とファンタジーが同居する世界。生産で稼ぎ、経済で回し、戦闘で奪い合う。"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="ジョブとスキル">
            剣士・魔法使い・弓使い・銃士・鉱夫・鍛冶屋などのジョブに就職。1
            人 1 ジョブ制で、スキルは Sneak+クリックやスワップ操作に割り当てて使います。
          </Card>
          <Card title="経済とマーケット" accent="gun">
            ジョブに合った仕事で通貨を稼ぎ、ショップで売買。取引量と通貨総量から価格が動く為替型ショップと、プレイヤー間のマーケットがあります。
          </Card>
          <Card title="PvP・PK懸賞・カジノ" accent="arcane">
            1vs1 / 2vs2 の賭け金マッチ。フィールドでの PK
            は許可ですが、繰り返すと懸賞金がかかります。稼いだ通貨はカジノでも使えます。
          </Card>
        </div>

        <div className="mt-8">
          <Link href="/features" className="text-sm text-magic underline underline-offset-4">
            サーバの特徴をもっと詳しく
          </Link>
        </div>
      </Section>

      <Section title="はじめかた">
        <ol className="grid gap-5 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Java版を用意",
              body: `Minecraft ${site.edition} ${site.minecraftVersion} で接続します。正規アカウントが必要です。`,
            },
            {
              step: "02",
              title: "アドレスを追加",
              body: `マルチプレイのサーバ追加で ${site.serverAddress} を入力して接続します。`,
            },
            {
              step: "03",
              title: "チュートリアルで就職",
              body: "初回ログインはチュートリアルエリアに出ます。案内に沿ってジョブに就職してスタート。",
            },
          ].map((item) => (
            <li key={item.step} className="rounded-xl border border-line bg-surface p-6">
              <p className="font-mono text-sm text-magic">{item.step}</p>
              <h3 className="mt-2 font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section title="お知らせ">
        {news.length === 0 ? (
          <p className="text-sm text-muted">お知らせはまだありません。</p>
        ) : (
          <ul className="divide-y divide-line rounded-xl border border-line bg-surface">
            {news.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/news/${post.slug}`}
                  className="flex flex-col gap-1 p-5 transition-colors hover:bg-surface-2 sm:flex-row sm:items-center sm:gap-4"
                >
                  <time dateTime={post.date} className="font-mono text-xs text-muted">
                    {formatDate(post.date)}
                  </time>
                  <span className="w-fit rounded border border-line px-2 py-0.5 text-xs text-magic">
                    {categoryLabels[post.category]}
                  </span>
                  <span className="text-sm">{post.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6">
          <Link href="/news" className="text-sm text-magic underline underline-offset-4">
            お知らせ一覧
          </Link>
        </div>
      </Section>
    </>
  );
}
