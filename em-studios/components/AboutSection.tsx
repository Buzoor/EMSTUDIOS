'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="container mx-auto px-8 py-32">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">ABOUT</div>
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            WE TURN IDEAS INTO IDENTITIES.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-zinc-400">
            EM Studios combines strategic thinking, cinematic creativity, design, AI and emerging technology to build brands that are distinctive, memorable and built to move audiences.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {[
              'Strategy',
              'Storytelling',
              'Creativity',
              'Technology',
            ].map((item) => (
              <div key={item} className="rounded-[24px] border border-white/10 bg-black/50 p-6">
                <p className="text-xl font-semibold text-white">{item}</p>
                <p className="mt-3 text-zinc-400 leading-7">
                  {item === 'Strategy'
                    ? 'Aligning ambition, audience and category to shape meaningful brand direction.'
                    : item === 'Storytelling'
                    ? 'Crafting narratives that give every brand experience context and emotional resonance.'
                    : item === 'Creativity'
                    ? 'Designing compelling systems that feel modern, editorial and unmistakably premium.'
                    : 'Using emerging tools to make creative production smarter, faster and more ambitious.'}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/60 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f0534]/70 via-transparent to-[#180206]/0" />
          <div className="relative z-10 grid gap-6">
            <div className="rounded-3xl bg-gradient-to-br from-[#42086c] via-[#b90096] to-[#fa3a56] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-100/80">studio snapshot</p>
              <p className="mt-6 text-4xl font-semibold leading-tight">A premium creative studio built for visionary brands.</p>
            </div>
            <div className="grid gap-4 rounded-3xl bg-white/5 p-6 backdrop-blur-sm">
              <div className="h-64 rounded-[28px] bg-[radial-gradient(circle_at_20%_30%,rgba(182,0,154,0.35),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(224,40,47,0.25),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0))]" />
              <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">Founder-led studio</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
