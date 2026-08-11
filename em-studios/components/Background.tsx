'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function Background() {
  // subtle mouse-reactive positions (motion values)
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mx.set(x);
      my.set(y);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mx, my]);
  const x1 = useTransform(mx, (v) => `${v - 10}%`);
  const y1 = useTransform(my, (v) => `${v - 15}%`);
  const x2 = useTransform(mx, (v) => `${v + 20}%`);
  const y2 = useTransform(my, (v) => `${v + 10}%`);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        style={{ left: x1, top: y1 }}
        className="absolute -z-10 w-[90vw] h-[70vh] max-w-none rounded-full blur-3xl bg-[radial-gradient(closest-side,_rgba(182,0,154,0.35),_transparent)] opacity-70"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        style={{ right: x2, bottom: y2 }}
        className="absolute -z-20 w-[80vw] h-[60vh] max-w-none rounded-full blur-3xl bg-[radial-gradient(closest-side,_rgba(224,40,47,0.32),_transparent)] opacity-60"
        animate={{ scale: [1, 0.98, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* subtle floating particles */}
      <motion.div
        className="absolute -z-10 inset-0 bg-[radial-gradient(closest-side,_rgba(255,111,182,0.02),_transparent)]"
        animate={{ opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
    </div>
  );
}
