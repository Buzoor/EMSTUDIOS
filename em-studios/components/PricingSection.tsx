'use client';

import { pricing, customProposal } from '../data/pricing';

const accentStyles: Record<string, string> = {
  magenta: 'from-[#b6009a] to-[#d80f78]',
  purple: 'from-[#6e0fa2] to-[#b43fcb]',
  crimson: 'from-[#e0282f] to-[#a50f34]',
};

export default function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-8 py-32">
      <div className="max-w-4xl">
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">CREATIVE THAT FITS THE AMBITION.</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          Pricing built for thoughtful brands.
        </h2>
      </div>

      <div className="mt-16 grid gap-8 xl:grid-cols-3">
        {pricing.map((tier) => (
          <div key={tier.title} className="rounded-[32px] border border-white/10 bg-black/50 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.2)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">{tier.title}</p>
                <h3 className="mt-4 text-3xl font-semibold text-white">{tier.price}</h3>
              </div>
              <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${accentStyles[tier.accent]}`} />
            </div>
            <p className="mt-8 text-zinc-400 leading-8">{tier.description}</p>
            <div className="mt-8 space-y-3 text-zinc-300">
              {tier.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/80" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-sm uppercase tracking-[0.3em] text-zinc-500">Timeline</div>
            <p className="mt-2 text-zinc-300">{tier.timeline}</p>
            <div className="mt-6 text-sm uppercase tracking-[0.3em] text-zinc-500">Ideal for</div>
            <p className="mt-2 text-zinc-300">{tier.idealFor}</p>
            <button className="mt-8 w-full rounded-full bg-gradient-to-r from-[#b6009a] via-[#6e0fa2] to-[#e0282f] px-6 py-4 text-sm font-semibold text-white shadow-lg transition hover:brightness-110">
              {tier.cta}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-14 rounded-[32px] border border-white/10 bg-black/50 p-10 text-center shadow-[0_30px_90px_rgba(0,0,0,0.18)]">
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">{customProposal.label}</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">{customProposal.tagline}</h3>
        <button className="mt-8 rounded-full bg-white px-10 py-4 text-sm font-semibold text-black transition hover:brightness-95">
          {customProposal.cta}
        </button>
      </div>
    </section>
  );
}
