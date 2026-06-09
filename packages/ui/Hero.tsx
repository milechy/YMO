import { ReactNode } from 'react';
import Link from 'next/link';

interface HeroProps {
  eyebrow?: string;
  headline: ReactNode;
  subheadline?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  children?: ReactNode;
  /** 'full' = min-h-screen black hero (home). 'compact' = inner page header. */
  size?: 'full' | 'compact';
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  children,
  size = 'compact',
}: HeroProps) {
  if (size === 'full') {
    // Full-screen black hero for home page (kept for compatibility)
    return (
      <section className="relative min-h-screen flex flex-col justify-center bg-brand-black overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,225,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,225,0,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="relative max-w-full px-10 py-28">
          {eyebrow && (
            <p className="font-mono text-brand-yellow text-[10px] tracking-[0.4em] uppercase mb-8">
              {eyebrow}
            </p>
          )}
          <h1 className="font-black text-brand-white leading-[1.0] mb-8 text-5xl md:text-7xl lg:text-8xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-brand-gray text-base max-w-xl mb-12 leading-relaxed">
              {subheadline}
            </p>
          )}
          {(ctaLabel || secondaryCtaLabel) && (
            <div className="flex flex-wrap gap-4">
              {ctaLabel && ctaHref && (
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black font-bold px-8 py-4 hover:bg-brand-white transition-colors text-sm tracking-wider"
                >
                  {ctaLabel} →
                </Link>
              )}
              {secondaryCtaLabel && secondaryCtaHref && (
                <Link
                  href={secondaryCtaHref}
                  className="inline-flex items-center gap-3 border border-brand-border text-brand-white font-bold px-8 py-4 hover:border-brand-yellow hover:text-brand-yellow transition-colors text-sm tracking-wider"
                >
                  {secondaryCtaLabel}
                </Link>
              )}
            </div>
          )}
          {children}
        </div>
      </section>
    );
  }

  // Compact inner-page header (cream bg, dark text)
  return (
    <section className="bg-brand-black border-b border-brand-border px-10 pt-16 pb-14">
      {eyebrow && (
        <p className="font-mono text-brand-yellow text-[10px] tracking-[0.4em] uppercase mb-6">
          {eyebrow}
        </p>
      )}
      <h1 className="font-black text-brand-white leading-tight mb-4 text-4xl md:text-5xl lg:text-6xl">
        {headline}
      </h1>
      {subheadline && (
        <p className="text-brand-gray text-base max-w-xl leading-relaxed mt-4">
          {subheadline}
        </p>
      )}
      {(ctaLabel || secondaryCtaLabel) && (
        <div className="flex flex-wrap gap-4 mt-8">
          {ctaLabel && ctaHref && (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-3 bg-brand-yellow text-brand-black font-bold px-8 py-3 hover:bg-brand-white transition-colors text-sm tracking-wider"
            >
              {ctaLabel} →
            </Link>
          )}
          {secondaryCtaLabel && secondaryCtaHref && (
            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center gap-3 border border-brand-border text-brand-white font-bold px-8 py-3 hover:border-brand-yellow hover:text-brand-yellow transition-colors text-sm tracking-wider"
            >
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
