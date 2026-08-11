'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="container mx-auto px-8 py-32">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">LET'S BUILD SOMETHING WORTH REMEMBERING.</div>
          <h2 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl">
            Have a brand, campaign, film or idea that needs to exist in the world? Let’s talk.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Share the details below and we’ll respond with a project plan designed for your ambition.
          </p>
        </div>

        <div className="rounded-[32px] border border-white/10 bg-black/60 p-8 shadow-[0_40px_120px_rgba(0,0,0,0.25)]">
          {submitted ? (
            <div className="rounded-[28px] border border-em-magenta/30 bg-white/5 p-10 text-center text-zinc-100">
              <p className="text-2xl font-semibold">Thank you.</p>
              <p className="mt-4 text-zinc-400">Your inquiry has been received and we’ll be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
              className="grid gap-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300">
                  Name
                  <input className="mt-2 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20" placeholder="Your name" required />
                </label>
                <label className="block text-sm text-zinc-300">
                  Company
                  <input className="mt-2 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20" placeholder="Company name" required />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300">
                  Email
                  <input type="email" className="mt-2 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20" placeholder="hello@example.com" required />
                </label>
                <label className="block text-sm text-zinc-300">
                  Phone
                  <input className="mt-2 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20" placeholder="+234 800 000 000" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300">
                  Project Type
                  <select className="mt-2 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20">
                    <option>Branding</option>
                    <option>Campaign</option>
                    <option>Film</option>
                    <option>AI Production</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block text-sm text-zinc-300">
                  Budget Range
                  <select className="mt-2 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20">
                    <option>$10k – $25k</option>
                    <option>$25k – $50k</option>
                    <option>$50k – $100k</option>
                    <option>$100k+</option>
                  </select>
                </label>
              </div>
              <label className="block text-sm text-zinc-300">
                Timeline
                <select className="mt-2 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20">
                  <option>1-4 weeks</option>
                  <option>4-8 weeks</option>
                  <option>8-12 weeks</option>
                  <option>12+ weeks</option>
                </select>
              </label>
              <label className="block text-sm text-zinc-300">
                Tell us about your project
                <textarea className="mt-2 h-40 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-4 text-white outline-none focus:border-em-magenta focus:ring-2 focus:ring-em-magenta/20" placeholder="Briefly describe your goals, audience and ambition." required />
              </label>
              <button type="submit" className="rounded-full bg-gradient-to-r from-[#b6009a] via-[#6e0fa2] to-[#e0282f] px-8 py-4 text-sm font-semibold text-white transition hover:brightness-110">
                START A PROJECT
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
