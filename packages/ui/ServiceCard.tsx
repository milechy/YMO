import { ReactNode } from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href?: string;
  icon?: ReactNode;
}

export function ServiceCard({ number, title, description, href, icon }: ServiceCardProps) {
  const inner = (
    <div className="group border border-brand-border p-8 hover:border-brand-yellow transition-all duration-300 h-full">
      <div className="flex items-start justify-between mb-6">
        <span className="font-mono text-brand-yellow text-xs tracking-[0.3em]">{number}</span>
        {icon && (
          <span className="text-brand-gray group-hover:text-brand-yellow transition-colors duration-300">
            {icon}
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-brand-white mb-3 group-hover:text-brand-yellow transition-colors duration-300">
        {title}
      </h3>
      <p className="text-brand-gray text-sm leading-relaxed">{description}</p>
      {href && (
        <div className="mt-6 flex items-center gap-2 text-brand-yellow text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          詳しく見る <span aria-hidden>→</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}
