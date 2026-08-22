import Link from "next/link";
import type { ReactNode } from "react";
import clsx from "clsx";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="border-b border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {eyebrow && (
          <p className="text-xs font-medium tracking-[0.2em] text-magic uppercase">{eyebrow}</p>
        )}
        <h1 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h1>
        {lead && <p className="mt-4 max-w-3xl leading-relaxed text-muted">{lead}</p>}
      </div>
    </header>
  );
}

export function Section({
  title,
  description,
  children,
  className,
}: {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={clsx("mx-auto max-w-6xl px-4 py-12 sm:py-16", className)}>
      {title && <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>}
      {description && <p className="mt-3 max-w-3xl leading-relaxed text-muted">{description}</p>}
      <div className={clsx(title || description ? "mt-8" : undefined)}>{children}</div>
    </section>
  );
}

export function Card({
  title,
  accent = "magic",
  children,
}: {
  title: string;
  accent?: "magic" | "arcane" | "gun";
  children: ReactNode;
}) {
  const accentClass = {
    magic: "text-magic",
    arcane: "text-arcane",
    gun: "text-gun",
  }[accent];

  return (
    <div className="rounded-xl border border-line bg-surface p-6">
      <h3 className={clsx("text-lg font-semibold", accentClass)}>{title}</h3>
      <div className="mt-3 text-sm leading-relaxed text-muted">{children}</div>
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const className = clsx(
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors",
    variant === "primary"
      ? "bg-magic text-base hover:bg-magic/85"
      : "border border-line bg-surface text-text hover:bg-surface-2",
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** MDX / 長文テキスト用のタイポグラフィ（Tailwind typography プラグインは未導入のため自前定義） */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div
      className={clsx(
        "max-w-3xl leading-relaxed text-muted",
        "[&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text",
        "[&_h3]:mt-8 [&_h3]:mb-2 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-text",
        "[&_p]:my-4",
        "[&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:my-1",
        "[&_a]:text-magic [&_a]:underline [&_a]:underline-offset-2",
        "[&_strong]:text-text",
        "[&_code]:rounded [&_code]:bg-surface-2 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_code]:text-magic",
        "[&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:text-sm",
        "[&_th]:border [&_th]:border-line [&_th]:bg-surface-2 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:text-text",
        "[&_td]:border [&_td]:border-line [&_td]:px-3 [&_td]:py-2",
        "[&_blockquote]:my-6 [&_blockquote]:border-l-2 [&_blockquote]:border-magic [&_blockquote]:pl-4",
        "[&_hr]:my-8 [&_hr]:border-line",
      )}
    >
      {children}
    </div>
  );
}
