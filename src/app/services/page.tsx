import type { Metadata } from 'next';
import { AnimatedSection } from '@ui/AnimatedSection';
import { CTASection } from '@ui/CTASection';
import { GRADIENTS } from '@/lib/gradients';

export const metadata: Metadata = {
  title: 'サービス',
  description: '広告運用、クリエイティブ制作、Web制作、SNSマーケティング、SEO/コンテンツ。戦略から制作・運用まで一貫対応します。',
};

const services = [
  {
    id: 'ad-management',
    number: '01',
    title: '広告運用',
    subtitle: 'Ad Management',
    description: 'Google広告・Meta広告・LINE広告・Yahoo!広告など主要プラットフォームを一括管理。戦略設計から日次運用・レポーティングまでを担当し、データに基づいたPDCAサイクルで広告費対効果（ROAS）を継続的に改善します。',
    features: ['アカウント診断・戦略立案', 'キャンペーン設計・入稿', '入札戦略の継続最適化', 'クリエイティブA/Bテスト', '月次レポート・改善提案', 'LPとの連動改善'],
    metric: '平均CPA -45%',
    gradient: GRADIENTS[0],
    dark: false,
  },
  {
    id: 'creative',
    number: '02',
    title: 'クリエイティブ制作',
    subtitle: 'Creative Production',
    description: '動画広告・バナー・静止画・コピーライティングまで、クリエイティブ制作をワンストップで対応。運用データを基に「刺さる」クリエイティブを設計し、CTR・CVRを改善します。',
    features: ['広告コピーライティング', 'バナー・静止画制作', '動画広告制作（15秒〜60秒）', 'リール・ショート動画制作', 'A/Bテスト素材の量産', 'ブランドガイドライン準拠対応'],
    metric: '平均CTR +120%',
    gradient: GRADIENTS[1],
    dark: true,
  },
  {
    id: 'web',
    number: '03',
    title: 'Web制作',
    subtitle: 'Web Production',
    description: 'コンバージョン設計を起点に、LP・コーポレートサイト・ECサイトを制作します。デザインから実装・CMS構築・公開後の改善まで、一気通貫で対応。',
    features: ['CVR最適化設計', 'LP / コーポレートサイト制作', 'ECサイト構築', 'CMS実装（WordPress/Headless）', '表示速度最適化（Core Web Vitals）', 'A/Bテスト設計・分析'],
    metric: '平均CVR +85%',
    gradient: GRADIENTS[2],
    dark: false,
  },
  {
    id: 'sns',
    number: '04',
    title: 'SNSマーケティング',
    subtitle: 'Social Media Marketing',
    description: 'Instagram・X・TikTok・YouTubeのアカウント戦略から投稿制作・コメント管理・インフルエンサー施策まで、SNS運用を丸ごとお任せいただけます。',
    features: ['SNS戦略・アカウント設計', 'コンテンツカレンダー作成', '投稿制作（画像・動画・テキスト）', 'コメント・DM管理', 'インフルエンサーキャスティング', '月次分析レポート'],
    metric: '平均フォロワー増加率 +350%',
    gradient: GRADIENTS[3],
    dark: true,
  },
  {
    id: 'seo',
    number: '05',
    title: 'SEO / コンテンツ',
    subtitle: 'SEO & Content Marketing',
    description: '検索エンジンで上位表示を獲得するためのコンテンツ戦略・記事制作・内部SEO施策を提供します。広告費をかけずに継続的なオーガニック流入を実現します。',
    features: ['サイト診断・SEO監査', 'キーワード戦略設計', 'SEO記事・コンテンツ制作', '内部リンク・サイト構造最適化', 'テクニカルSEO対応', '競合分析・差別化戦略'],
    metric: '平均オーガニック流入 +240%',
    gradient: GRADIENTS[0],
    dark: false,
  },
];

const flow = [
  { step: '01', title: '無料相談', desc: '現状のお悩みや目標をヒアリングします。' },
  { step: '02', title: '提案・見積', desc: '最適な施策プランと費用感をご提案します。' },
  { step: '03', title: '契約・開始', desc: 'ご合意後、速やかに施策をスタートします。' },
  { step: '04', title: '運用・改善', desc: '定期レポートで透明性ある改善を続けます。' },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Services</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
            貴社に合う<br />施策を、<br />一気通貫で。
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            戦略設計からクリエイティブ、運用改善まで。すべて自社内で完結する体制で、スピードと品質を両立します。
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Services ─── */}
      {services.map((service) => (
        <section
          key={service.id}
          id={service.id}
          className={service.dark ? 'bg-brand-black px-8 md:px-10 py-20' : 'bg-brand-cream px-8 md:px-10 py-20'}
        >
          <AnimatedSection>
            <div className={`flex items-end justify-between mb-10 border-b pb-6 ${service.dark ? 'border-brand-border' : 'border-brand-black/10'}`}>
              <p className={`font-mono text-[10px] tracking-[0.4em] uppercase ${service.dark ? 'text-brand-yellow' : 'text-brand-gray'}`}>
                {service.number} — {service.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            <AnimatedSection>
              <h2
                className={`font-black leading-tight mb-5 ${service.dark ? 'text-brand-white' : 'text-brand-black'}`}
                style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}
              >
                {service.title}
              </h2>
              <p className={`text-sm leading-relaxed mb-8 ${service.dark ? 'text-brand-gray' : 'text-brand-gray'}`}>
                {service.description}
              </p>
              <div className="inline-block px-5 py-2.5" style={{ background: service.gradient }}>
                <span className="font-mono text-brand-black text-xs font-bold tracking-wider">{service.metric}</span>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150} direction="left">
              <div
                className="p-8"
                style={{ background: service.gradient }}
              >
                <p className="font-mono text-[10px] tracking-[0.3em] text-brand-black/60 mb-6 uppercase">対応内容</p>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-brand-black text-sm">
                      <span className="text-brand-black/40 shrink-0 mt-0.5">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      {/* ─── Flow ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Process</p>
          </div>
          <h2 className="font-black text-brand-black mb-12" style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}>
            ご依頼の流れ
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-4 gap-px bg-brand-black/10">
          {flow.map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 80} className="bg-brand-cream p-8">
              <div className="font-display text-brand-black/20 mb-4" style={{ fontSize: 'clamp(40px, 5vw, 64px)' }}>{item.step}</div>
              <h3 className="font-black text-brand-black text-lg mb-3">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTASection headline="まずは、ご相談から。" subheadline="初回相談は無料。貴社の課題に合わせたプランをご提案します。" ctaLabel="無料相談を申し込む" ctaHref="/contact" theme="yellow" />
    </>
  );
}
