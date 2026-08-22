import Link from "next/link";
import { ServerAddress } from "@/components/server-address";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="text-lg font-bold tracking-widest text-magic">{site.name}</p>
          <p className="mt-2 text-sm text-muted">{site.catchphrase}</p>
          <div className="mt-4">
            <ServerAddress />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted hover:text-text">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2">
            <li>
              <Link href="/legal/terms" className="text-muted hover:text-text">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/legal/privacy" className="text-muted hover:text-text">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <a
                href={site.discordUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-muted hover:text-text"
              >
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line px-4 py-5">
        <p className="mx-auto max-w-6xl text-xs leading-relaxed text-muted">
          {site.name} は個人運営の非公式サーバです。Minecraft は Mojang Studios / Microsoft
          の商標であり、本サイトは Mojang Studios とは関係ありません。
        </p>
      </div>
    </footer>
  );
}
