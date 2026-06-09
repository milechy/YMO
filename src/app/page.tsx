import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@ui/AnimatedSection';
import { CTASection } from '@ui/CTASection';
import { BlogCard } from '@ui/BlogCard';
import { GRADIENTS } from '@/lib/gradients';

export const metadata: Metadata = {
  title: '広告を、武器に。| YMO Yield Media Online',
};

const services = [
  { number: '01', title: '広告運用', href: '/services#ad-management' },
  { number: '02', title: 'クリエイティブ制作', href: '/services#creative' },
  { number: '03', title: 'Web制作', href: '/services#web' },
  { number: '04', title: 'SNSマーケティング', href: '/services#sns' },
  { number: '05', title: 'SEO / コンテンツ', href: '/services#seo' },
];

const works = [
  {
    id: '01',
    category: 'ECサイト',
    client: '株式会社○○',
    result: 'ROI 320%',
    detail: 'CPAを45%削減し、月間売上を2.4倍に改善。',
    gradient: GRADIENTS[3],
  },
  {
    id: '02',
    category: 'SaaS / BtoB',
    client: '△△株式会社',
    result: 'リード 3×',
    detail: 'コンテンツ×リターゲティングで商談化率を大幅改善。',
    gradient: GRADIENTS[1],
  },
  {
    id: '03',
    category: 'アパレル',
    client: '□□ブランド',
    result: 'フォロワー 5×',
    detail: 'Instagramリール戦略で6ヶ月1万人突破。',
    gradient: GRADIENTS[2],
  },
];

const stats = [
  { num: '300+', label: '支援企業数', gradient: GRADIENTS[0] },
  { num: '45%', label: '平均CPA削減率', gradient: GRADIENTS[1] },
  { num: '98%', label: '顧客継続率', gradient: GRADIENTS[2] },
];

const news = [
  {
    date: '2024.12.01',
    category: 'お知らせ',
    title: '2025年新春キャンペーン受付開始のお知らせ',
    href: '/news/2024-campaign',
  },
  {
    date: '2024.11.15',
    category: 'プレスリリース',
    title: '○○株式会社との戦略的パートナーシップ締結について',
    href: '/news/partnership',
  },
  {
    date: '2024.10.30',
    category: 'コラム',
    title: '【2025年版】BtoB企業のためのSNSマーケティング完全ガイド',
    href: '/news/sns-guide-2025',
  },
];

