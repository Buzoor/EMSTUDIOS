This folder is the single source of truth for site media used by the EM Studios prototype.

Place your images and video files here using the following recommended structure:

- /assets/images/brand/
  - logo-primary.png (primary EM Studios logo used in navigation and hero)
  - logo-mark.jpg (supporting brand mark)

- /assets/images/projects/
  - p01-ember-launch/
    - hero.jpg
    - gallery-01.jpg
    - gallery-02.jpg
    - gallery-03.jpg
  - p02-noir-film/
    - hero.jpg
    - gallery-01.jpg
    - gallery-02.jpg
    - gallery-03.jpg
  - p03-studio-alchemy/
    - hero.jpg
    - gallery-01.jpg
    - gallery-02.jpg
    - gallery-03.jpg
  - p04-aurora-social/
    - hero.jpg
    - gallery-01.jpg
    - gallery-02.jpg
    - gallery-03.jpg
  - p05-flare-motion/
    - hero.jpg
    - gallery-01.jpg
    - gallery-02.jpg
    - gallery-03.jpg
  - p06-sierra-studio/
    - hero.jpg
    - gallery-01.jpg
    - gallery-02.jpg
    - gallery-03.jpg

- /assets/videos/
  - ember-launch-teaser.mp4
  - noir-film-preview.mp4
  - any campaign films or video assets (use mp4/webm)

Guidelines:
- Use the same filename code when replacing assets so the site picks up the new visuals automatically.
- Prefer optimized JPG or WebP for images. Keep project hero images around 2000–3200px wide and use 2:3 – 16:9 ratios for gallery tiles.
- For videos use H.264 MP4 or WebM; keep files optimized for web (bitrate and resolution balanced for quality and performance).
- If you change filenames, update references in these files:
  - em-studios/data/projects.ts
  - em-studios/components/Nav.tsx
  - em-studios/components/Hero.tsx

Drop your assets into these folders and the site will automatically use them.