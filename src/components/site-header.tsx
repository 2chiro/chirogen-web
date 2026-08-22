"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-base/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="text-lg font-bold tracking-widest text-magic">{site.name}</span>
        </Link>

        <nav aria-label="メインナビゲーション" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors hover:bg-surface-2 ${
                  active ? "text-magic" : "text-muted hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          {site.discordUrl ? (
            <a
              href={site.discordUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="ml-2 rounded-md bg-arcane/20 px-3 py-2 text-sm font-medium text-arcane transition-colors hover:bg-arcane/30"
            >
              Discord
            </a>
          ) : (
            <span className="ml-2 rounded-md px-3 py-2 text-sm text-muted">Discord（準備中）</span>
          )}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="メニューを開閉"
          className="rounded-md p-2 text-muted transition-colors hover:bg-surface-2 hover:text-text md:hidden"
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="モバイルナビゲーション"
          className="border-t border-line bg-surface md:hidden"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-3 text-sm text-text"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              {site.discordUrl ? (
                <a
                  href={site.discordUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="block rounded-md px-2 py-3 text-sm text-arcane"
                >
                  Discord
                </a>
              ) : (
                <span className="block rounded-md px-2 py-3 text-sm text-muted">
                  Discord（準備中）
                </span>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
