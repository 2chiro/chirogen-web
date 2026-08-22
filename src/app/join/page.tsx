import type { Metadata } from "next";
import { PreparingNote } from "@/components/preparing-notice";
import { ServerAddress } from "@/components/server-address";
import { ButtonLink, PageHeader, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "参加方法",
  description: `${site.name} への参加手順。対応バージョン ${site.minecraftVersion}、サーバアドレス ${site.serverAddress}。`,
};

const faq = [
  {
    q: "統合版（Bedrock）から参加できますか？",
    a: "現在は Java Edition のみ対応しています。統合版からのクロスプレイには対応していません。",
  },
  {
    q: "いつから参加できますか？",
    a: "現在はオープン準備中です。サーバはまだ稼動していないため接続できません。公開日はお知らせでご案内します。",
  },
  {
    q: "バージョンが違うと接続できませんか？",
    a: `サーバは ${site.minecraftVersion} で動作しています。ランチャーのプロファイルを ${site.minecraftVersion} に合わせて起動してください。`,
  },
  {
    q: "MOD やリソースパックは必要ですか？",
    a: "MOD は不要です。独自の武器モデルなどはサーバ配布のリソースパックで表示されます（接続時に案内します）。",
  },
  {
    q: "PvP はどこでも起きますか？",
    a: "ロビーやチュートリアルなどの保護エリアでは PvP は無効です。フィールドでの PK は許可ですが、繰り返すと懸賞金がかかります。",
  },
  {
    q: "海賊版クライアントで参加できますか？",
    a: "できません。正規アカウントの認証（online-mode）を有効にしています。",
  },
];

export default function JoinPage() {
  return (
    <>
      <PageHeader
        eyebrow="How to join"
        title="参加方法"
        lead={`Minecraft ${site.edition} ${site.minecraftVersion} 向けのサーバです。参加費・ホワイトリストはありません。`}
      />

      <Section>
        <PreparingNote>
          <p>
            サーバはオープン準備中です。下記の手順でアドレスを登録しても、公開までは接続できません。
            公開日と公式 Discord の案内はお知らせに掲載します。
          </p>
        </PreparingNote>
      </Section>

      <Section title="1. サーバアドレスを追加する">
        <ol className="max-w-3xl space-y-3 text-sm leading-relaxed text-muted">
          <li>1. Minecraft ランチャーでバージョン {site.minecraftVersion} を起動します。</li>
          <li>2. タイトル画面から「マルチプレイ」→「サーバを追加」を選びます。</li>
          <li>3. サーバ名は任意、サーバアドレスに下記を入力して保存します。</li>
        </ol>
        <div className="mt-6">
          <ServerAddress size="lg" />
        </div>
      </Section>

      <Section
        title="2. チュートリアルでジョブに就職する"
        description="初回ログイン時はチュートリアルエリアにスポーンします。案内に沿って就職すると、そのジョブ専用のスキルと稼ぎ方が解放されます。2 回目以降のログインはロビーに出ます。"
      >
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/features" variant="secondary">
            ジョブと遊び方を見る
          </ButtonLink>
          <ButtonLink href="/rules" variant="secondary">
            ルールを確認する
          </ButtonLink>
        </div>
      </Section>

      <Section
        title="3. Discord に参加する"
        description="アップデート告知・メンテナンス連絡・サポート・通報は Discord で受け付ける予定です。"
      >
        {site.discordUrl ? (
          <ButtonLink href={site.discordUrl} external>
            Discord に参加
          </ButtonLink>
        ) : (
          <p className="text-sm text-muted">
            公式 Discord は準備中です。招待リンクは公開し次第、このページとお知らせに掲載します。
          </p>
        )}
      </Section>

      <Section title="よくある質問">
        <dl className="max-w-3xl divide-y divide-line rounded-xl border border-line bg-surface">
          {faq.map((item) => (
            <div key={item.q} className="p-5">
              <dt className="font-semibold">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </>
  );
}
