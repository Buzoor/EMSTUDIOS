export type Project = {
  slug: string;
  name: string;
  client: string;
  category: string;
  year: string;
  description: string;
  role: string;
  tags: string[];
  challenge: string;
  strategy: string;
  idea: string;
  execution: string;
  result: string;
  quote: string;
  quoteAuthor: string;
  quoteRole: string;
  accent: string;
  image: string;
  gallery: string[];
  video?: string;
};

export const projects: Project[] = [
  {
    slug: "ember-launch",
    name: "EMBER LAUNCH",
    client: "Ember Collective",
    category: "Campaigns",
    year: "2024",
    description:
      "A cinematic launch campaign for an experiential retail brand that merges bold visuals with cultural storytelling.",
    role: "Campaign direction, motion strategy, art direction",
    tags: ["Campaigns", "Creative Direction", "Motion"],
    challenge:
      "Ember needed a launch identity that felt premium, energetic and rooted in African craft while supporting a scaled global release.",
    strategy:
      "We built a narrative system around fire, texture and ritual, using motion-led storytelling to translate heritage into a modern campaign.",
    idea:
      "The launch became a moving manifesto: brand moments that felt like editorial film stills, layered with analog texture and bold typography.",
    execution:
      "We produced campaign films, motion posters, social lookbooks and a launch toolkit built for immersive retail and digital rollout.",
    result:
      "Ember launched with record pre-orders, social buzz across 4 markets and a brand identity that immediately felt distinctive.",
    quote:
      "EM Studios gave our launch the kind of visual ambition we never thought possible — it felt like art and commerce at once.",
    quoteAuthor: "Amara K.",
    quoteRole: "Founder, Ember Collective",
    accent: "magenta",
    image: "/assets/images/projects/p01/hero.png",
    gallery: [
      "/assets/images/projects/p01/gallery-01.png",
      "/assets/images/projects/p01/gallery-02.jpg",
      "/assets/images/projects/p01/gallery-03.jpg",
    ],
    video: "/assets/videos/ember-launch-teaser.mp4",
  },
  {
    slug: "noir-film",
    name: "NOIR FILM",
    client: "Luna Labs",
    category: "AI Film",
    year: "2025",
    description:
      "An AI-driven film series for a storytelling lab, blending cinematic production with emerging technology and editorial craft.",
    role: "Film direction, AI creative design, narrative systems",
    tags: ["AI Film", "Video", "Brand Strategy"],
    challenge:
      "Luna Labs wanted a compelling film portfolio that would show how technology can deepen storytelling rather than distract from it.",
    strategy:
      "We leaned into atmospheric color, theatrical pacing and branded tech motifs to make the films feel both human and futuristic.",
    idea:
      "Each film was designed like a short visual essay — alternating intimate character moments with bold graphic sequences.",
    execution:
      "We created a full production pipeline that combined AI-assisted concepting, motion design, editorial visuals and adaptive sound.",
    result:
      "The film series earned editorial features, 12k views in its first week, and new leads for Luna Labs’ creative practice.",
    quote:
      "The work is beautiful and intelligent — EM Studios found the balance between cinematic craft and AI innovation.",
    quoteAuthor: "Sade D.",
    quoteRole: "Creative Director, Luna Labs",
    accent: "crimson",
    image: "/assets/images/projects/p02/hero.jpg",
    gallery: [
      "/assets/images/projects/p02/gallery-01.jpg",
      "/assets/images/projects/p02/gallery-02.jpg",
      "/assets/images/projects/p02/gallery-03.jpg",
    ],
    video: "/assets/videos/noir-film-preview.mp4",
  },
  {
    slug: "studio-alchemy",
    name: "STUDIO ALCHEMY",
    client: "Alchemy Architects",
    category: "Branding",
    year: "2024",
    description:
      "A visual identity system for an architecture studio, designed to feel editorial, structural and unmistakably bold.",
    role: "Brand identity, visual system, type design",
    tags: ["Branding", "Design", "Strategy"],
    challenge:
      "Alchemy needed a brand that could live across print, digital, and physical installations without losing its editorial edge.",
    strategy:
      "We created a flexible identity system that combined architectural geometry with fluid gradient moments.",
    idea:
      "The brand used motion, layered grids and vibrant accent colors to feel alive, modern and unmistakably premium.",
    execution:
      "We delivered brand books, environmental graphics, digital templates and launch materials with rich editorial styling.",
    result:
      "The new identity helped Alchemy win two major commissions and established the studio as a standout in competitive pitches.",
    quote:
      "EM Studios gave our brand a rare clarity — it feels like a bold design system, not just a logo.",
    quoteAuthor: "Nandi T.",
    quoteRole: "Principal, Alchemy Architects",
    accent: "purple",
    image: "/assets/images/projects/p03/hero.jpg",
    gallery: [
      "/assets/images/projects/p03/gallery-01.jpg",
      "/assets/images/projects/p03/gallery-02.jpg",
      "/assets/images/projects/p03/gallery-03.jpg",
    ],
  },
  {
    slug: "aurora-social",
    name: "AURORA SOCIAL",
    client: "Horizon Beauty",
    category: "Digital Experiences",
    year: "2025",
    description:
      "A social campaign and digital refresh for a beauty brand, creating cinematic content optimized for audience growth.",
    role: "Social strategy, content direction, motion execution",
    tags: ["Social Media", "Campaigns", "Motion"],
    challenge:
      "Horizon Beauty needed content that could cut through social feeds while still maintaining a premium, editorial identity.",
    strategy:
      "We designed a campaign that felt like a visual movement: bold gradients, kinetic typography and tactile product storytelling.",
    idea:
      "The idea was to treat social posts like magazine spreads — each asset had room to breathe and a clear visual anchor.",
    execution:
      "We produced a suite of motion reels, style frames, editorial stills and social templates designed for launch and evergreen use.",
    result:
      "The campaign increased engagement by 37% and helped Horizon Beauty gain new followers in target markets.",
    quote:
      "Our social presence finally feels intentional — EM Studios made every asset feel like part of a single world.",
    quoteAuthor: "Tariq M.",
    quoteRole: "Marketing Lead, Horizon Beauty",
    accent: "pink",
    image: "/assets/images/projects/p04/hero.jpg",
    gallery: [
      "/assets/images/projects/p04/gallery-01.jpg",
      "/assets/images/projects/p04/gallery-02.jpg",
      "/assets/images/projects/p04/gallery-03.jpg",
    ],
  },
  {
    slug: "flare-motion",
    name: "FLARE MOTION",
    client: "Pulse Media",
    category: "Motion",
    year: "2024",
    description:
      "A motion-led visual identity and campaign package for a studio that champions bold, experimental storytelling.",
    role: "Motion design, campaign concept, visual production",
    tags: ["Motion", "Video", "Creative Direction"],
    challenge:
      "Pulse Media needed motion work that felt editorial and modern while still being flexible across campaigns.",
    strategy:
      "We created a visual language of shifting gradients, dynamic stamp typography and cinematic transitions.",
    idea:
      "The campaign used motion triggers, smooth reveals and a color system that made the brand feel alive in every frame.",
    execution:
      "We delivered motion loops, broadcast-ready animations, campaign teasers and social content for a multi-touch launch.",
    result:
      "The motion suite became the cornerstone of Pulse Media’s refreshed visual identity and creative presentations.",
    quote:
      "EM Studios made motion feel like a strategic asset — not just pretty visuals.",
    quoteAuthor: "Lena R.",
    quoteRole: "Executive Producer, Pulse Media",
    accent: "magenta",
    image: "/assets/images/projects/p05/hero.jpg",
    gallery: [
      "/assets/images/projects/p05/gallery-01.jpg",
      "/assets/images/projects/p05/gallery-02.jpg",
      "/assets/images/projects/p05/gallery-03.jpg",
    ],
  },
  {
    slug: "sierra-studio",
    name: "SIERRA STUDIO",
    client: "Sierra Ventures",
    category: "Creative Direction",
    year: "2025",
    description:
      "A creative direction and visual strategy package for an emerging venture studio, built to feel modern and editorial.",
    role: "Creative direction, brand systems, campaign visuals",
    tags: ["Creative Direction", "Strategy", "Identity"],
    challenge:
      "Sierra wanted a coherent visual language that could unite investments, launches and content under one premium system.",
    strategy:
      "We positioned the brand as a studio of ideas — structured yet fluid, with a focus on story and strategic clarity.",
    idea:
      "The system used photographic texture, editorial frames and refined typography to feel both reassuring and unexpected.",
    execution:
      "We produced brand guidelines, campaign previews, investor deck layouts and film teaser concepts.",
    result:
      "Sierra’s new identity helped them secure strategic partners and present a bolder story to founders.",
    quote:
      "Our brand finally feels like a platform — EM Studios translated strategy into visuals with precision.",
    quoteAuthor: "Kofi A.",
    quoteRole: "Founder, Sierra Ventures",
    accent: "purple",
    image: "/assets/images/projects/p06/hero.jpg",
    gallery: [
      "/assets/images/projects/p06/gallery-01.jpg",
      "/assets/images/projects/p06/gallery-02.jpg",
      "/assets/images/projects/p06/gallery-03.jpg",
    ],
  },
];

export const categories = [
  "ALL",
  "BRANDING",
  "CAMPAIGNS",
  "FILM",
  "DESIGN",
  "MOTION",
  "AI",
  "STRATEGY",
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);

export const getProjectSlugs = () => projects.map((project) => project.slug);
