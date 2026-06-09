import Link from 'next/link';

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  ctaLabel: string;
  ctaHref: string;
  theme?: 'yellow' | 'dark';
}

export function CTASection({
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  theme = 'yellow',
}: CTASectionProps) {
  const isDark = theme === 'dark';

  return (
    <section className={`py-28 ${isDark ? 'bg-brand-black' : 'bg-brand-yellow'}`}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight ${
            isDark ? 'text-brand-white' : 'text-brand-black'
          }`}
        >
          {headline}
        </h2>
        {subheadline && (
          <p
            className={`text-base md:text-lg mb-12 max-w-lg mx-auto leading-relaxed ${
              isDark ? 'text-brand-gray' : 'text-brand-black/70'
            }`}
          >
            {subheadline}
          </p>
        )}
        <Link
          href={ctaHref}
          className={`inline-flex items-center gap-3 font-bold px-10 py-4 text-sm tracking-wider transition-colors duration-200 ${
            isDark
              ? 'bg-brand-yellow text-brand-black hover:bg-brand-white'
              : 'bg-brand-black text-brand-white hover:bg-brand-surface'
          }`}
        >
          {ctaLabel}
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
