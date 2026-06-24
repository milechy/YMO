import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@ui/AnimatedSection';

export const metadata: Metadata = {
  title: '実績・事例',
  description: '300社以上の支援実績。多様な業種でのキャンペーン成果をご紹介します。',
};

export default function WorksPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Works</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
            実績・事例
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            支援企業の成果をご紹介します。
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
          <span className="font-display text-[18vw] text-brand-border leading-none">WORKS</span>
        </div>
        <AnimatedSection className="relative text-center max-w-xl mx-auto">
          <div className="font-display text-brand-yellow mb-6" style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}>
            準備中
          </div>
          <p className="text-brand-white text-lg font-bold mb-4">実績ページは近日公開予定です。</p>
          <p className="text-brand-gray text-sm leading-relaxed mb-10">
            実績・事例についてのお問い合わせは、お問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black font-bold px-10 py-4 text-sm tracking-wider hover:bg-brand-white transition-colors duration-300"
          >
            お問い合わせ →
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
