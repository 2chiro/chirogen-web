import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Workers の静的アセットとして配信するため、out/ に書き出す。
  // 全ルートがビルド時に生成できるので、サーバランタイム（OpenNext）は不要。
  output: "export",
};

export default nextConfig;
