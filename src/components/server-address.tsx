"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { site } from "@/lib/site";

type Props = {
  size?: "md" | "lg";
};

export function ServerAddress({ size = "md" }: Props) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.serverAddress);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="inline-flex flex-col gap-1.5">
      <div className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface p-1.5">
        <code
          className={`px-2 font-mono tracking-wide text-magic ${
            size === "lg" ? "text-lg sm:text-xl" : "text-sm sm:text-base"
          }`}
        >
          {site.serverAddress}
        </code>
        <button
          type="button"
          onClick={copy}
          aria-label="サーバアドレスをコピー"
          className="inline-flex items-center gap-1.5 rounded-md bg-magic/15 px-3 py-1.5 text-sm font-medium text-magic transition-colors hover:bg-magic/25"
        >
          {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
          <span aria-live="polite">{copied ? "コピーしました" : "コピー"}</span>
        </button>
      </div>
      {site.isPreparing && (
        <p className="text-xs text-gun">準備中のため、まだ接続できません</p>
      )}
    </div>
  );
}
