export type Article = {
  title: string;
  category: string;
  excerpt: string;
  date: string;
  slug: string;
};

export const articles: Article[] = [
  {
    title: "The new rules of luxury brand storytelling in Africa.",
    category: "Storytelling",
    excerpt:
      "How premium brands are using narrative systems and visual restraint to earn deeper attention.",
    date: "June 2026",
    slug: "luxury-storytelling-africa",
  },
  {
    title: "Designing with AI: when technology becomes the creative partner.",
    category: "AI",
    excerpt:
      "A closer look at how AI can accelerate ideation without sacrificing craftsmanship.",
    date: "May 2026",
    slug: "designing-with-ai",
  },
  {
    title: "Why every launch needs a cinematic brand system.",
    category: "Branding",
    excerpt:
      "Brand systems that can live on screens, stages and social feeds are no longer optional.",
    date: "April 2026",
    slug: "cinematic-brand-systems",
  },
];
