import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { site } from "@/lib/site";

/** サイト全体に出す準備中バナー。公開時は site.isPreparing を false にすれば消える。 */
export function PreparingBanner() {
  if (!site.isPreparing) {
    return null;
  }

  return (
    <div className="border-b border-gun/40 bg-gun/10">
      <p className="mx-auto flex max-w-6xl items-start gap-2 px-4 py-2.5 text-xs leading-relaxed text-text sm:text-sm">
        <AlertTriangle size={16} className="mt-0.5 shrink-0 text-gun" aria-hidden />
        <span>
          <strong className="font-semibold">現在オープン準備中です。</strong>
          ゲームサーバ（{site.serverAddress}）と公式 Discord はまだ公開していません。公開日は
          <Link href="/news" className="mx-1 text-magic underline underline-offset-2">
            お知らせ
          </Link>
          でご案内します。
        </span>
      </p>
    </div>
  );
}

/** ページ内に置く準備中の注意書き。 */
export function PreparingNote({ children }: { children?: React.ReactNode }) {
  if (!site.isPreparing) {
    return null;
  }

  return (
    <div className="rounded-lg border border-gun/40 bg-gun/10 p-4 text-sm leading-relaxed text-text">
      <p className="font-semibold text-gun">準備中</p>
      <div className="mt-1 text-muted">
        {children ?? (
          <p>
            ゲームサーバは公開準備中のため、まだ接続できません。掲載内容は開発中の仕様に基づく
            予定であり、公開までに変更される場合があります。
          </p>
        )}
      </div>
    </div>
  );
}
