'use client';

import { useState, useRef, RefObject } from 'react';
import { cn } from '@/lib/utils';

// ─── Film strip divider ─────────────────────────────────────────
function FilmStrip({ dark = false }: { dark?: boolean }) {
  return (
    <div className={cn('w-full py-2 flex items-center overflow-hidden', dark ? 'bg-[#111]' : 'bg-[#222]')}>
      <div className="flex gap-2 w-full px-2">
        {Array.from({ length: 60 }).map((_, i) => (
          <div key={i} className="flex-shrink-0 w-6 h-4 rounded-sm bg-white/20" />
        ))}
      </div>
    </div>
  );
}

// ─── Section heading with outline style ────────────────────────
function BoldHeading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn(
      'text-4xl md:text-6xl font-black tracking-tight leading-none',
      'text-white',
      '[text-shadow:3px_3px_0_#000,-1px_-1px_0_#000,1px_-1px_0_#000,-1px_1px_0_#000,1px_1px_0_#000]',
      className,
    )}>
      {children}
    </h2>
  );
}

// ─── Tag label ─────────────────────────────────────────────────
function Tag({ children, color = 'yellow' }: { children: React.ReactNode; color?: 'yellow' | 'pink' | 'cyan' | 'black' }) {
  const colors = {
    yellow: 'bg-[#FFE100] text-black',
    pink: 'bg-[#FF0090] text-white',
    cyan: 'bg-[#00CFFF] text-black',
    black: 'bg-black text-white',
  };
  return (
    <span className={cn('inline-block font-black text-sm px-3 py-1 border-2 border-black', colors[color])}>
      {children}
    </span>
  );
}

// ─── CTA Button ────────────────────────────────────────────────
function CTAButton({ children, onClick, className }: { children: React.ReactNode; onClick?: () => void; className?: string }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-block font-black text-lg px-8 py-4 border-4 border-black',
        'bg-[#FFE100] text-black',
        'shadow-[6px_6px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-1 hover:translate-y-1',
        'transition-all duration-100 active:shadow-none active:translate-x-1.5 active:translate-y-1.5',
        className,
      )}
    >
      {children}
    </button>
  );
}

