'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useCycle } from 'framer-motion';
import { Menu } from 'lucide-react';

export default function Nav() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-40 flex items-center justify-between px-8">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/images/brand/logo-primary.png" alt="EM Studios" width={140} height={36} />
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm text-zinc-300 backdrop-blur-sm">
        <Link href="#work" className="hover:underline">
          Work
        </Link>
        <Link href="#services" className="hover:underline">
          Services
        </Link>
        <Link href="#about" className="hover:underline">
          About
        </Link>
        <Link href="#insights" className="hover:underline">
          Insights
        </Link>
        <Link href="#pricing" className="hover:underline">
          Pricing
        </Link>
        <Link href="#contact" className="hover:underline">
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="#start"
          className="hidden md:inline-block rounded-full bg-gradient-to-r from-[rgba(182,0,154,0.95)] via-[rgba(110,15,162,0.95)] to-[rgba(224,40,47,0.95)] px-5 py-2 text-sm font-semibold text-white shadow-lg"
        >
          START A PROJECT
        </a>

        <button className="md:hidden p-2 rounded bg-white/[.04]">
          <Menu size={18} color="#fff" />
        </button>
      </div>
    </nav>
  );
}
