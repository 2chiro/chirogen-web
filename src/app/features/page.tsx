import type { Metadata } from "next";
import { Card, PageHeader, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "サーバの特徴",
  description:
    "ジョブとスキル、為替型ショップとマーケット、賞金付き PvP と PK懸賞、カジノ、土地保護。Chirogen の遊び方をまとめています。",
};

const jobs = [
  { name: "剣士", type: "戦闘", detail: "近接ダメージとノックバック耐性を伸ばす王道型" },
  { name: "弓使い", type: "戦闘", detail: "矢のダメージ・引き絞り速度を強化" },
  { name: "魔法使い", type: "戦闘 / 生産", detail: "杖と魔法弾。最大MPとMP回復に優れる" },
  { name: "銃士", type: "戦闘", detail: "銃・弾薬を扱い、反動とリロードを改善" },
  { name: "鉱夫", type: "生産", detail: "採掘速度と追加ドロップで稼ぐ" },
  { name: "釣り人", type: "生産", detail: "釣り待機時間の短縮とレア度上昇" },
  { name: "木こり", type: "生産", detail: "伐採速度と追加原木ドロップ" },
  { name: "鍛冶屋", type: "生産", detail: "銃・弾薬の製作と武器修理" },
  { name: "薬師", type: "生産", detail: "MPポーション・強化薬の醸造" },
  { name: "妖術使い", type: "生産 / 支援", detail: "エンチャント費用の軽減と追加付与" },
  { name: "召喚士", type: "戦闘 / 支援", detail: "使い魔を召喚して戦う" },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="サーバの特徴"
        lead="魔法（ファンタジー）と銃（科学）が同居する世界で、ジョブ育成・経済・PvP・カジノが噛み合うように作っています。"
      />

      <Section
        title="ジョブとスキル"
        description="全 11 ジョブ。1 人 1 ジョブ制で、転職は無料・無制限ですが、レベル・EXP・習得スキルはリセットされます（リセットそのものがコスト）。最大レベルは 50 です。"
      >
        <div className="overflow-x-auto rounded-xl border border-line bg-surface">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line bg-surface-2 text-left">
                <th scope="col" className="px-4 py-3 font-semibold">
                  ジョブ
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  系統
                </th>
                <th scope="col" className="px-4 py-3 font-semibold">
                  特色
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-muted">
              {jobs.map((job) => (
                <tr key={job.name}>
                  <th scope="row" className="px-4 py-3 text-left font-medium text-text">
                    {job.name}
                  </th>
                  <td className="px-4 py-3 whitespace-nowrap">{job.type}</td>
                  <td className="px-4 py-3">{job.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          <Card title="EXP はジョブ固有の行動で">
            戦闘だけでなく、採掘・伐採・釣り・醸造・鍛造などジョブに応じた行動で EXP
            が入ります。同じ作業の連投は EXP が逓減するため、macro
            的な作業ゲーにはなりません。
          </Card>
          <Card title="スキルは操作に割り当てる" accent="arcane">
            レベルアップで得た SP
            をスキルに振り、Sneak+クリックやスワップ操作へ割り当てて発動します。常時発動のパッシブ、切替式のトグルもあります。
          </Card>
          <Card title="MP と専用武器" accent="gun">
            スキルは MP を消費します。杖や銃はジョブ限定クラフトで、弾薬・マガジン・リロード・反動といった要素が入ります。
          </Card>
          <Card title="クエスト">
            全ジョブ共通・ジョブ専用・デイリーの 3 種類があります。進捗は EXP
            と同じ判定を通るため、EXP が入らない行為ではクエストも進みません。
          </Card>
        </div>
      </Section>

      <Section
        title="経済とマーケット"
        description="通貨はサーバ内通貨のみ。現金への換金は行いません。"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="稼ぐ">
            ジョブに合った仕事で収入を得ます。生産職は素材、戦闘職は討伐と PvP
            が主な収入源です。
          </Card>
          <Card title="為替型ショップ" accent="gun">
            アイテムの取引量とサーバ内の通貨総量から価格が動きます。買われ続けたものは値上がり、供給過多なら値下がりします。
          </Card>
          <Card title="プレイヤー間取引" accent="arcane">
            手持ちのアイテムを指定した相手に売るトレードと、出品して売買するマーケットがあります。
          </Card>
        </div>
      </Section>

      <Section
        title="PvP・PK懸賞"
        description="対戦の性質は、賭け金の額で自動的に決まる「ティア」と、挑むときに選ぶ「ルールモード」の 2 つで変わります。"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="1vs1 / 2vs2">
            賭け金を預けて対戦し、勝者が獲得します。パーティを組んで 2vs2 にも参加できます。
          </Card>
          <Card title="1デス決着・10分で引き分け">
            先に 1 度倒された側の負けです。10 分で決着しなければ引き分けとなり、賭け金は双方へ返ります。
          </Card>
          <Card title="ティア" accent="gun">
            賭け金が高いほどマッチの格が上がります。通常戦 / ゴールドマッチ /
            レジェンドマッチの 3 段で、ゴールドマッチ以上では観戦と勝敗予想が解放され、
            レジェンドマッチはサーバ全体に告知されます。
          </Card>
          <Card title="ルールモード" accent="arcane">
            固定キットで地形破壊なし、固定キットで地形破壊あり、装備の持ち込みありの 3
            モードから選びます。選んだモードで指定できる賭け金の幅が変わるため、到達できるティアも変わります。
            破壊した地形は対戦後に元へ戻します。
          </Card>
          <Card title="観戦と勝敗予想">
            ゴールドマッチ以上は観戦でき、どちらが勝つかに賭けられます。配当は投票の集まり具合で決まり、
            受付は対戦の途中で締め切られます。投票 1 回あたりの上限額を設けています。
          </Card>
          <Card title="PK は許可、ただし" accent="gun">
            フィールドでの PK は禁止していません。ただし繰り返すと懸賞金がかかり、他のプレイヤーから狙われる立場になります。
          </Card>
          <Card title="保護エリア" accent="arcane">
            ロビー・チュートリアル・カジノなどは保護され、PvP
            とブロック破壊が無効です。拠点は土地保護で守れます。
          </Card>
        </div>
      </Section>

      <Section
        title="カジノ"
        description="スロットやドローポーカーで遊べます。賭けられるのはサーバ内通貨のみで、現実の金銭との交換は一切できません。過度な射幸性を避けるため賭け金には上限を設けます。"
      >
        <p className="text-sm text-muted">
          ワールドはメイン / ネザー / エンド / 資源（定期リセット）/ PvP / カジノ /
          チュートリアルに分かれています。
        </p>
      </Section>

      <Section title="開発状況について">
        <p className="max-w-3xl text-sm leading-relaxed text-muted">
          {site.name} は現在開発中で、本ページの内容は調整・変更される場合があります。対応バージョンは
          Minecraft {site.edition} {site.minecraftVersion} です。最新の状況は
          お知らせと Discord で告知します。
        </p>
      </Section>
    </>
  );
}
