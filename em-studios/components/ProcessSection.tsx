'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: 'DISCOVER',
    title: 'Understand the business, audience, market and ambition.',
  },
  {
    step: 'STRATEGIZE',
    title: 'Define positioning, messaging and creative direction.',
  },
  {
    step: 'CREATE',
    title: 'Turn strategy into visual systems, stories and experiences.',
  },
  {
    step: 'LAUNCH',
    title: 'Bring the brand into the world.',
  },
  {
    step: 'GROW',
    title: 'Optimize, evolve and scale.',
  },
];

export default function ProcessSection() {
  return (
    <section className="container mx-auto px-8 py-32">
      <div className="max-w-4xl">
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">OUR PROCESS</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          A disciplined process for ambitious brands.
        </h2>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-5">
        {steps.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-[28px] border border-white/10 bg-black/50 p-8"
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">0{index + 1}</div>
            <h3 className="text-2xl font-semibold text-white">{item.step}</h3>
            <p className="mt-4 text-zinc-400 leading-7">{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
