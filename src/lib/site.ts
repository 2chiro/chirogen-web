export const site = {
  name: "Chirogen",
  nameJa: "カイロゲン",
  catchphrase: "魔法と銃が融合した PvP サバイバル",
  description:
    "Chirogen（カイロゲン）は、ジョブ・スキル育成と独自経済、PvP・PK懸賞、カジノを備えた日本語の Minecraft Java Edition サバイバルサーバです。",
  url: "https://www.chirogen.net",
  serverAddress: "mc.chirogen.net",
  minecraftVersion: "26.1.2",
  edition: "Java Edition",
  /** TODO: 公式 Discord の招待リンクが確定したら差し替える */
  discordUrl: "https://discord.gg/",
  serverListUrl: "https://minecraft.jp/",
  locale: "ja_JP",
} as const;

export const nav = [
  { href: "/join", label: "参加方法" },
  { href: "/features", label: "サーバの特徴" },
  { href: "/rules", label: "ルール" },
  { href: "/news", label: "お知らせ" },
] as const;