// ─── Header ────────────────────────────────────────────────────
function Header({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-[#FFE100]">
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="font-black text-lg text-[#FFE100] tracking-wider">
          メディアマンバンク
        </span>
        <nav className="hidden md:flex items-center gap-6 text-sm font-bold text-white">
          <a href="#service" className="hover:text-[#FFE100] transition-colors">サービス内容</a>
          <a href="#pricing" className="hover:text-[#FFE100] transition-colors">料金</a>
          <a href="#flow" className="hover:text-[#FFE100] transition-colors">参加の流れ</a>
          <a href="#faq" className="hover:text-[#FFE100] transition-colors">FAQ</a>
        </nav>
        <button
          onClick={onCTAClick}
          className="font-black text-sm px-4 py-2 bg-[#FFE100] text-black border-2 border-black shadow-[3px_3px_0_#FFE100] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-100"
        >
          無料セミナーに申し込む
        </button>
      </div>
    </header>
  );
}

// ─── Hero ──────────────────────────────────────────────────────
function Hero({ onCTAClick }: { onCTAClick: () => void }) {
  return (
    <section className="bg-[#FFE100] pt-14">
      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <Tag color="black">DAAAMO × YMO PRODUCE</Tag>
        <h1 className="mt-6 text-5xl md:text-8xl font-black tracking-tight leading-tight text-black">
          広告ではなく、<br />
          <span
            className="text-[#FF0090]"
            style={{ WebkitTextStroke: '3px black' }}
          >
            企画で選ばれる
          </span><br />
          企業へ。
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-bold text-black leading-relaxed">
          テレビ業界出身のメディアマンが本気で設計する<br />
          <span className="bg-black text-[#FFE100] px-2">戦略的メディア露出支援コミュニティ</span>
        </p>
        <p className="mt-4 text-base font-bold text-black/70 max-w-2xl mx-auto">
          お金を払って「載せる」のではなく、企画力と人脈で「取り上げられる」確率を最大化します。
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton onClick={onCTAClick}>
            ▶ 第0回無料セミナーに申し込む（先着100社）
          </CTAButton>
          <a
            href="#service"
            className="inline-block font-black text-lg px-8 py-4 border-4 border-black bg-white text-black shadow-[6px_6px_0_#000] hover:shadow-[2px_2px_0_#000] hover:translate-x-1 hover:translate-y-1 transition-all duration-100"
          >
            詳細を見る
          </a>
        </div>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Problem ───────────────────────────────────────────────────
function Problem() {
  return (
    <section className="bg-[#FF0090]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <Tag color="yellow">PROBLEM</Tag>
          <BoldHeading className="mt-4">なぜ今、<br />戦略的メディア露出が<br />必要なのか</BoldHeading>
        </div>
        <div className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-8">
          <p className="text-lg font-bold text-black leading-relaxed mb-4">
            多くの経営者が広告費を投じても、露出が一過性で終わってしまうことに課題を感じています。
          </p>
          <p className="text-lg font-bold text-black leading-relaxed">
            本当に欲しいのは「選ばれる企業」としての継続的な権威性と信頼。<br />
            上場、資金調達、採用、取引先拡大——<br />
            <span className="bg-[#FFE100] px-1">「ただ載せる」ではなく「企画で取り上げられる」方法を知っていますか？</span>
          </p>
        </div>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Solution ──────────────────────────────────────────────────
function Solution() {
  return (
    <section id="service" className="bg-[#00CFFF]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <Tag color="black">SOLUTION</Tag>
          <BoldHeading className="mt-4">メディアマンバンク<br />とは</BoldHeading>
        </div>
        <div className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-8 mb-6">
          <p className="text-lg font-bold text-black leading-relaxed mb-4">
            テレビ放送作家・メディア関係者を中心とした<br />
            <span className="text-[#FF0090]">「企業のための戦略的メディア露出支援コミュニティ」</span>です。
          </p>
          <p className="text-base font-bold text-black/80 leading-relaxed">
            単なる広告代理店とは全く異なり、テレビの企画・キャスティング構造を熟知したプロフェッショナルが、
            企業ごとに最適な「露出ストーリー」を設計・伴走します。
          </p>
        </div>
        <div className="bg-black text-[#FFE100] border-4 border-black p-6 text-center">
          <p className="font-black text-lg">※ 出演を保証するものではありません</p>
          <p className="font-black text-xl mt-2">「出演される側になる確率を最大化する設計」を提供します</p>
        </div>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Strengths ─────────────────────────────────────────────────
const STRENGTHS = [
  { title: 'テレビ出身者の実践ノウハウ', desc: '放送作家がテレビの裏側（企画立案・キャスティング）を公開', icon: '📺' },
  { title: '企業ごとの露出ストーリー設計', desc: '単発ではなく、集客後の保持・関係構築まで伴走', icon: '🎯' },
  { title: 'DAAAMOのメディアマンネットワーク', desc: '300名超のテレビ・広告・Webのトッププロフェッショナルと連携', icon: '🌐' },
  { title: '顧問契約による個別支援', desc: '希望者にはメディアマンが直接伴走するプレミアムサポート', icon: '🤝' },
];

function Strengths() {
  return (
    <section className="bg-[#FFE100]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Tag color="black">STRENGTHS</Tag>
          <h2 className="mt-4 text-4xl md:text-6xl font-black text-black tracking-tight">
            メディアマンバンクの強み
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STRENGTHS.map((s, i) => (
            <div key={i} className="bg-white border-4 border-black shadow-[6px_6px_0_#000] p-6 hover:-translate-y-1 transition-transform duration-200">
              <div className="text-5xl mb-4">{s.icon}</div>
              <h3 className="text-lg font-black text-black mb-3 leading-tight">{s.title}</h3>
              <p className="text-sm font-bold text-black/70 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Services ──────────────────────────────────────────────────
const SERVICES = [
  { num: '01', title: '月例セミナー', desc: '都内にて毎月開催。テレビ露出の仕組み／企画の作り方／出演戦略をメディアマンが直接解説（2時間程度）', color: 'bg-[#FFE100]' },
  { num: '02', title: 'メンバー制度（審査制）', desc: 'セミナー参加後、希望者のみ。メディアマンとの直接連携・個別相談が可能になります。', color: 'bg-[#FF0090] text-white' },
  { num: '03', title: '個別支援（顧問契約）', desc: '企業ごとの露出戦略設計。企画構築／PR導線設計／メディア対応支援まで一貫してサポートします。', color: 'bg-[#00CFFF]' },
];

function Services() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Tag color="pink">SERVICES</Tag>
          <h2 className="mt-4 text-4xl md:text-6xl font-black text-black tracking-tight">
            提供する3つのサービス
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-4 border-black">
          {SERVICES.map((s, i) => (
            <div key={i} className={cn('p-8 border-b-4 md:border-b-0 md:border-r-4 border-black last:border-0', s.color)}>
              <span className="text-6xl font-black opacity-30 leading-none block mb-4">{s.num}</span>
              <h3 className="text-2xl font-black text-black mb-4 leading-tight">{s.title}</h3>
              <p className="text-sm font-bold leading-relaxed opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Target ────────────────────────────────────────────────────
const TARGET_LIST = [
  '広告ではなく「信頼性・権威性」を本気で高めたい',
  '会社の知名度を一気に引き上げたい',
  '上場・売却・資金調達を見据えている',
  '自社のブランド価値を根本から引き上げたい',
  '年商1億円〜50億円規模で成長意欲のある経営者・役員',
];

function Target() {
  return (
    <section className="bg-[#FF0090]">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Tag color="yellow">TARGET</Tag>
          <BoldHeading className="mt-4">こんな経営者様に<br />おすすめです</BoldHeading>
        </div>
        <div className="space-y-3">
          {TARGET_LIST.map((item, i) => (
            <div key={i} className="bg-white border-4 border-black shadow-[4px_4px_0_#000] px-6 py-4 flex items-center gap-4">
              <span className="text-2xl font-black text-[#FF0090] flex-shrink-0">✓</span>
              <p className="font-black text-black text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Flow ──────────────────────────────────────────────────────
const FLOW_STEPS = [
  { step: '01', title: 'セミナー参加', desc: '第0回は無料。まずは内容を体感してください。' },
  { step: '02', title: '個別相談', desc: 'セミナー後、希望者に個別のヒアリングを実施します。' },
  { step: '03', title: 'メンバー参加', desc: '審査制・NFT 100万円。本気の経営者のみのコミュニティ。' },
  { step: '04', title: '個別支援スタート', desc: '顧問契約により、専任のメディアマンが伴走します。' },
];

function Flow() {
  return (
    <section id="flow" className="bg-[#00CFFF]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Tag color="black">FLOW</Tag>
          <BoldHeading className="mt-4">参加までの流れ</BoldHeading>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {FLOW_STEPS.map((f, i) => (
            <div key={i} className="relative">
              <div className="bg-white border-4 border-black shadow-[6px_6px_0_#000] p-6 text-center h-full">
                <div className="w-16 h-16 bg-black text-[#FFE100] font-black text-2xl flex items-center justify-center mx-auto mb-4 border-4 border-black">
                  {f.step}
                </div>
                <h3 className="font-black text-xl text-black mb-2">{f.title}</h3>
                <p className="text-sm font-bold text-black/70 leading-relaxed">{f.desc}</p>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-3 z-10 w-6 h-6 bg-black text-white font-black text-xs items-center justify-center">▶</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────────
function Pricing() {
  return (
    <section id="pricing" className="bg-[#FFE100]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Tag color="black">PRICE</Tag>
          <h2 className="mt-4 text-4xl md:text-6xl font-black text-black tracking-tight">料金体系</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { label: 'セミナー会員', price: '33,000円〜', sub: '月額（サブスク）', note: 'または 55,000円/月', bg: 'bg-white' },
            { label: 'メンバー参加費', price: '1,000,000円', sub: 'NFT・審査制', note: 'コミュニティへのフル参加', bg: 'bg-black text-white' },
            { label: '顧問契約', price: '個別見積もり', sub: '個別支援プラン', note: '要ご相談', bg: 'bg-[#FF0090]' },
          ].map((p, i) => (
            <div key={i} className={cn('border-4 border-black shadow-[6px_6px_0_#000] p-8 text-center', p.bg)}>
              <p className={cn('text-sm font-black mb-4 tracking-wider', i === 1 ? 'text-[#FFE100]' : 'text-black')}>{p.label}</p>
              <p className={cn('text-3xl font-black mb-2', i === 1 ? 'text-white' : 'text-black')}>{p.price}</p>
              <p className={cn('text-sm font-bold mb-1', i === 1 ? 'text-white/70' : 'text-black/70')}>{p.sub}</p>
              <p className={cn('text-xs font-bold', i === 1 ? 'text-white/50' : 'text-black/50')}>{p.note}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center font-bold text-black/70 text-sm border-4 border-black bg-white p-4">
          ※ 本サービスは「出演を保証するもの」ではありません。<br />
          「出演される側になる確率を最大化する設計」を提供します。
        </p>
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── FAQ ───────────────────────────────────────────────────────
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
    <section id="faq" className="bg-white">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <Tag color="cyan">FAQ</Tag>
          <h2 className="mt-4 text-4xl md:text-6xl font-black text-black tracking-tight">よくある質問</h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="border-4 border-black shadow-[4px_4px_0_#000]">
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 bg-[#FFE100] hover:bg-[#FFD000] transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-black text-black text-base">{f.q}</span>
                <span className="font-black text-2xl text-black flex-shrink-0">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="px-6 py-4 bg-white font-bold text-black/80 leading-relaxed text-sm border-t-4 border-black">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FilmStrip dark />
    </section>
  );
}

// ─── Contact Form ───────────────────────────────────────────────
function ContactForm({ formRef }: { formRef: RefObject<HTMLDivElement | null> }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      ref={formRef as RefObject<HTMLElement>}
      className="bg-[#FF0090]"
    >
      <div className="max-w-2xl mx-auto px-6 py-16 text-center">
        <Tag color="yellow">ENTRY</Tag>
        <BoldHeading className="mt-4 mb-2">
          今すぐ第一歩を<br />踏み出してください
        </BoldHeading>
        <p className="font-black text-white text-xl mb-10 mt-4">
          第0回無料セミナー ／ 6月開催予定 ／ 先着100社
        </p>

        {submitted ? (
          <div className="bg-white border-4 border-black shadow-[8px_8px_0_#000] p-10">
            <div className="text-6xl mb-4">🎉</div>
            <p className="font-black text-2xl text-black mb-2">申し込みありがとうございます。</p>
            <p className="font-bold text-black/70">追ってご連絡いたします。</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3 text-left">
            {[
              { name: 'name', label: '氏名', type: 'text', required: true },
              { name: 'company', label: '会社名', type: 'text', required: true },
              { name: 'position', label: '役職', type: 'text', required: true },
              { name: 'email', label: 'メールアドレス', type: 'email', required: true },
              { name: 'phone', label: '電話番号', type: 'tel', required: true },
              { name: 'preferred_date', label: '希望参加日（任意）', type: 'text', required: false },
            ].map((field) => (
              <div key={field.name}>
                <label className="block font-black text-white text-sm mb-1">
                  {field.label}
                  {field.required && <span className="text-[#FFE100] ml-1">*</span>}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  required={field.required}
                  className="w-full px-4 py-3 border-4 border-black font-bold text-black bg-white focus:outline-none focus:border-[#FFE100]"
                />
              </div>
            ))}
            <div>
              <label className="block font-black text-white text-sm mb-1">メッセージ（任意）</label>
              <textarea
                name="message"
                rows={4}
                className="w-full px-4 py-3 border-4 border-black font-bold text-black bg-white focus:outline-none focus:border-[#FFE100] resize-none"
              />
            </div>
            <CTAButton className="w-full text-center justify-center">
              ▶ 無料セミナーに申し込む
            </CTAButton>
          </form>
        )}
      </div>
      <FilmStrip />
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────
function LPFooter() {
  return (
    <footer className="bg-black border-t-4 border-[#FFE100] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <p className="font-black text-xl text-[#FFE100]">メディアマンバンク</p>
          <p className="font-bold text-white/50 text-sm mt-1">DAAAMO × YMO Yield Media Online</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold">
          <a href="/privacy" className="text-white/50 hover:text-[#FFE100] transition-colors">プライバシーポリシー</a>
          <a href="/legal" className="text-white/50 hover:text-[#FFE100] transition-colors">特定商取引法に基づく表記</a>
          <a href="/contact" className="text-white/50 hover:text-[#FFE100] transition-colors">お問い合わせ</a>
        </div>
      </div>
      <p className="text-center text-white/30 text-xs font-bold mt-6">
        © 2024 YMO Yield Media Online. All rights reserved.
      </p>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function MediamantBankPage() {
  const formRef = useRef<HTMLDivElement>(null);
  function scrollToForm() {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="font-sans">
      <Header onCTAClick={scrollToForm} />
      <div className="pt-14">
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
