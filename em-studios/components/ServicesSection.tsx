'use client';

import { motion } from 'framer-motion';
import { services } from '../data/services';

const accentStyles: Record<string, string> = {
  magenta: 'bg-gradient-to-r from-[#b6009a] to-[#d80f78]',
  purple: 'bg-gradient-to-r from-[#6e0fa2] to-[#b43fcb]',
  crimson: 'bg-gradient-to-r from-[#e0282f] to-[#a50f34]',
  pink: 'bg-gradient-to-r from-[#ff6fb6] to-[#d31b82]',
};

export default function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-8 py-32">
      <div className="max-w-4xl">
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">WE DON'T JUST MAKE THINGS LOOK GOOD.</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          We build the strategy, stories and systems that make brands matter.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/50 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.25)]"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <div className={`absolute inset-0 ${accentStyles[service.accent]} opacity-10`} />
            </div>
            <div className="relative z-10">
              <div className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-zinc-400">0{index + 1}</div>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="mt-4 text-zinc-400 leading-8">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
