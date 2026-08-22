type Site = {
  name: string;
  catchphrase: string;
  description: string;
  url: string;
  serverAddress: string;
  minecraftVersion: string;
  edition: string;
  /** ゲームサーバが一般公開されるまで true。公開時に false にする */
  isPreparing: boolean;
  /** 公式 Discord の招待リンク。未公開の間は null（リンクを表示しない） */
  discordUrl: string | null;
  serverListUrl: string;
  locale: string;
};

export const site: Site = {
  name: "Chirogen",
  catchphrase: "魔法と銃が融合した PvP サバイバル",
  description:
    "Chirogen は、ジョブ・スキル育成と独自経済、PvP・PK懸賞、カジノを備えた日本語の Minecraft Java Edition サバイバルサーバです。",
  url: "https://www.chirogen.net",
  serverAddress: "mc.chirogen.net",
  minecraftVersion: "26.1.2",
  edition: "Java Edition",
  isPreparing: true,
  discordUrl: null,
  serverListUrl: "https://minecraft.jp/",
  locale: "ja_JP",
};

export const nav = [
  { href: "/join", label: "参加方法" },
  { href: "/features", label: "サーバの特徴" },
  { href: "/rules", label: "ルール" },
  { href: "/news", label: "お知らせ" },
] as const;
