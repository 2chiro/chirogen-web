import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} | ${site.catchphrase}`;

/**
 * ImageResponse（satori）は日本語グリフを含むフォントを明示的に渡さないと豆腐になるため、
 * OG 画像はラテン文字のみで構成している。日本語を入れる場合は Noto Sans JP を fonts で渡す。
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#070a12",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(34,211,238,0.28), transparent 45%), radial-gradient(circle at 85% 30%, rgba(249,115,22,0.24), transparent 45%), radial-gradient(circle at 50% 95%, rgba(168,85,247,0.22), transparent 50%)",
          color: "#e2e8f5",
        }}
      >
        <div style={{ display: "flex", fontSize: 34, letterSpacing: 14, color: "#22d3ee" }}>
          CHIROGEN
        </div>
        <div style={{ display: "flex", fontSize: 80, fontWeight: 700, marginTop: 28 }}>
          <span style={{ color: "#22d3ee" }}>MAGIC</span>
          <span style={{ color: "#94a3b8" }}>&nbsp;meets&nbsp;</span>
          <span style={{ color: "#f97316" }}>GUNS</span>
        </div>
        <div
          style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 10, color: "#e2e8f5" }}
        >
          PvP SURVIVAL SERVER
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#94a3b8", marginTop: 44 }}>
          {site.serverAddress} / Minecraft {site.edition} {site.minecraftVersion}
        </div>
      </div>
    ),
    size,
  );
}
