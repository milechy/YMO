'use client';

import { useState, useRef, RefObject } from 'react';
import { AnimatedSection } from '@ui/AnimatedSection';
import { cn } from '@/lib/utils';

// ─── Design tokens ─────────────────────────────────────────────
const C = {
  navy: '#0A2540',
  gold: '#C5A46E',
  bg: '#F8F9FA',
  text: '#1F2937',
  muted: '#6B7280',
  white: '#FFFFFF',
} as const;

// ─── Reusable primitives ────────────────────────────────────────
function CTAButton({ children, className, onClick }: { children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-block rounded-xl px-8 py-4 text-lg font-medium transition-all duration-300',
        'bg-[#0A2540] text-white hover:bg-[#C5A46E] hover:text-[#0A2540]',
        className,
      )}
    >
      {children}
    </button>
  );
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={cn('text-3xl md:text-4xl font-semibold tracking-tight', light ? 'text-white' : 'text-[#0A2540]')}>
      {children}
    </h2>
  );
}

function GoldDivider() {
  return <div className="w-12 h-0.5 bg-[#C5A46E] my-4" />;
}

// ─── Sections ───────────────────────────────────────────────────

function Header({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A2540]/95 backdrop-blur-sm border-b border-[#C5A46E]/20">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-white font-semibold tracking-wide">
          <span className="text-[#C5A46E]">メディアマン</span>バンク
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#service" className="hover:text-[#C5A46E] transition-colors">サービス内容</a>
          <a href="#pricing" className="hover:text-[#C5A46E] transition-colors">料金</a>
          <a href="#flow" className="hover:text-[#C5A46E] transition-colors">参加の流れ</a>
          <a href="#faq" className="hover:text-[#C5A46E] transition-colors">FAQ</a>
        </nav>
        <button
          onClick={onCTAClick}
          className="rounded-xl px-5 py-2 text-sm font-medium bg-[#C5A46E] text-[#0A2540] hover:bg-white transition-all duration-300"
        >
          無料セミナーに申し込む
        </button>
      </div>
    </header>
  );
}

