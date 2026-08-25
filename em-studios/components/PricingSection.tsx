'use client';

import { pricing } from '../data/pricing';

export default function PricingSection() {
  return (
    <section id="pricing" className="container mx-auto px-8 py-32">
      <div className="max-w-3xl">
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-fuchsia-300">INVESTMENT PLANS</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Creative support that scales with your ambition.</h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">Choose the level of strategy, volume and creative partnership your brand needs right now.</p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {pricing.map((tier) => (
          <article key={tier.title} className={`flex flex-col rounded-[28px] border p-7 shadow-[0_30px_90px_rgba(0,0,0,0.2)] sm:p-9 ${tier.featured ? 'border-fuchsia-300/60 bg-fuchsia-300/[.08]' : 'border-white/10 bg-black/50'}`}>
            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-7">
              <div>
                <p className="text-sm font-semibold tracking-[0.3em] text-fuchsia-300">{tier.number} —</p>
                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{tier.title}</h3>
              </div>
              {tier.featured && <span className="rounded-full border border-fuchsia-200/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-fuchsia-200">Most popular</span>}
            </div>
            {tier.price && <p className="mt-7 text-3xl font-semibold tracking-tight text-white">{tier.price}</p>}
            <p className="mt-5 min-h-14 text-sm leading-6 text-zinc-400">{tier.subtitle}</p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <PlanList label="Strategy" items={tier.strategy} />
              <PlanList label="Deliverables" items={tier.deliverables} />
            </div>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Total creative output</p>
              <p className="mt-2 font-medium text-white">{tier.totalOutput}</p>
              <p className="mt-5 text-sm leading-6 text-zinc-400"><span className="text-zinc-500">Best for: </span>{tier.idealFor}</p>
            </div>
            <a href="#contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-[0.16em] text-black transition hover:bg-fuchsia-200">START A CONVERSATION</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlanList({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">{label}</h4>
      <ul className="mt-4 space-y-3 text-sm leading-5 text-zinc-300">
        {items.map((item) => <li key={item} className="flex items-start gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300" />{item}</li>)}
      </ul>
    </div>
  );
}
