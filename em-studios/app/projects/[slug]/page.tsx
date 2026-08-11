import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, getProjectSlugs } from '../../../data/projects';

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#030303] text-white">
      <section className="relative overflow-hidden py-24">
        <div className="container mx-auto px-8">
          <div className="mb-10 inline-flex items-center gap-4 rounded-full bg-white/5 px-5 py-3 text-sm uppercase tracking-[0.35em] text-zinc-300">
            <span>{project.category}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-zinc-400" />
            <span>{project.year}</span>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl">{project.name}</h1>
            <p className="mt-8 text-xl leading-9 text-zinc-300">{project.description}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm uppercase tracking-[0.35em] text-zinc-400">
              <span>{project.client}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
              <span>{project.role}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-8 pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_0.35fr]">
          <div className="space-y-14">
            {project.video ? (
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-black/60">
                <video
                  src={project.video}
                  controls
                  preload="metadata"
                  className="h-full w-full max-h-[520px] bg-black object-cover"
                />
              </div>
            ) : null}
            <article className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">THE CHALLENGE</div>
              <p className="text-zinc-300 leading-8">{project.challenge}</p>
            </article>
            <article className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">THE STRATEGY</div>
              <p className="text-zinc-300 leading-8">{project.strategy}</p>
            </article>
            <article className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">THE CREATIVE IDEA</div>
              <p className="text-zinc-300 leading-8">{project.idea}</p>
            </article>
            <article className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">THE EXECUTION</div>
              <p className="text-zinc-300 leading-8">{project.execution}</p>
            </article>
            <article className="rounded-[32px] border border-white/10 bg-white/5 p-10">
              <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">THE RESULT</div>
              <p className="text-zinc-300 leading-8">{project.result}</p>
            </article>
          </div>

          <aside className="space-y-8">
            <div className="rounded-[32px] border border-white/10 bg-black/60 p-10">
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">Project quote</div>
              <p className="text-zinc-100 text-2xl leading-9">“{project.quote}”</p>
              <div className="mt-8 text-sm text-zinc-400">
                <div className="font-semibold text-white">{project.quoteAuthor}</div>
                <div>{project.quoteRole}</div>
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-black/60 p-10">
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">Project gallery</div>
              <div className="grid gap-4">
                {project.gallery.map((image) => (
                  <div key={image} className="overflow-hidden rounded-[28px] border border-white/10 bg-black/50">
                    <Image
                      src={image}
                      alt={`${project.name} gallery`}
                      width={720}
                      height={480}
                      className="h-36 w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-black/60 p-10">
              <div className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">Related projects</div>
              {getProjectSlugs()
                .filter((slug) => slug !== project.slug)
                .slice(0, 3)
                .map((slug) => (
                  <Link key={slug} href={`/projects/${slug}`} className="block rounded-3xl border border-white/10 px-5 py-4 text-sm text-white transition hover:bg-white/5">
                    {slug.replace(/-/g, ' ').toUpperCase()}
                  </Link>
                ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/80 py-16">
        <div className="container mx-auto px-8">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em] text-white hover:text-zinc-100">
            ← Back to EM Studios
          </Link>
        </div>
      </section>
    </div>
  );
}
