'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '../data/projects';

const accentStyles: Record<Project['accent'], string> = {
  magenta: 'from-[#b6009a] via-[#9a0da8] to-[#d50f6c]',
  purple: 'from-[#6e0fa2] via-[#7d2fc4] to-[#c028b7]',
  crimson: 'from-[#e0282f] via-[#c70f36] to-[#ff3b5d]',
  pink: 'from-[#ff6fb6] via-[#f14f9a] to-[#c92b6f]',
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-[0_40px_120px_rgba(0,0,0,0.25)] backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 from-white/5 via-transparent to-transparent" />
      <div className="absolute -right-16 top-8 h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(182,0,154,0.14),_transparent)] blur-3xl opacity-80" />
      <div className="relative overflow-hidden">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.name} visual`}
            fill
            className="object-cover transition duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
          {project.video ? (
            <div className="absolute bottom-4 right-4 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white">
              Video
            </div>
          ) : null}
        </div>
      </div>
      <div className="relative z-10 p-8 pt-6">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-zinc-400">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[11px] text-zinc-300">
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {project.name}
        </h3>
        <p className="mt-6 max-w-xl text-zinc-400 leading-8">{project.description}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
          <span>{project.client}</span>
          <span className="inline-flex h-1 w-1 rounded-full bg-zinc-500" />
          <span>{project.role}</span>
        </div>
        <div className="mt-8 flex items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:-translate-y-1"
          >
            VIEW PROJECT
            <span aria-hidden="true">→</span>
          </Link>
          <div className={`h-0.5 flex-1 rounded-full bg-gradient-to-r ${accentStyles[project.accent]} opacity-80`} />
        </div>
      </div>
    </motion.article>
  );
}
