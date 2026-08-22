import { ButtonLink } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-4 py-24">
      <p className="font-mono text-sm text-magic">404</p>
      <h1 className="mt-3 text-3xl font-bold">ページが見つかりません</h1>
      <p className="mt-4 text-muted">
        URL が変更されたか、削除された可能性があります。トップページからお探しください。
      </p>
      <div className="mt-8">
        <ButtonLink href="/">トップへ戻る</ButtonLink>
      </div>
    </div>
  );
}