function Hero({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: `linear-gradient(135deg, #0A2540 0%, #0d3060 60%, #0A2540 100%)` }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(#C5A46E 1px, transparent 1px), linear-gradient(90deg, #C5A46E 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 py-32 text-center">
        <AnimatedSection delay={0} direction="fade">
          <p className="text-[#C5A46E] text-sm tracking-[0.3em] uppercase mb-6">
            DAAAMO × YMO Produce
          </p>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight mb-6">
            広告ではなく、企画で<br />
            <span className="text-[#C5A46E]">「選ばれる企業」</span>へ。
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto mb-4">
            テレビ業界出身のメディアマンが本気で設計する<br />
            戦略的メディア露出支援コミュニティ
          </p>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <p className="text-white/50 text-sm leading-relaxed max-w-xl mx-auto mb-10">
            DAAAMO × YMOがプロデュースする「メディアマンバンク」。<br />
            お金を払って「載せる」のではなく、企画力と人脈で「取り上げられる」確率を最大化します。
          </p>
        </AnimatedSection>
        <AnimatedSection delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton onClick={onCTAClick}>
              第0回無料セミナーに申し込む（先着100社）
            </CTAButton>
            <a
              href="#service"
              className="inline-block rounded-xl px-8 py-4 text-lg font-medium border border-[#C5A46E]/50 text-[#C5A46E] hover:border-[#C5A46E] hover:bg-[#C5A46E]/10 transition-all duration-300"
            >
              詳細を見る
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section className="py-24" style={{ background: C.bg }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <SectionHeading>なぜ今、「戦略的メディア露出」が必要なのか</SectionHeading>
          <GoldDivider />
          <p className="text-[#6B7280] leading-relaxed mt-6 text-lg">
            多くの経営者が広告費を投じても、露出が一過性で終わってしまうことに課題を感じています。
          </p>
          <p className="text-[#1F2937] leading-relaxed mt-6 text-lg">
            本当に欲しいのは「選ばれる企業」としての継続的な権威性と信頼。<br />
            上場、資金調達、採用、取引先拡大——知名度が全てを左右する時代に、<br />
            「ただ載せる」のではなく<span className="font-semibold text-[#0A2540]">「企画で取り上げられる」</span>方法を知っていますか？
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="service" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <SectionHeading>メディアマンバンクとは</SectionHeading>
          <GoldDivider />
          <p className="text-[#6B7280] leading-relaxed mt-6 text-lg">
            メディアマンバンクは、テレビ放送作家・メディア関係者を中心とした<br />
            「企業のための戦略的メディア露出支援コミュニティ」です。
          </p>
          <p className="text-[#1F2937] leading-relaxed mt-6 text-lg">
            単なる広告代理店とは全く異なり、<br />
            テレビの企画・キャスティング構造を熟知したプロフェッショナルが、<br />
            企業ごとに最適な「露出ストーリー」を設計・伴走します。
          </p>
          <div className="mt-10 inline-block border border-[#C5A46E] rounded-xl px-8 py-5 text-left">
            <p className="text-[#6B7280] text-sm mb-1">※ 出演を保証するものではありません</p>
            <p className="text-[#0A2540] font-semibold">「出演される側になる確率を最大化する設計」を提供します</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

const STRENGTHS = [
  {
    title: 'テレビ出身者の実践ノウハウ',
    desc: '放送作家がテレビの裏側（企画立案・キャスティング）を公開',
    icon: '📺',
  },
  {
    title: '企業ごとの露出ストーリー設計',
    desc: '単発ではなく、集客後の保持・関係構築まで伴走',
    icon: '🎯',
  },
  {
    title: 'DAAAMOのメディアマンネットワーク',
    desc: '300名超のテレビ・広告・Webのトッププロフェッショナルと連携',
    icon: '🌐',
  },
  {
    title: '顧問契約による個別支援',
    desc: '希望者にはメディアマンが直接伴走するプレミアムサポート',
    icon: '🤝',
  },
];

function Strengths() {
  return (
    <section className="py-24" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionHeading>メディアマンバンクの強み</SectionHeading>
          <GoldDivider />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STRENGTHS.map((s, i) => (
            <AnimatedSection key={s.title} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 h-full border border-[#E5E7EB] hover:border-[#C5A46E] hover:shadow-lg transition-all duration-300">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold text-[#0A2540] mb-3">{s.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    num: '01',
    title: '月例セミナー',
    desc: '都内にて毎月開催。テレビ露出の仕組み／企画の作り方／出演戦略をメディアマンが直接解説（2時間程度）',
  },
  {
    num: '02',
    title: 'メンバー制度（審査制）',
    desc: 'セミナー参加後、希望者のみ。メディアマンとの直接連携・個別相談が可能になります。',
  },
  {
    num: '03',
    title: '個別支援（顧問契約）',
    desc: '企業ごとの露出戦略設計。企画構築／PR導線設計／メディア対応支援まで一貫してサポートします。',
  },
];

function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionHeading>提供する3つのサービス</SectionHeading>
          <GoldDivider />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <AnimatedSection key={s.num} delay={i * 100}>
              <div className="relative border-t-2 border-[#C5A46E] pt-8">
                <span className="text-5xl font-semibold text-[#C5A46E]/30 absolute top-4 right-0 leading-none">
                  {s.num}
                </span>
                <h3 className="text-xl font-semibold text-[#0A2540] mb-4">{s.title}</h3>
                <p className="text-[#6B7280] leading-relaxed text-sm">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const TARGET_LIST = [
  '広告ではなく「信頼性・権威性」を本気で高めたい',
  '会社の知名度を一気に引き上げたい',
  '上場・売却・資金調達を見据えている',
  '自社のブランド価値を根本から引き上げたい',
  '年商1億円〜50億円規模で成長意欲のある経営者・役員',
];

function Target() {
  return (
    <section
      className="py-24"
      style={{ background: `linear-gradient(135deg, #0A2540 0%, #0d3060 100%)` }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="mb-12">
          <SectionHeading light>こんな経営者様におすすめです</SectionHeading>
          <div className="w-12 h-0.5 bg-[#C5A46E] my-4" />
        </AnimatedSection>
        <div className="space-y-4">
          {TARGET_LIST.map((item, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div className="flex items-start gap-4 bg-white/5 rounded-xl px-6 py-4">
                <span className="text-[#C5A46E] font-semibold text-lg mt-0.5">✓</span>
                <p className="text-white text-lg">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

const FLOW_STEPS = [
  { step: '01', title: 'セミナー参加', desc: '第0回は無料。まずは内容を体感してください。' },
  { step: '02', title: '個別相談', desc: 'セミナー後、希望者に個別のヒアリングを実施します。' },
  { step: '03', title: 'メンバー参加', desc: '審査制・NFT 100万円。本気の経営者のみのコミュニティ。' },
  { step: '04', title: '個別支援スタート', desc: '顧問契約により、専任のメディアマンが伴走します。' },
];

function Flow() {
  return (
    <section id="flow" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionHeading>参加までの流れ</SectionHeading>
          <GoldDivider />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {FLOW_STEPS.map((f, i) => (
            <AnimatedSection key={f.step} delay={i * 100} className="text-center">
              <div className="relative">
                <div className="w-14 h-14 rounded-full border-2 border-[#C5A46E] flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#0A2540] font-semibold">{f.step}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-7 left-1/2 w-full h-0.5 bg-[#C5A46E]/30" />
                )}
                <h3 className="text-lg font-semibold text-[#0A2540] mb-2">{f.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionHeading>料金体系</SectionHeading>
          <GoldDivider />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'セミナー会員', price: '33,000円〜', sub: '月額（サブスク）', note: 'または 55,000円/月' },
            { label: 'メンバー参加費', price: '1,000,000円', sub: 'NFT・審査制', note: 'コミュニティへのフル参加' },
            { label: '顧問契約', price: '個別見積もり', sub: '個別支援プラン', note: '要ご相談' },
          ].map((p, i) => (
            <AnimatedSection key={p.label} delay={i * 100}>
              <div className={cn(
                'rounded-2xl p-8 text-center border',
                i === 1 ? 'bg-[#0A2540] border-[#C5A46E] text-white' : 'border-[#E5E7EB]',
              )}>
                <p className={cn('text-sm tracking-wide mb-4', i === 1 ? 'text-[#C5A46E]' : 'text-[#6B7280]')}>{p.label}</p>
                <p className={cn('text-3xl font-semibold mb-2', i === 1 ? 'text-white' : 'text-[#0A2540]')}>{p.price}</p>
                <p className={cn('text-sm mb-1', i === 1 ? 'text-white/70' : 'text-[#6B7280]')}>{p.sub}</p>
                <p className={cn('text-xs', i === 1 ? 'text-white/50' : 'text-[#9CA3AF]')}>{p.note}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection className="mt-10 text-center">
          <p className="text-[#6B7280] text-sm">
            ※ 本サービスは「出演を保証するもの」ではありません。<br />
            しかし、「出演される側になる確率を最大化する設計」を提供します。
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

const FAQS = [
  { q: '出演は保証されますか？', a: '出演の保証はしておりません。しかし、テレビ業界の企画・キャスティング構造を熟知したプロが「選ばれる確率を最大化する設計」を提供します。' },
  { q: 'セミナーだけ参加することはできますか？', a: 'はい、可能です。セミナーのみのご参加も歓迎しています。その後、ご希望の場合にメンバー参加のご案内をします。' },
  { q: 'どんな企業が向いていますか？', a: '年商1億円〜50億円規模で、上場・採用・ブランド強化などを本気で考えている経営者・役員の方に最適です。' },
  { q: '個別相談では何をしてもらえますか？', a: '貴社の現状・課題・目標をヒアリングし、最適な露出戦略の方向性をご提案します（無料・30〜60分）。' },
  { q: 'NFTメンバーとは具体的に何ですか？', a: 'コミュニティへのフルアクセス権をNFTとして発行します。審査制のため、本気の経営者のみが参加できる場を実現しています。' },
  { q: 'キャンセルポリシーは？', a: 'セミナーは開催7日前までのキャンセルが可能です。詳細はお申し込み後にご案内する規約をご確認ください。' },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="py-24" style={{ background: C.bg }}>
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <SectionHeading>よくある質問</SectionHeading>
          <GoldDivider />
        </AnimatedSection>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <AnimatedSection key={i} delay={i * 60}>
              <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-medium text-[#0A2540]">{f.q}</span>
                  <span className="text-[#C5A46E] text-xl flex-shrink-0">{open === i ? '−' : '+'}</span>
                </button>
                {open === i && (
                  <div className="px-6 pb-5 text-[#6B7280] leading-relaxed text-sm border-t border-[#E5E7EB] pt-4">
                    {f.a}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm({ formRef }: { formRef: RefObject<HTMLDivElement | null> }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      ref={formRef as RefObject<HTMLElement>}
      className="py-24"
      style={{ background: `linear-gradient(135deg, #0A2540 0%, #0d3060 100%)` }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-[#C5A46E] text-sm tracking-[0.2em] uppercase mb-4">第0回無料セミナー</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            今すぐ「選ばれる企業」への<br />第一歩を踏み出してください
          </h2>
          <p className="text-white/60 mb-10">6月開催予定・先着100社</p>
        </AnimatedSection>

        {submitted ? (
          <AnimatedSection>
            <div className="bg-white/10 rounded-2xl p-10 text-white">
              <div className="text-5xl mb-4">🎉</div>
              <p className="text-xl font-semibold mb-2">申し込みありがとうございます。</p>
              <p className="text-white/70">追ってご連絡いたします。</p>
            </div>
          </AnimatedSection>
        ) : (
          <AnimatedSection delay={100}>
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {[
                { name: 'name', label: '氏名', type: 'text', required: true },
                { name: 'company', label: '会社名', type: 'text', required: true },
                { name: 'position', label: '役職', type: 'text', required: true },
                { name: 'email', label: 'メールアドレス', type: 'email', required: true },
                { name: 'phone', label: '電話番号', type: 'tel', required: true },
                { name: 'preferred_date', label: '希望参加日（任意）', type: 'text', required: false },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-white/70 text-sm mb-1">
                    {field.label}
                    {field.required && <span className="text-[#C5A46E] ml-1">*</span>}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    required={field.required}
                    className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#C5A46E] transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-white/70 text-sm mb-1">メッセージ（任意）</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-xl px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-[#C5A46E] transition-colors resize-none"
                />
              </div>
              <CTAButton className="w-full text-center justify-center">
                無料セミナーに申し込む
              </CTAButton>
            </form>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}

function LPFooter() {
  return (
    <footer className="bg-[#060F1E] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          <div>
            <p className="text-white font-semibold text-lg mb-1">
              <span className="text-[#C5A46E]">メディアマン</span>バンク
            </p>
            <p className="text-white/40 text-sm">DAAAMO × YMO Yield Media Online</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href="/privacy" className="text-white/40 hover:text-[#C5A46E] transition-colors">プライバシーポリシー</a>
            <a href="/legal" className="text-white/40 hover:text-[#C5A46E] transition-colors">特定商取引法に基づく表記</a>
            <a href="/contact" className="text-white/40 hover:text-[#C5A46E] transition-colors">お問い合わせ</a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/30 text-xs">
          <p>運営: 株式会社YMO（Yield Media Online）/ DAAAMO</p>
          <p className="mt-1">© 2024 YMO Yield Media Online. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───────────────────────────────────────────────────────
export default function MediamantBankPage() {
  const formRef = useRef<HTMLDivElement>(null);

  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="font-sans">
      <Header onCTAClick={scrollToForm} />
      <div className="pt-16">
        <Hero onCTAClick={scrollToForm} />
        <Problem />
        <Solution />
        <Strengths />
        <Services />
        <Target />
        <Flow />
        <Pricing />
        <FAQ />
        <ContactForm formRef={formRef} />
        <LPFooter />
      </div>
    </div>
  );
}
