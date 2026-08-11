'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black opacity-40" />
      </div>

      <div className="container mx-auto px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-start gap-8">
            <div className="flex items-center gap-6">
              <Image src="/assets/images/brand/logo-primary.png" alt="EM Studios" width={180} height={48} className="opacity-90"/>
            </div>

            <motion.h1
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ delay:0.2 }}
              className="text-white text-[clamp(48px,10vw,140px)] huge-hero"
            >
              CRAFTING
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(182,0,154,1)] via-[rgba(110,15,162,1)] to-[rgba(224,40,47,1)]">STORIES.</span>
              <br/>
              BUILDING
              <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[rgba(182,0,154,1)] via-[rgba(110,15,162,1)] to-[rgba(224,40,47,1)]">BRANDS.</span>
            </motion.h1>

            <p className="max-w-2xl text-zinc-300 text-lg">EM Studios is a brand management and creative agency transforming ambitious ideas into memorable brands through strategy, design, film, content, and emerging technology.</p>

            <div className="flex items-center gap-4">
              <a href="#work" className="rounded-full px-6 py-3 bg-white text-black font-semibold shadow">EXPLORE OUR WORK →</a>
              <a href="#start" className="rounded-full px-6 py-3 border border-zinc-700 text-zinc-200">START A PROJECT</a>
            </div>

            <div className="mt-12 text-zinc-400">SCROLL TO EXPLORE ↓</div>
          </div>
        </div>
      </div>
    </section>
  );
}
