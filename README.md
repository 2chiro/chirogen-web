# chirogen-web

[Chirogen](https://github.com/2chiro/chirogen) Minecraft サーバの公式サイト。

- 公開先（予定）: https://www.chirogen.net
- ゲームサーバ: `mc.chirogen.net`（Minecraft Java Edition 26.1.2）

## 技術スタック

- Next.js 16（App Router / Turbopack）+ TypeScript。`output: "export"` で全ページを静的出力（`out/`）
- Cloudflare Workers の静的アセット配信（`wrangler.jsonc`）
- Tailwind CSS v4（`src/app/globals.css` の `@theme` に配色を定義）
- MDX（`next-mdx-remote` + `gray-matter`）でお知らせを管理

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build     # out/ に静的出力
npm run preview   # wrangler dev で out/ を配信（本番と同じ静的配信を確認する）
```

`output: "export"` のため `next start` は使えない。ビルド結果の確認は `npm run preview`。

## ディレクトリ

```
content/news/*.mdx    お知らせ記事（frontmatter: title, date, category, summary, draft）
src/app/              ルーティング（/, /join, /features, /rules, /news, /legal/*）
src/components/       共通 UI（ヘッダー・フッター・サーバアドレスコピーなど）
src/lib/site.ts       サーバアドレス・バージョン・Discord URL などのサイト定数
src/lib/news.ts       お知らせの読み込み（draft は本番ビルドで除外）
```

## 公開状況の切り替え

`src/lib/site.ts` の 2 つの値でサイト全体の「準備中」表示を制御している。

- `isPreparing: true` — 全ページ上部の準備中バナーと、サーバアドレス脇の「まだ接続できません」注記を表示。サーバ公開時に `false` にする。
- `discordUrl: null` — Discord リンクを表示せず「Discord（準備中）」と表記。招待リンクが確定したら文字列を設定する。

## お知らせを追加する

1. `content/news/YYYY-MM-DD-slug.mdx` を作成する。
2. frontmatter を記入する（`category` は `update` / `maintenance` / `event` / `notice`）。

```mdx
---
title: タイトル
date: "2026-08-22"
category: update
summary: 一覧とOGに表示される要約。
draft: false
---

本文（Markdown / GFM）
```

3. PR を作成する。`draft: true` の記事は開発サーバでのみ表示される。

## デプロイ

Cloudflare Workers に静的アセットのみをデプロイする（`wrangler.jsonc` の `assets.directory: ./out`）。
`main` を持たない設定なので Worker のコードは動かず、配信されるのは `out/` の静的ファイルだけ。

- Cloudflare 側の Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- 手元からデプロイする場合は `npm run deploy`

サーバランタイム（`@opennextjs/cloudflare`）は使わない。全ルートがビルド時に生成できるため不要で、
Cloudflare のフレームワーク自動検出に任せると OpenNext への移行がビルドごとに実行され、
ランタイム依存（MDX 系パッケージ）のバンドルに失敗して全ページが Internal Server Error になる。
`wrangler.jsonc` をコミットしておくことでこの自動移行を止めている。

新しいルートを追加するときは、ビルド時に静的化できること（`generateStaticParams` / `dynamicParams = false`）を確認する。
`robots.ts` / `sitemap.ts` / `opengraph-image.tsx` のような Route Handler 相当のファイルは
`export const dynamic = "force-static"` が必要。
