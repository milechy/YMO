import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'メディアマンバンク | 戦略的メディア露出支援コミュニティ',
  description:
    'テレビ業界出身のメディアマンが本気で設計する戦略的メディア露出支援コミュニティ。DAAAMO × YMOがプロデュース。第0回無料セミナー開催中。',
};

export default function MediamantBankLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
