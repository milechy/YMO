import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@ui/AnimatedSection';
import { BlogCard } from '@ui/BlogCard';

export const metadata: Metadata = {
  title: 'ニュース・お知らせ',
  description: 'YMO Yield Media Onlineの最新情報、プレスリリース、マーケティングコラムをお届けします。',
};

const categories = ['すべて', 'お知らせ', 'プレスリリース', 'コラム', 'メディア掲載'];

const articles = [
  { date: '2024.12.01', category: 'お知らせ', title: '2025年新春キャンペーン受付開始のお知らせ', excerpt: '2025年1月より、新規お申し込みのお客様向けに初月費用割引キャンペーンを実施します。広告運用・SNSマーケティング・Web制作など全サービスが対象です。', href: '/news/2024-campaign' },
  { date: '2024.11.15', category: 'プレスリリース', title: '○○株式会社との戦略的パートナーシップ締結について', excerpt: 'このたび○○株式会社と戦略的パートナーシップを締結しました。両社の強みを活かし、より幅広い業種・規模のお客様へ高品質なデジタルマーケティング支援を提供してまいります。', href: '/news/partnership' },
  { date: '2024.10.30', category: 'コラム', title: '【2025年版】BtoB企業のためのSNSマーケティング完全ガイド', excerpt: 'BtoB企業がSNSで成果を出すための戦略と実践手法を解説。LinkedIn・X・YouTube活用事例も豊富に掲載しています。', href: '/news/sns-guide-2025' },
  { date: '2024.10.01', category: 'メディア掲載', title: '○○メディアにて代表インタビューが掲載されました', excerpt: '「広告代理店の未来像」をテーマに、代表取締役のインタビューが掲載されました。', href: '/news/media-interview' },
  { date: '2024.09.15', category: 'コラム', title: 'Google広告の自動入札戦略を使いこなす5つのポイント', excerpt: '2024年現在のGoogle広告における自動入札（スマート入札）の最新動向と、成果を出すための運用ポイントを解説します。', href: '/news/google-ads-smart-bidding' },
  { date: '2024.08.20', category: 'お知らせ', title: '夏季休業のご案内（2024年8月13日〜16日）', excerpt: '誠に勝手ながら、下記の期間を夏季休業とさせていただきます。', href: '/news/summer-holiday-2024' },
];

export default function NewsPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">News</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
            ニュース
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            最新情報、プレスリリース、マーケティングコラムをお届けします。
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Coming Soon ─── */}
      <section className="bg-brand-black px-8 md:px-10 py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,225,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,225,0,0.03) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display text-[18vw] text-brand-border leading-none">NEWS</span>
        </div>
        <AnimatedSection className="relative text-center max-w-xl mx-auto">
          <div className="font-display text-brand-yellow mb-6" style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}>
            準備中
          </div>
          <p className="text-brand-white text-lg font-bold mb-4">ニュースページは近日公開予定です。</p>
          <p className="text-brand-gray text-sm leading-relaxed mb-10">
            お問い合わせは、お問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black font-bold px-10 py-4 text-sm tracking-wider hover:bg-brand-white transition-colors duration-300"
          >
            お問い合わせ →
          </Link>
        </AnimatedSection>
      </section>

      {/* ─── Articles (hidden) ─── */}
      <section className="hidden bg-brand-cream px-8 md:px-10 py-16">
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`font-mono text-[10px] tracking-wider px-4 py-2 border cursor-pointer transition-colors ${
                  cat === 'すべて'
                    ? 'bg-brand-black text-brand-white border-brand-black'
                    : 'border-brand-black/20 text-brand-gray hover:border-brand-black hover:text-brand-black'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="max-w-3xl">
            {articles.map((article) => (
              <BlogCard key={article.href} {...article} onDark={false} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-14 flex items-center gap-2">
            {['1', '2', '→'].map((p) => (
              <span
                key={p}
                className={`w-10 h-10 flex items-center justify-center font-mono text-sm cursor-pointer transition-colors ${
                  p === '1'
                    ? 'bg-brand-black text-brand-white'
                    : 'border border-brand-black/20 text-brand-gray hover:border-brand-black hover:text-brand-black'
                }`}
              >
                {p}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
