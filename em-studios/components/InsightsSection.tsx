'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { articles } from '../data/articles';

export default function InsightsSection() {
  return (
    <section id="insights" className="container mx-auto px-8 py-32">
      <div className="max-w-4xl">
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">THINKING OUT LOUD</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">Insights, essays and ideas from the studio.</h2>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {articles.map((article, index) => (
          <motion.article
            key={article.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group rounded-[28px] border border-white/10 bg-black/50 p-8"
          >
            <div className="mb-4 rounded-3xl bg-[radial-gradient(circle,_rgba(182,0,154,0.18),_transparent)] p-4 text-xs uppercase tracking-[0.35em] text-pink-200">
              {article.category}
            </div>
            <h3 className="text-2xl font-semibold text-white">{article.title}</h3>
            <p className="mt-4 text-zinc-400 leading-8">{article.excerpt}</p>
            <div className="mt-8 flex items-center justify-between gap-4 text-sm text-zinc-500">
              <span>{article.date}</span>
              <Link href={`#`} className="font-semibold text-white transition hover:text-zinc-100">
                Read
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
