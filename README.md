# chirogen-web

[Chirogen](https://github.com/2chiro/chirogen) Minecraft サーバの公式サイト。

- 公開先（予定）: https://www.chirogen.net
- ゲームサーバ: `mc.chirogen.net`（Minecraft Java Edition 26.1.2）

## 技術スタック

- Next.js 16（App Router / Turbopack）+ TypeScript
- Tailwind CSS v4（`src/app/globals.css` の `@theme` に配色を定義）
- MDX（`next-mdx-remote` + `gray-matter`）でお知らせを管理

## 開発

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

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

未設定。Cloudflare Pages を想定（MVP は全ページ静的生成のため、静的出力でも配信可能）。
