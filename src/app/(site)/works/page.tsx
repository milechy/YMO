import type { Metadata } from 'next';
import { AnimatedSection } from '@ui/AnimatedSection';
import { CTASection } from '@ui/CTASection';
import { GRADIENTS } from '@/lib/gradients';

export const metadata: Metadata = {
  title: '実績・事例',
  description: '300社以上の支援実績。多様な業種でのキャンペーン成果をご紹介します。',
};

const cases = [
  {
    id: '01', category: 'EC / 小売', client: '株式会社○○ サプリメント', service: '広告運用 + クリエイティブ制作',
    challenge: '新規顧客獲得コストが高く、LTVが見合わない状態が続いていた。',
    solution: '購買意向の高いオーディエンスへ絞り込み、動画クリエイティブ3パターンでA/Bテストを実施。',
    results: [{ label: 'ROAS', before: '180%', after: '580%' }, { label: 'CPA', before: '¥8,200', after: '¥3,800' }, { label: '月間売上', before: '¥2.4M', after: '¥9.1M' }],
    gradient: GRADIENTS[3],
  },
  {
    id: '02', category: 'SaaS / BtoB', client: '△△株式会社 HR Tech', service: 'SEO / コンテンツ + 広告運用',
    challenge: '競合が多い市場でオーガニック流入が少なく、リード獲得コストが高止まりしていた。',
    solution: 'キーワード戦略を再設計し、検索意図に合った記事を月10本制作。リターゲティング広告と連動。',
    results: [{ label: '月間リード数', before: '43件', after: '189件' }, { label: 'オーガニック流入', before: '800PV', after: '5,200PV' }, { label: '商談化率', before: '12%', after: '31%' }],
    gradient: GRADIENTS[1],
  },
  {
    id: '03', category: 'アパレル / D2C', client: '□□ブランド', service: 'SNSマーケティング + クリエイティブ制作',
    challenge: 'Instagramフォロワーが2,000人台で停滞。エンゲージメント率も低い。',
    solution: 'ブランドのトーン&マナーを再定義し、世界観統一のフィード設計と週3本のリール制作を実施。',
    results: [{ label: 'フォロワー数', before: '2,400', after: '12,100' }, { label: 'エンゲージメント率', before: '0.8%', after: '4.2%' }, { label: 'SNS経由売上', before: '¥180K', after: '¥1.2M' }],
    gradient: GRADIENTS[2],
  },
  {
    id: '04', category: '不動産', client: '◇◇不動産株式会社', service: 'Web制作 + 広告運用',
    challenge: '旧式のWebサイトで問い合わせがほぼゼロ。Web経由での集客に課題があった。',
    solution: 'CVR設計を起点にサイトをフルリニューアル。物件検索導線を改善し、エリア別LP 5本を新規制作。',
    results: [{ label: '月間問い合わせ', before: '3件', after: '47件' }, { label: 'Web経由成約率', before: '2%', after: '18%' }, { label: '広告CPC', before: '¥920', after: '¥340' }],
    gradient: GRADIENTS[0],
  },
  {
    id: '05', category: '医療 / クリニック', client: '★★クリニック（都内3院）', service: '広告運用 + LP制作',
    challenge: '競合クリニックの増加で新患獲得が鈍化。広告費の増加に成果が伴っていなかった。',
    solution: '診療科ごとにターゲット患者を分類し、悩み別LP 8本を制作。訴求軸を「安心・専門性」に切り替え。',
    results: [{ label: '新患獲得CPA', before: '¥12,400', after: '¥5,800' }, { label: '月間新患数', before: '28名', after: '71名' }, { label: 'LP CVR', before: '1.2%', after: '4.8%' }],
    gradient: GRADIENTS[3],
  },
  {
    id: '06', category: '教育 / オンライン', client: '☆☆オンラインスクール', service: 'SNS広告 + 動画クリエイティブ制作',
    challenge: 'TikTok・YouTube Shortsの再生数・申込数ともに伸び悩んでいた。',
    solution: '講師の個性を活かしたシリーズ動画の企画・制作。冒頭3秒のフックを徹底検証しCTAへの導線を改善。',
    results: [{ label: '月間申込数', before: '89件', after: '412件' }, { label: '動画再生率', before: '18%', after: '64%' }, { label: '動画経由入会率', before: '5%', after: '22%' }],
    gradient: GRADIENTS[1],
  },
];

export default function WorksPage() {
  return (
    <>
      {/* ─── Page Header ─── */}
      <section className="bg-brand-cream px-8 md:px-10 pt-14 pb-12 border-b border-brand-black/10">
        <AnimatedSection>
          <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray mb-6 uppercase">Works</p>
          <h1 className="font-black text-brand-black leading-[0.95]" style={{ fontSize: 'clamp(40px, 7vw, 96px)' }}>
            数字が、<br />語る。
          </h1>
          <p className="mt-5 text-brand-gray text-sm leading-relaxed max-w-lg">
            300社以上の支援実績。業種・規模を問わず、データと創造性で成果を積み上げてきました。
          </p>
        </AnimatedSection>
      </section>

      {/* ─── Cases ─── */}
      <section className="bg-brand-cream px-8 md:px-10 py-16">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-12 border-b border-brand-black/10 pb-6">
            <p className="font-mono text-[10px] tracking-[0.4em] text-brand-gray uppercase">Case Studies</p>
          </div>
        </AnimatedSection>

        <div className="space-y-px bg-brand-black/10">
          {cases.map((c, i) => (
            <AnimatedSection key={c.id} delay={Math.min(i * 50, 200)}>
              <div style={{ background: c.gradient }}>
                <div className="p-8 md:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <span className="font-mono text-brand-black/50 text-xs tracking-widest">{c.id}</span>
                    <span className="font-mono text-[10px] border border-brand-black/20 text-brand-black/60 px-3 py-1 tracking-wider">{c.category}</span>
                    <span className="font-mono text-[10px] bg-brand-black text-brand-yellow px-3 py-1 tracking-wider">{c.service}</span>
                  </div>

                  <h3
                    className="font-black text-brand-black mb-8 leading-tight"
                    style={{ fontSize: 'clamp(18px, 2.5vw, 32px)' }}
                  >
                    {c.client}
                  </h3>

                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <p className="font-mono text-[10px] tracking-widest text-brand-black/50 mb-3 uppercase">Challenge</p>
                      <p className="text-brand-black/80 text-sm leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-widest text-brand-black/50 mb-3 uppercase">Solution</p>
                      <p className="text-brand-black/80 text-sm leading-relaxed">{c.solution}</p>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] tracking-widest text-brand-black/50 mb-3 uppercase">Results</p>
                      <div className="space-y-2.5">
                        {c.results.map((r) => (
                          <div key={r.label} className="flex items-center justify-between">
                            <span className="text-brand-black/60 text-xs">{r.label}</span>
                            <div className="flex items-center gap-2 font-mono text-xs">
                              <span className="text-brand-black/40 line-through">{r.before}</span>
                              <span className="text-brand-black/40">→</span>
                              <span className="text-brand-black font-bold">{r.after}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTASection headline="貴社でも成果を出しませんか" subheadline="初回相談は無料。現状の課題をお聞かせください。" ctaLabel="無料相談を申し込む" ctaHref="/contact" theme="yellow" />
    </>
  );
}
