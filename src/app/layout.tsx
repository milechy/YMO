import type { Metadata } from 'next';
import { Noto_Sans_JP, IBM_Plex_Mono, VT323 } from 'next/font/google';
import './globals.css';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${ibmPlexMono.variable} ${vt323.variable}`}
    >
      <body className="font-sans bg-brand-cream">
        {children}
      </body>
    </html>
  );
}
