'use client';

import { useState, ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
  gradient?: string;
}

interface NavProps {
  logo: ReactNode;
  links: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
}

// Subtle YMO-inspired dark gradients for each nav band
const DEFAULT_GRADIENTS = [
  'linear-gradient(160deg, #0A0A0A 0%, #221A00 100%)',
  'linear-gradient(160deg, #0A0A0A 0%, #001622 100%)',
  'linear-gradient(160deg, #0A0A0A 0%, #160022 100%)',
  'linear-gradient(160deg, #0A0A0A 0%, #001A0A 100%)',
  'linear-gradient(160deg, #0A0A0A 0%, #220A00 100%)',
];

export function Nav({ logo, links, ctaLabel, ctaHref }: NavProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* ─── Mobile top bar ─── */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-5 bg-brand-black border-b border-brand-border">
        <Link href="/" className="font-mono font-bold text-brand-white tracking-[0.2em] text-sm">
          {logo}
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="メニュー"
          className="flex flex-col justify-center gap-[5px] w-8 h-8"
        >
          <span
            className={`block h-px bg-brand-white transition-all duration-300 ${
              open ? 'w-6 rotate-45 translate-y-[7px]' : 'w-6'
            }`}
          />
          <span
            className={`block h-px bg-brand-white transition-all duration-300 ${
              open ? 'opacity-0 w-0' : 'w-4'
            }`}
          />
          <span
            className={`block h-px bg-brand-white transition-all duration-300 ${
              open ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-6'
            }`}
          />
        </button>
      </div>

      {/* ─── Sidebar ─── */}
      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-40 w-64 flex flex-col
          transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${open ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo */}
        <div className="h-16 shrink-0 flex items-center px-6 bg-brand-black border-b border-brand-border">
          <Link
            href="/"
            className="font-mono font-bold text-brand-white tracking-[0.2em] text-sm hover:text-brand-yellow transition-colors"
            onClick={() => setOpen(false)}
          >
            {logo}
          </Link>
        </div>

        {/* Nav bands */}
        <nav className="flex flex-col flex-1 overflow-hidden">
          {links.map((link, i) => {
            const active = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            const gradient = link.gradient ?? DEFAULT_GRADIENTS[i % DEFAULT_GRADIENTS.length];

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`
                  flex-1 flex items-start px-6 pt-4 border-b border-brand-border
                  transition-all duration-300 group
                  ${active
                    ? 'bg-brand-yellow text-brand-black'
                    : 'text-brand-white hover:text-brand-yellow'}
                `}
                style={active ? {} : { background: gradient }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
                  {link.label}
                </span>
                {active && (
                  <span className="ml-auto font-mono text-[10px] text-brand-black/60">→</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        {ctaLabel && ctaHref && (
          <div className="shrink-0 p-5 bg-brand-black border-t border-brand-border">
            <Link
              href={ctaHref}
              onClick={() => setOpen(false)}
              className="block text-center bg-brand-yellow text-brand-black font-bold py-3 text-xs tracking-[0.2em] hover:bg-brand-white transition-colors"
            >
              {ctaLabel}
            </Link>
          </div>
        )}
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-brand-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
