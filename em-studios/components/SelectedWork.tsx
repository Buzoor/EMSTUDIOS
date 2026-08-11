'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { categories, projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return projects;
    return projects.filter((project) =>
      project.tags.some((tag) => tag.toUpperCase().includes(activeCategory)),
    );
  }, [activeCategory]);

  return (
    <section id="work" className="container mx-auto px-8 py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">SELECTED WORK</div>
        <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
          Some stories we've helped bring to life.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          A curated collection of brand systems, campaign films, digital experiences and AI-powered storytelling for ambitious businesses.
        </p>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-full border px-5 py-3 text-sm transition ${
              activeCategory === category
                ? 'border-white bg-white text-black'
                : 'border-white/10 text-zinc-400 hover:border-white/20 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-10 xl:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
