'use client';

export default function WhySection() {
  const pillars = [
    {
      title: 'Strategy.',
      copy: 'We don’t create isolated visuals. We create connected brand systems.',
    },
    {
      title: 'Story.',
      copy: 'We don’t chase trends. We build distinctive identities that feel timeless and modern.',
    },
    {
      title: 'Systems.',
      copy: 'We don’t simply produce content. We create stories designed to move people across channels.',
    },
    {
      title: 'Scale.',
      copy: 'We don’t treat AI as a gimmick. We use technology to make creativity smarter, faster and more ambitious.',
    },
  ];

  return (
    <section className="container mx-auto px-8 py-32 bg-black/70 border-t border-white/5">
      <div className="max-w-5xl">
        <div className="mb-12 text-4xl font-extrabold tracking-tight text-white">STRATEGY. STORY. SYSTEMS. SCALE.</div>
        <div className="grid gap-8 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-[28px] border border-white/10 bg-black/50 p-8">
              <h3 className="text-3xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-zinc-400 leading-8">{pillar.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
