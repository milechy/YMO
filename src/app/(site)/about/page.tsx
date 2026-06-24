import type { Metadata } from 'next';
import { AnimatedSection } from '@ui/AnimatedSection';
import { CTASection } from '@ui/CTASection';
import { GRADIENTS } from '@/lib/gradients';

export const metadata: Metadata = {
  title: '会社概要',
  description: '設立背景、代表メッセージ、企業理念、沿革、会社情報をご紹介します。',
};

const timeline = [
  { year: '2020', event: '東京都渋谷区にて創業。広告運用事業を開始。' },
  { year: '2021', event: '累計支援社数100社を突破。SNSマーケティング部門を新設。' },
  { year: '2022', event: 'クリエイティブ制作部門を設立。映像・グラフィック制作を内製化。' },
  { year: '2023', event: 'Web制作部門を設立。設計からCMS構築まで一気通貫の体制を確立。' },
  { year: '2024', event: '累計支援社数300社を突破。グループ各社との連携を強化し、総合支援体制へ移行。' },
];

const values = [
  { num: '01', title: '成果へのコミット', desc: 'KPIを明確に設定し、達成するまで改善を繰り返す。数字で語ることが私たちの約束です。', gradient: GRADIENTS[0] },
  { num: '02', title: '透明性のある連携', desc: 'レポートを毎月丁寧に共有。数値の背景にある意味をきちんと説明します。', gradient: GRADIENTS[1] },
  { num: '03', title: '長期的なパートナーシップ', desc: '単発の施策ではなく、事業の成長を共に考えるパートナーであり続けることを重視します。', gradient: GRADIENTS[2] },
];

