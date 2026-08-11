'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Insights', href: '#insights' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Behance', href: '#' },
  { label: 'YouTube', href: '#' },
  { label: 'Email', href: 'mailto:hello@emstudios.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/80 py-16 text-zinc-400">
      <div className="container mx-auto px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="text-3xl font-semibold text-white">EM Studios</div>
            <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-400">CRAFTING STORIES. BUILDING BRANDS.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">Navigation</div>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
                {navItems.map((item) => (
                  <Link key={item.label} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">Connect</div>
              <div className="flex flex-wrap gap-3 text-sm text-zinc-400">
                {socials.map((item) => (
                  <Link key={item.label} href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-zinc-500">
          © {new Date().getFullYear()} EM Studios. Designed and developed to feel cinematic, editorial and memorable.
        </div>
      </div>
    </footer>
  );
}
