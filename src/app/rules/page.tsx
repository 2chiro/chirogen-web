import type { Metadata } from "next";
import { PageHeader, Prose, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "サーバルール",
  description: `${site.name} のサーバルールと処罰ポリシー。禁止行為、PK の扱い、通報方法をまとめています。`,
};

const prohibited = [
  {
    title: "荒らし・窃盗",
    body: "他人の建築物の破壊・改変、チェストからの窃盗、迷惑目的の建築や地形破壊を禁止します。保護エリア外でも荒らしは処罰対象です。",
  },
  {
    title: "暴言・ハラスメント",
    body: "誹謗中傷、差別的発言、性的・暴力的な表現、執拗な付きまといを禁止します。チャット・Discord・看板・アイテム名すべてが対象です。",
  },
  {
    title: "不正行為（チート）",
    body: "チートクライアント、X-Ray、マクロによる自動化、バグの悪用（アイテム増殖など）を禁止します。アンチチートを導入しており、検知されたログは調査に使用します。",
  },
  {
    title: "宣伝・勧誘",
    body: "他サーバや外部サービスの無断宣伝、DM による勧誘を禁止します。",
  },
  {
    title: "なりすまし・アカウント共有",
    body: "運営・他プレイヤーを騙る行為、アカウントの貸し借りや売買を禁止します。",
  },
  {
    title: "現金取引（RMT）",
    body: "サーバ内通貨・アイテムを現実の金銭や他ゲームの資産と交換する行為を禁止します。カジノや PvP の賭けはサーバ内通貨のみで完結します。",
  },
];

export default function RulesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rules"
        title="サーバルール"
        lead="全員が安心して遊べるようにするための最低限のルールです。参加した時点で同意したものとして扱います。"
      />

      <Section title="禁止行為">
        <dl className="grid gap-5 md:grid-cols-2">
          {prohibited.map((rule) => (
            <div key={rule.title} className="rounded-xl border border-line bg-surface p-6">
              <dt className="font-semibold text-text">{rule.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{rule.body}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="PK（プレイヤーキル）の扱い">
        <Prose>
          <p>
            このサーバでは <strong>PK を禁止していません</strong>。ただし無制限ではなく、
            次のルールの中で成立します。
          </p>
          <ul>
            <li>ロビー・チュートリアル・カジノなどの保護エリアでは PvP が無効です。</li>
            <li>PK を繰り返したプレイヤーには懸賞金がかかり、他プレイヤーの標的になります。</li>
            <li>
              PK 自体は処罰対象ではありませんが、特定個人を狙い続ける嫌がらせ行為は
              ハラスメントとして処罰します。
            </li>
          </ul>
        </Prose>
      </Section>

      <Section title="処罰ポリシー">
        <Prose>
          <p>
            違反の内容と悪質性に応じて、原則として次の段階で対応します。重大な違反（チート・
            大規模な荒らし・RMT）は初回から永久 BAN とする場合があります。
          </p>
          <table>
            <thead>
              <tr>
                <th>段階</th>
                <th>対応</th>
                <th>想定</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>警告</td>
                <td>軽微な違反・初回</td>
              </tr>
              <tr>
                <td>2</td>
                <td>キック / ミュート</td>
                <td>警告後も改善しない場合</td>
              </tr>
              <tr>
                <td>3</td>
                <td>一時 BAN</td>
                <td>繰り返しの違反</td>
              </tr>
              <tr>
                <td>4</td>
                <td>永久 BAN</td>
                <td>悪質・重大な違反</td>
              </tr>
            </tbody>
          </table>
          <p>
            処罰への異議申し立ては Discord のサポートチャンネルで受け付けます。荒らし被害の
            ロールバックは、バックアップの範囲で対応できる場合があります。
          </p>
        </Prose>
      </Section>

      <Section title="通報のしかた">
        <Prose>
          <p>
            違反を見かけたら、Discord の通報チャンネルへ「日時・場所（ワールドと座標）・
            相手のプレイヤー名・状況（スクリーンショットがあれば添付）」を送ってください。
            自分で報復するのではなく、運営に任せてください。
          </p>
          <p>
            <a href={site.discordUrl} target="_blank" rel="noreferrer noopener">
              Discord に参加する
            </a>
          </p>
        </Prose>
      </Section>
    </>
  );
}
