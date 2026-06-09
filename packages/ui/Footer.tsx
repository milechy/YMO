import Link from 'next/link';
import { ReactNode } from 'react';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo: ReactNode;
  description: string;
  sections: FooterSection[];
  companyInfo: {
    name: string;
    address: string;
    phone?: string;
    email?: string;
  };
  copyright: string;
}

export function Footer({ logo, description, sections, companyInfo, copyright }: FooterProps) {
  return (
    <footer className="bg-brand-black text-brand-white border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="font-mono font-bold text-lg tracking-[0.2em] mb-4">{logo}</div>
            <p className="text-brand-gray text-sm leading-relaxed mb-6 max-w-xs">{description}</p>
            <div className="text-xs text-brand-gray space-y-1.5">
              <p>{companyInfo.address}</p>
              {companyInfo.phone && <p>TEL: {companyInfo.phone}</p>}
              {companyInfo.email && <p>EMAIL: {companyInfo.email}</p>}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-mono text-[10px] tracking-[0.3em] text-brand-gray mb-5 uppercase">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-brand-white hover:text-brand-yellow transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-brand-gray">{copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-brand-gray hover:text-brand-yellow transition-colors">
              プライバシーポリシー
            </Link>
            <Link href="/legal" className="text-xs text-brand-gray hover:text-brand-yellow transition-colors">
              特定商取引法に基づく表記
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
