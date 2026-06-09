import type { Metadata } from 'next';
import { Noto_Sans_JP, IBM_Plex_Mono, VT323 } from 'next/font/google';
import './globals.css';
import { Nav } from '@ui/Nav';
import { Footer } from '@ui/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

const vt323 = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-vt323',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'YMO Yield Media Online | 広告代理店',
    template: '%s | YMO Yield Media Online',
  },
  description:
    '戦略から制作まで一貫対応の広告代理店。広告運用・クリエイティブ制作・Web制作・SNSマーケティング・SEOで貴社のビジネスを加速します。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'YMO Yield Media Online',
  },
};

const navLinks = [
  { label: 'サービス', href: '/services' },
  { label: '実績', href: '/works' },
  { label: '会社概要', href: '/about' },
  { label: 'ニュース', href: '/news' },
  { label: '採用', href: '/recruit' },
];

const footerSections = [
  {
    title: 'Services',
    links: [
      { label: '広告運用', href: '/services#ad-management' },
      { label: 'クリエイティブ制作', href: '/services#creative' },
      { label: 'Web制作', href: '/services#web' },
      { label: 'SNSマーケティング', href: '/services#sns' },
      { label: 'SEO / コンテンツ', href: '/services#seo' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: '会社概要', href: '/about' },
      { label: '実績・事例', href: '/works' },
      { label: 'ニュース', href: '/news' },
      { label: '採用情報', href: '/recruit' },
      { label: 'お問い合わせ', href: '/contact' },
    ],
  },
];

const logo = (
  <span>
    <span className="text-brand-yellow">YMO</span>
    {' '}
    <span className="text-xs tracking-wider opacity-70">Yield Media Online</span>
  </span>
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${ibmPlexMono.variable} ${vt323.variable}`}
    >
      <body className="font-sans bg-brand-cream">
        {/* Sidebar navigation */}
        <Nav
          logo={logo}
          links={navLinks}
          ctaLabel="お問い合わせ"
          ctaHref="/contact"
        />

        {/* Main content — offset right of sidebar on md+ */}
        <div className="md:ml-64">
          {/* Mobile top-bar spacer */}
          <div className="h-14 md:h-0" />

          <main>{children}</main>

          <Footer
            logo={logo}
            description="戦略から制作まで一貫対応の広告代理店。貴社のビジネスを、広告の力で次のステージへ。"
            sections={footerSections}
            companyInfo={{
              name: 'YMO Yield Media Online',
              address: '〒XXX-XXXX 東京都[住所]',
              phone: '03-XXXX-XXXX',
              email: 'info@example.com',
            }}
            copyright="© 2024 YMO Yield Media Online. All rights reserved."
          />
        </div>
      </body>
    </html>
  );
}
