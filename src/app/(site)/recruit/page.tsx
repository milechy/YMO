import type { Metadata } from 'next';
import Link from 'next/link';
import { AnimatedSection } from '@ui/AnimatedSection';
import { GRADIENTS } from '@/lib/gradients';

export const metadata: Metadata = {
  title: '採用情報',
  description: 'YMO Yield Media Onlineの採用情報ページです。近日公開予定。',
};

const values = [
  { num: '01', title: '成果を出す人', desc: '目標から逆算して動ける人。KPIに向き合い、改善を繰り返せる人を求めています。', gradient: GRADIENTS[0] },
  { num: '02', title: 'クリエイティブな思考', desc: 'データと直感の両方を武器にできる人。型にとらわれず、新しいアイデアを出し続けられる人。', gradient: GRADIENTS[1] },
  { num: '03', title: 'チームで動ける人', desc: '個人の力だけでなく、チームとして最大の成果を出すことを重視できる人。', gradient: GRADIENTS[2] },
];

export default function RecruitPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Careers</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
            採用情報
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            私たちと一緒に、広告の力でビジネスを変えていく仲間を探しています。
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
          <span className="font-display text-[18vw] text-brand-border leading-none">RECRUIT</span>
        </div>
        <AnimatedSection className="relative text-center max-w-xl mx-auto">
          <div className="font-display text-brand-yellow mb-6" style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}>
            準備中
          </div>
          <p className="text-brand-white text-lg font-bold mb-4">採用ページは近日公開予定です。</p>
          <p className="text-brand-gray text-sm leading-relaxed mb-10">
            採用についてのお問い合わせは、お問い合わせフォームよりお気軽にご連絡ください。
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black font-bold px-10 py-4 text-sm tracking-wider hover:bg-brand-white transition-colors duration-300"
          >
            採用に関するお問い合わせ →
          </Link>
        </AnimatedSection>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">We're Looking For</p>
          </div>
          <h2 className="font-black text-brand-black mb-12 leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}>
            求める人物像
          </h2>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-px bg-brand-black/10">
          {values.map((v, i) => (
            <AnimatedSection key={v.num} delay={i * 100} className="p-8" style={{ background: v.gradient }}>
              <div className="font-mono text-brand-black/50 text-[10px] tracking-widest mb-6">{v.num}</div>
              <h3
                className="font-black text-brand-black mb-4 leading-tight"
                style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}
              >
                {v.title}
              </h3>
              <p className="text-brand-black/70 text-sm leading-relaxed">{v.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── Contact CTA ─── */}
      <section className="bg-brand-black px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-10 border-b border-brand-border pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-yellow uppercase">Contact</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="max-w-xl">
            <h2 className="font-black text-brand-white mb-5 leading-tight" style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}>
              興味を持っていただけましたか？
            </h2>
            <p className="text-brand-gray text-sm leading-relaxed mb-8">
              採用ページ公開前でも、ご質問・ご応募のご連絡を歓迎しています。まずはお気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black font-bold px-10 py-4 text-sm tracking-wider hover:bg-brand-white transition-colors duration-300"
            >
              お問い合わせ →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
