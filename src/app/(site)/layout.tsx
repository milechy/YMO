import { Nav } from '@ui/Nav';
import { Footer } from '@ui/Footer';

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

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav
        logo={logo}
        links={navLinks}
        ctaLabel="お問い合わせ"
        ctaHref="/contact"
      />
      <div className="md:ml-64">
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
    </>
  );
}