// Scrolling ticker items
const tickerItems = [
  '広告運用',
  'クリエイティブ制作',
  'Web制作',
  'SNSマーケティング',
  'SEO',
  '広告を、武器に。',
];

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — siberia.es style
          Cream bg + massive Japanese headline
      ═══════════════════════════════════════ */}
      <section className="relative min-h-[calc(100vh-3.5rem)] md:min-h-screen flex flex-col bg-brand-cream overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 md:px-10 pt-10 pb-0">
          <p className="font-mono text-[10px] tracking-[0.35em] text-brand-gray uppercase">
            Japan's Digital Agency
          </p>
          <p className="font-mono text-[10px] tracking-[0.35em] text-brand-gray uppercase hidden sm:block">
            Est. 2020
          </p>
        </div>

        {/* Giant headline */}
        <div className="flex-1 flex flex-col justify-center px-6 md:px-10 py-8">
          <h1
            className="font-black text-brand-black leading-[0.92] tracking-tight"
            style={{ fontSize: 'clamp(56px, 11vw, 160px)' }}
          >
            広告を、
            <br />
            武器に。
          </h1>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 px-8 md:px-10 pb-10">
          <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
            戦略からクリエイティブまで、<br />
            貴社のビジネスを次のステージへ。
          </p>
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-yellow text-brand-black font-bold px-6 py-3 text-xs tracking-[0.2em] hover:bg-brand-black hover:text-brand-yellow transition-colors duration-300"
            >
              無料相談 →
            </Link>
            <Link
              href="/works"
              className="inline-flex items-center gap-2 border border-brand-black/20 text-brand-black font-bold px-6 py-3 text-xs tracking-[0.2em] hover:border-brand-black transition-colors duration-300"
            >
              実績を見る
            </Link>
          </div>
        </div>

        {/* Corner decoration */}
        <div
          className="absolute bottom-8 right-8 font-display text-[18vw] leading-none text-brand-black/[0.04] select-none pointer-events-none"
          aria-hidden
        >
          →
        </div>
      </section>

      {/* ═══════════════════════════════════════
          TICKER — scrolling yellow banner
      ═══════════════════════════════════════ */}
      <div className="ticker-wrap bg-brand-yellow overflow-hidden py-3 border-y border-brand-black/10">
        <div className="ticker-track flex gap-16 whitespace-nowrap animate-ticker">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="font-mono text-brand-black text-xs tracking-[0.3em] uppercase shrink-0">
              {item} ·
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════
          STATS — siberia gradient cards
      ═══════════════════════════════════════ */}
      <section>
        <div className="grid grid-cols-3">
          {stats.map((s, i) => (
            <AnimatedSection
              key={s.num}
              delay={i * 100}
              className="px-8 md:px-12 py-16 flex flex-col gap-3"
              style={{ background: s.gradient }}
            >
              <div
                className="font-display text-brand-black/80"
                style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
              >
                {s.num}
              </div>
              <div className="font-mono text-[10px] tracking-[0.3em] text-brand-black/60 uppercase">
                {s.label}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SERVICES — cream, numbered list
          siberia.es inspired vertical list
      ═══════════════════════════════════════ */}
      <section className="bg-brand-cream py-20 px-8 md:px-10">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Services</p>
            <Link
              href="/services"
              className="font-mono text-[10px] tracking-[0.3em] text-brand-gray hover:text-brand-black transition-colors uppercase"
            >
              すべて見る →
            </Link>
          </div>
        </AnimatedSection>

        <div>
          {services.map((s, i) => (
            <AnimatedSection key={s.number} delay={i * 60}>
              <Link
                href={s.href}
                className="group flex items-center justify-between py-6 border-b border-brand-black/10 hover:border-brand-yellow transition-colors duration-300"
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <span className="font-mono text-xs text-brand-gray/60 w-8">{s.number}</span>
                  <span
                    className="font-black text-brand-black group-hover:text-brand-black transition-colors"
                    style={{ fontSize: 'clamp(22px, 3vw, 44px)' }}
                  >
                    {s.title}
                  </span>
                </div>
                <span className="font-mono text-sm text-brand-gray group-hover:text-brand-black transition-colors opacity-0 group-hover:opacity-100">
                  →
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          WORKS — dark, 3 cases
      ═══════════════════════════════════════ */}
      <section className="bg-brand-black py-20 px-8 md:px-10">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-border pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Works</p>
            <Link
              href="/works"
              className="font-mono text-[10px] tracking-[0.3em] text-brand-gray hover:text-brand-yellow transition-colors uppercase"
            >
              すべて見る →
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-px bg-brand-black/20">
          {works.map((w, i) => (
            <AnimatedSection
              key={w.id}
              delay={i * 100}
              className="p-8 group"
              style={{ background: w.gradient }}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="font-mono text-brand-black/50 text-xs">{w.id}</span>
                <span className="font-mono text-[9px] border border-brand-black/20 text-brand-black/60 px-2 py-1 tracking-wider uppercase">
                  {w.category}
                </span>
              </div>
              <p className="text-brand-black/60 text-xs mb-3 tracking-wider">{w.client}</p>
              <p
                className="font-black text-brand-black leading-tight mb-4"
                style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
              >
                {w.result}
              </p>
              <p className="text-brand-black/70 text-sm leading-relaxed">{w.detail}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════
          NEWS — cream, dotted list
      ═══════════════════════════════════════ */}
      <section className="bg-brand-cream py-20 px-8 md:px-10">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">News</p>
            <Link
              href="/news"
              className="font-mono text-[10px] tracking-[0.3em] text-brand-gray hover:text-brand-black transition-colors uppercase"
            >
              すべて見る →
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div>
            {news.map((item) => (
              <BlogCard key={item.href} {...item} onDark={false} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ═══════════════════════════════════════
          CTA — yellow
      ═══════════════════════════════════════ */}
      <CTASection
        headline="まずは、ご相談から。"
        subheadline="初回相談は無料です。お気軽にお問い合わせください。"
        ctaLabel="無料相談を申し込む"
        ctaHref="/contact"
        theme="yellow"
      />
    </>
  );
}
