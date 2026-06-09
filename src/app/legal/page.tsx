import type { Metadata } from 'next';
import { AnimatedSection } from '@ui/AnimatedSection';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記',
  description: 'YMO Yield Media Onlineの特定商取引法に基づく表記です。',
};

const rows = [
  { label: '事業者名', value: 'YMO Yield Media Online' },
  { label: '代表責任者', value: '[代表者名]' },
  { label: '所在地', value: '〒XXX-XXXX 東京都[区市町村][住所]\n（お問い合わせは電話・メールにて承ります）' },
  { label: '電話番号', value: '03-XXXX-XXXX\n受付時間: 平日 10:00〜18:00（土日祝除く）' },
  { label: 'メールアドレス', value: 'info@example.com' },
  { label: 'Webサイト', value: 'https://example.com' },
  { label: 'サービス内容', value: 'デジタル広告運用代行、クリエイティブ制作、Web制作、SNSマーケティング支援、SEOコンサルティング' },
  { label: '料金', value: '各サービスの料金はお見積もり後にご案内します。詳細はお問い合わせください。\n消費税は別途申し受けます。' },
  { label: '支払方法', value: '銀行振込（月末締め翌月末払い、またはご契約時に別途取り決め）' },
  { label: '支払時期', value: 'ご契約締結後、別途お知らせする期日までにお振込みください。' },
  { label: 'サービス提供時期', value: 'ご契約後、双方合意のスケジュールに基づきサービスを提供します。' },
  { label: 'キャンセル・返金', value: 'サービスの性質上、開始後のキャンセル・返金は原則として承っておりません。詳細はご契約書をご確認ください。' },
  { label: '動作環境', value: '制作物の動作確認は、Chrome・Safari・Edge各最新版で行います。IE等の旧ブラウザは対応外です。' },
];

export default function LegalPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Legal</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(32px, 5.5vw, 80px)' }}>
            特定商取引法に<br />基づく表記
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            最終更新日: 2024年[月][日]
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Table ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-16">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Disclosure</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="max-w-2xl">
            {rows.map((row) => (
              <div
                key={row.label}
                className="flex flex-col md:flex-row border-b border-brand-black/10 py-5 gap-1 md:gap-10"
              >
                <dt className="font-mono text-[10px] tracking-wider text-brand-gray w-36 shrink-0 pt-0.5 uppercase">
                  {row.label}
                </dt>
                <dd className="text-brand-black text-sm leading-relaxed whitespace-pre-line">{row.value}</dd>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mt-12 text-brand-gray text-xs leading-relaxed max-w-2xl">
            ※ 本表記は特定商取引に関する法律第11条に基づく表記です。記載内容は予告なく変更する場合がございます。
          </p>
        </AnimatedSection>
      </section>
    </>
  );
}