const companyInfo = [
  { label: '会社名', value: 'YMO Yield Media Online' },
  { label: '設立', value: '2020年[月]' },
  { label: '資本金', value: '[金額]万円' },
  { label: '代表取締役', value: '[代表者名]' },
  { label: '所在地', value: '〒XXX-XXXX 東京都[区市町村][住所]' },
  { label: '事業内容', value: '広告運用、クリエイティブ制作、Web制作、SNSマーケティング、SEOコンサルティング' },
  { label: '取引銀行', value: '[銀行名]' },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Company</p>
          <h1
            className="font-black text-brand-black leading-[0.95]"
            style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}
          >
            私たちに<br />ついて
          </h1>
          <div className="mt-8 space-y-6 max-w-lg">
            {[
              { en: '01 There Is No Default.', ja: '正解は最初から存在しない。広告もSNSも、昨日の成功が今日の正解とは限らない。私たちは常にゼロから考える。' },
              { en: '02 Attention Is Earned.', ja: '関心は買うものではなく、獲得するもの。広告費だけでは人は動かない。人が反応する理由を設計する。' },
              { en: '03 Small Can Move Big.', ja: '小さな挑戦が、大きな市場を動かす。予算の大きさではなく、アイデアと実行力が結果を変える。' },
              { en: '04 Turn It On.', ja: '動かなければ、始まらない。ブランドも、人も、市場も。最初の一歩を生み出すことが私たちの仕事。' },
            ].map((item) => (
              <div key={item.en} className="border-l-2 border-brand-black pl-5">
                <p className="font-mono text-[10px] tracking-[0.25em] text-brand-black mb-1">{item.en}</p>
                <p className="text-brand-gray text-sm leading-relaxed">{item.ja}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Story ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Our Story</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <AnimatedSection>
            <p
              className="font-black text-brand-black leading-tight mb-8"
              style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}
            >
              「成果を出すシステム」と<br />「今の時代を動かすチカラ」。
            </p>
            <div className="space-y-4 text-brand-gray text-sm leading-relaxed">
              <p>
                YMOは、人の関心を動かし、<br />
                信頼を生み、<br />
                行動へつなげるための広告代理店です。
              </p>
              <p>
                SNS広告、デジタルマーケティング、メディア設計——<br />
                ブランドの可能性をONにする。
              </p>
              <p className="font-mono tracking-[0.2em] text-brand-black">Turn it On.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150} direction="left">
            <div
              className="flex items-center justify-center aspect-square border border-brand-black/10"
              style={{ background: GRADIENTS[3] }}
            >
              <div className="text-center p-8">
                <div className="font-mono text-brand-black/50 text-xs tracking-widest mb-3">Est. 2020</div>
                <div className="font-black text-brand-black" style={{ fontSize: 'clamp(60px, 8vw, 100px)' }}>
                  300<span className="text-brand-black/40">+</span>
                </div>
                <div className="text-brand-black/60 text-sm mt-2">支援企業数</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── CEO Message ─── */}
      <section className="bg-brand-black px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-border pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-yellow uppercase">Message</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <AnimatedSection className="md:col-span-1">
            <div
              className="aspect-[3/4] flex items-end p-6"
              style={{ background: GRADIENTS[0] }}
            >
              <div>
                <div className="font-mono text-brand-black/60 text-[10px] tracking-widest mb-1">代表取締役</div>
                <div className="text-brand-black font-bold text-lg">[代表者名]</div>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={200} direction="left" className="md:col-span-2 flex flex-col justify-center">
            <p
              className="font-black text-brand-yellow leading-tight mb-8"
              style={{ fontSize: 'clamp(20px, 2.8vw, 36px)' }}
            >
              広告は、情報を届けるためにあるのではない。<br />人を動かすためにある。
            </p>
            <div className="space-y-4 text-brand-gray text-sm leading-relaxed">
              <p>どれだけ多くの人に届いたかではなく、どれだけ人の心を動かしたか。それが本当の価値だと、私たちは考えています。</p>
              <p>市場は変わり続けています。SNSが生まれ、動画が主流となり、AIが日常になろうとしている今、昨日の成功が明日の成功を保証する時代ではありません。だからこそ私たちは、過去の正解に頼らず、今の時代に必要な方法を常に問い続けます。</p>
              <p>人を動かす。<br />ブランドを動かす。<br />市場を動かす。<br />その最初のスイッチを入れること。それがYMOの役割です。</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ─── Values ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Philosophy</p>
          </div>
          <h2
            className="font-black text-brand-black mb-12 leading-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
          >
            私たちの価値観
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


      {/* ─── Timeline ─── */}
      <section className="hidden bg-brand-black px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-border pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-yellow uppercase">History</p>
          </div>
        </AnimatedSection>
        <div>
          {timeline.map((item, i) => (
            <AnimatedSection key={item.year} delay={i * 80}>
              <div className="flex gap-8 md:gap-16 border-b border-brand-border py-7 hover:border-brand-yellow transition-colors duration-300">
                <div className="font-mono font-bold text-brand-yellow text-sm w-14 shrink-0 pt-0.5">{item.year}</div>
                <p className="text-brand-white text-sm leading-relaxed">{item.event}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── Company Info ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Company Info</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="max-w-2xl">
            {companyInfo.map((row) => (
              <div key={row.label} className="flex flex-col md:flex-row border-b border-brand-black/10 py-5 gap-1 md:gap-10">
                <dt className="font-mono text-[10px] tracking-wider text-brand-gray w-28 shrink-0 pt-0.5 uppercase">{row.label}</dt>
                <dd className="text-brand-black text-sm leading-relaxed">{row.value}</dd>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ─── Access ─── */}
      <section className="bg-brand-black px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-6 border-b border-brand-border pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-yellow uppercase">Access</p>
          </div>
          <p className="text-brand-gray text-sm mb-10">〒XXX-XXXX 東京都[区市町村][住所]</p>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <div className="bg-brand-border aspect-video flex items-center justify-center">
            <p className="text-brand-gray text-sm font-mono">[ Google Map を埋め込む ]</p>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              { line: '最寄り駅', detail: '[最寄り駅名]駅 徒歩[X]分' },
              { line: 'バス', detail: '[バス停名]より徒歩[X]分' },
            ].map((item) => (
              <div key={item.line} className="flex gap-4">
                <span className="font-mono text-brand-yellow text-[10px] tracking-wider w-16 shrink-0 pt-0.5 uppercase">{item.line}</span>
                <span className="text-brand-white text-sm">{item.detail}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <CTASection headline="お気軽にご相談ください" subheadline="初回相談は無料。まずはお話を聞かせてください。" ctaLabel="お問い合わせ" ctaHref="/contact" theme="yellow" />
    </>
  );
}
