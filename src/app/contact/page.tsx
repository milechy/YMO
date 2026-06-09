'use client';

import { useState } from 'react';
import { AnimatedSection } from '@ui/AnimatedSection';
import { GRADIENTS } from '@/lib/gradients';

const inquiryTypes = [
  '広告運用について', 'クリエイティブ制作について', 'Web制作について',
  'SNSマーケティングについて', 'SEO / コンテンツについて', 'その他・複数のサービスについて',
];

const flow = [
  { step: '01', title: 'お問い合わせ', desc: 'フォームまたはお電話にてご連絡ください。', gradient: GRADIENTS[0] },
  { step: '02', title: '無料相談', desc: '現状の課題・目標をヒアリング。通常3営業日以内にご返信します。', gradient: GRADIENTS[1] },
  { step: '03', title: 'ご提案・お見積', desc: '課題に最適なプランと費用感をご提案します。', gradient: GRADIENTS[2] },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', inquiryType: '', budget: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: フォーム送信処理を実装
    setSubmitted(true);
  };

  const inputCls = 'w-full bg-brand-cream border border-brand-black/20 text-brand-black px-4 py-3 text-sm focus:outline-none focus:border-brand-black transition-colors placeholder:text-brand-gray/40';
  const selectCls = `${inputCls} appearance-none`;

  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Contact</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
            お問い合わせ
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            初回相談は無料です。まずはお気軽にご連絡ください。通常3営業日以内にご返信いたします。
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Flow ─── */}
      <section className="bg-brand-black px-8 md:px-10 py-16">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-10 border-b border-brand-border pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-yellow uppercase">Process</p>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-px bg-brand-border">
          {flow.map((item, i) => (
            <AnimatedSection key={item.step} delay={i * 100} className="p-8" style={{ background: item.gradient }}>
              <div className="font-display text-brand-black/30 mb-4" style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}>{item.step}</div>
              <h3 className="font-black text-brand-black text-lg mb-2">{item.title}</h3>
              <p className="text-brand-black/70 text-sm leading-relaxed">{item.desc}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ─── Form + Info ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-20">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Get In Touch</p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Contact Info */}
          <AnimatedSection className="md:col-span-1 space-y-8">
            {[
              { label: 'Phone', value: '03-XXXX-XXXX', sub: '平日 10:00 – 18:00' },
              { label: 'Email', value: 'info@example.com', sub: null },
              { label: 'Address', value: '〒XXX-XXXX\n東京都[区市町村]\n[住所]', sub: null },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-mono text-[10px] tracking-widest text-brand-gray mb-2 uppercase">{item.label}</p>
                <p className="text-brand-black text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                {item.sub && <p className="text-brand-gray text-xs mt-1">{item.sub}</p>}
              </div>
            ))}
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection delay={150} direction="left" className="md:col-span-2">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="font-display text-brand-yellow mb-6" style={{ fontSize: '80px' }}>✓</div>
                <h3 className="font-black text-brand-black text-2xl mb-4">お問い合わせを受け付けました</h3>
                <p className="text-brand-gray text-sm leading-relaxed">通常3営業日以内にご返信いたします。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-brand-gray mb-2 uppercase">お名前 <span className="text-brand-black">*</span></label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="山田 太郎" className={inputCls} />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-brand-gray mb-2 uppercase">会社名 <span className="text-brand-black">*</span></label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required placeholder="株式会社○○" className={inputCls} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-brand-gray mb-2 uppercase">メールアドレス <span className="text-brand-black">*</span></label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputCls} />
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-brand-gray mb-2 uppercase">電話番号</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="03-XXXX-XXXX" className={inputCls} />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-brand-gray mb-2 uppercase">お問い合わせ種別 <span className="text-brand-black">*</span></label>
                    <select name="inquiryType" value={form.inquiryType} onChange={handleChange} required className={selectCls}>
                      <option value="">選択してください</option>
                      {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-mono text-[10px] tracking-widest text-brand-gray mb-2 uppercase">月間広告予算</label>
                    <select name="budget" value={form.budget} onChange={handleChange} className={selectCls}>
                      <option value="">選択してください</option>
                      <option>〜30万円</option>
                      <option>30〜100万円</option>
                      <option>100〜300万円</option>
                      <option>300万円以上</option>
                      <option>未定・相談したい</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-widests text-brand-gray mb-2 uppercase">お問い合わせ内容 <span className="text-brand-black">*</span></label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="現状の課題や、ご相談したい内容をご記入ください。" className={`${inputCls} resize-none`} />
                </div>
                <p className="text-brand-gray text-xs leading-relaxed">
                  送信いただいた情報は、お問い合わせへの対応目的にのみ使用します。詳細は<a href="/privacy" className="underline underline-offset-2">プライバシーポリシー</a>をご確認ください。
                </p>
                <button type="submit" className="inline-flex items-center gap-3 bg-brand-black text-brand-white font-bold px-10 py-4 text-sm tracking-wider hover:bg-brand-yellow hover:text-brand-black transition-colors duration-300">
                  送信する →
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
