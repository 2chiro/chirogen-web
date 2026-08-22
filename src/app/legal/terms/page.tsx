import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Prose, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "利用規約",
  description: `${site.name} サーバおよび本サイトの利用規約。`,
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Terms" title="利用規約" lead="最終更新日: 2026年8月22日" />

      <Section>
        <Prose>
          <h2>1. 適用</h2>
          <p>
            本規約は、{site.name}（以下「本サーバ」）および本サイトの利用条件を定めるものです。
            本サーバに接続した時点で、本規約に同意したものとみなします。
          </p>

          <h2>2. 運営</h2>
          <p>
            本サーバは個人が運営する非公式の Minecraft マルチプレイサーバです。Minecraft は
            Mojang Studios / Microsoft Corporation の商標であり、本サーバおよび本サイトは
            Mojang Studios とは関係ありません。
          </p>

          <h2>3. 参加条件</h2>
          <ul>
            <li>Minecraft {site.edition} の正規アカウントが必要です（認証を有効にしています）。</li>
            <li>
              未成年の方は、保護者の同意を得た上でご利用ください。プレイ時間や課金の有無に
              かかわらず、生活に支障のない範囲でご利用ください。
            </li>
          </ul>

          <h2>4. 禁止行為</h2>
          <p>
            禁止行為と処罰の段階は<Link href="/rules">サーバルール</Link>に定めます。運営は違反者に
            対し、警告・キック・ミュート・BAN などの措置を、事前の通知なく行うことができます。
          </p>

          <h2>5. ゲーム内通貨・アイテム</h2>
          <ul>
            <li>
              ゲーム内通貨・アイテム・ジョブレベルなどのデータは、本サーバ内でのみ意味を持つ
              データであり、財産的価値を持ちません。
            </li>
            <li>
              カジノや PvP の賭けはゲーム内通貨のみで完結します。
              <strong>現実の金銭・他ゲームの資産との交換（RMT）は禁止</strong>です。
            </li>
            <li>
              不具合・不正行為に起因するデータは、運営の判断で没収・修正することがあります。
            </li>
          </ul>

          <h2>6. データの取り扱い</h2>
          <p>
            プレイに伴って記録されるデータの取り扱いは
            <Link href="/legal/privacy">プライバシーポリシー</Link>に定めます。
          </p>

          <h2>7. サービスの変更・停止</h2>
          <p>
            運営は、ワールド構成・ゲームバランス・機能の変更、メンテナンスによる一時停止、
            および本サーバの終了を、事前の通知なく行うことがあります。データの消失・
            ロールバックについて、運営は復元を保証しません。
          </p>

          <h2>8. 免責</h2>
          <p>
            本サーバの利用によって生じた損害について、運営は故意または重大な過失がある場合を
            除き責任を負いません。プレイヤー間のトラブルは当事者間で解決するものとし、運営は
            ルール違反への対応の範囲で関与します。
          </p>

          <h2>9. 規約の変更</h2>
          <p>
            本規約は必要に応じて変更します。重要な変更は<Link href="/news">お知らせ</Link>および
            Discord で告知します。
          </p>

          <h2>10. お問い合わせ</h2>
          {site.discordUrl ? (
            <p>
              本規約に関するお問い合わせは、
              <a href={site.discordUrl} target="_blank" rel="noreferrer noopener">
                Discord
              </a>
              のサポートチャンネルまでお願いします。
            </p>
          ) : (
            <p>
              本規約に関するお問い合わせは、公式 Discord のサポートチャンネルまでお願いします。
              Discord は現在準備中で、招待リンクは公開し次第ご案内します。
            </p>
          )}
        </Prose>
      </Section>
    </>
  );
}
