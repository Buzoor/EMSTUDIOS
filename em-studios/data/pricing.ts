export type PricingTier = {
  title: string;
  subtitle: string;
  price: string;
  description: string;
  deliverables: string[];
  timeline: string;
  idealFor: string;
  cta: string;
  accent: string;
};

export const pricing: PricingTier[] = [
  {
    title: "STARTER",
    subtitle: "For emerging brands building their foundation.",
    price: "From $12,500",
    description:
      "A design-first package for ambitious founders that need a strong brand platform and launch toolkit.",
    deliverables: [
      "Brand positioning brief",
      "Visual identity system",
      "Brand guidelines overview",
      "Social launch assets",
    ],
    timeline: "4-6 weeks",
    idealFor: "Emerging brands, founders, product launches",
    cta: "BEGIN WITH STARTER",
    accent: "magenta",
  },
  {
    title: "GROWTH",
    subtitle: "For established brands strengthening their voice.",
    price: "From $28,000",
    description:
      "A strategic, storytelling-led package to sharpen your identity, campaigns and content.",
    deliverables: [
      "Brand strategy and messaging",
      "Identity refinement",
      "Campaign concepts",
      "Social and video assets",
    ],
    timeline: "8-10 weeks",
    idealFor: "Ambitious businesses, product expansions, repositioning",
    cta: "EXPLORE GROWTH",
    accent: "purple",
  },
  {
    title: "PREMIUM",
    subtitle: "For ambitious brands seeking a full creative partner.",
    price: "From $55,000",
    description:
      "A deep brand management package that combines strategy, film, design and AI-powered production.",
    deliverables: [
      "Full brand system",
      "Campaign and film direction",
      "Digital experience design",
      "Ongoing brand management support",
    ],
    timeline: "12+ weeks",
    idealFor: "High-growth brands, category challengers, culture-driving campaigns",
    cta: "REQUEST PREMIUM",
    accent: "crimson",
  },
];

export const customProposal = {
  label: "CUSTOM PROJECTS",
  tagline:
    "For campaigns, large-scale branding, films and long-term brand management.",
  cta: "REQUEST A CUSTOM PROPOSAL →",
};
