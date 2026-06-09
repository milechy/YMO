import type { Metadata } from 'next';
import { AnimatedSection } from '@ui/AnimatedSection';

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'YMO Yield Media Onlineのプライバシーポリシーです。',
};

const sections = [
  {
    title: '1. 個人情報の定義',
    content:
      '「個人情報」とは、個人情報の保護に関する法律（以下「個人情報保護法」）第2条第1項に定める個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別できるもの（他の情報と容易に照合でき、それにより特定の個人を識別できるものを含む）をいいます。',
  },
  {
    title: '2. 個人情報の取得',
    content:
      '当社は、以下の方法により適正に個人情報を取得します。\n・お問い合わせフォームへの入力\n・メール・電話・FAXによるご連絡\n・名刺交換\n・セミナー・イベントへのご参加\n・取引に関連する書類の提出',
  },
  {
    title: '3. 個人情報の利用目的',
    content:
      '当社は、取得した個人情報を以下の目的で利用します。\n・お問い合わせへの対応\n・サービスの提供・請求・支払\n・セミナー・イベント等のご案内\n・ニュースレター・メールマガジンの配信\n・採用活動に関する連絡\n・その他、上記の利用目的に付随する業務',
  },
  {
    title: '4. 個人情報の第三者への提供',
    content:
      '当社は、以下の場合を除き、本人の同意を得ることなく個人情報を第三者に提供しません。\n・法令に基づく場合\n・人の生命、身体または財産の保護のために必要な場合\n・公衆衛生の向上または児童の健全な育成のために特に必要な場合\n・国の機関または地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合',
  },
  {
    title: '5. 個人情報の安全管理',
    content:
      '当社は、個人情報への不正アクセス・紛失・破壊・改ざんおよび漏洩等を防止するため、適切な安全管理措置を講じます。また、個人情報を取り扱う従業員および委託先に対して、適切な監督を行います。',
  },
  {
    title: '6. 個人情報の開示・訂正・削除',
    content:
      'ご本人から個人情報の開示・訂正・削除・利用停止等のご請求があった場合には、法令に従い合理的な範囲で対応します。ご請求の際は、本人確認を行った上で対応いたします。お問い合わせ先までご連絡ください。',
  },
  {
    title: '7. Cookieの使用',
    content:
      '当社のウェブサイトでは、利便性の向上およびアクセス解析のためにCookieを使用する場合があります。Cookieの設定はブラウザにて変更・無効化することができます。なお、Cookieを無効にした場合、一部の機能が正常に動作しない場合があります。',
  },
  {
    title: '8. アクセス解析ツール',
    content:
      '当社のウェブサイトでは、Googleアナリティクスを利用してアクセス状況を解析しています。GoogleアナリティクスはCookieを使用し、個人を特定する情報を含まずにデータを収集します。データの収集・処理についてはGoogleのプライバシーポリシーに従います。',
  },
  {
    title: '9. プライバシーポリシーの変更',
    content:
      '当社は、法令の変更や事業内容の変化に応じて、本ポリシーを変更することがあります。変更後のプライバシーポリシーは、当ウェブサイトに掲載した時点から効力を生じるものとします。',
  },
  {
    title: '10. お問い合わせ',
    content:
      '個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。\n\nYMO Yield Media Online\n〒XXX-XXXX 東京都[住所]\nメール: info@example.com\nTEL: 03-XXXX-XXXX',
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Privacy Policy</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
            プライバシー<br />ポリシー
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            最終更新日: 2024年[月][日]
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Intro ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-16">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Statement</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <p className="text-brand-gray text-sm leading-relaxed max-w-2xl">
            YMO Yield Media Online（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Sections ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pb-20">
        <div className="max-w-3xl">
          {sections.map((s, i) => (
            <AnimatedSection key={s.title} delay={Math.min(i * 30, 150)}>
              <div className="border-t border-brand-black/10 py-10">
                <h2 className="font-black text-brand-black text-lg mb-4">{s.title}</h2>
                <p className="text-brand-gray text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
              </div>
            </AnimatedSection>
          ))}
          <div className="border-t border-brand-black/10 pt-10">
            <AnimatedSection>
              <p className="text-brand-gray text-xs">YMO Yield Media Online</p>
              <p className="text-brand-gray text-xs mt-1">代表取締役 [代表者名]</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
