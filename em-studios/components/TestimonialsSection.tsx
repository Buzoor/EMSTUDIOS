'use client';

import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';

export default function TestimonialsSection() {
  return (
    <section className="container mx-auto px-8 py-32 bg-black/70 border-t border-white/5">
      <div className="max-w-4xl">
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">CLIENT VOICES</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">The work that moves people is the work clients remember.</h2>
      </div>

      <div className="mt-16 grid gap-8 xl:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-[28px] border border-white/10 bg-black/50 p-8"
          >
            <p className="text-xl leading-9 text-zinc-200">“{item.quote}”</p>
            <div className="mt-8 text-sm text-zinc-400">
              <div className="font-semibold text-white">{item.name}</div>
              <div>{item.company}</div>
              <div className="mt-2 text-zinc-500">{item.project}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
