import type { StaticImageData } from "next/image";
import injectIvfImage from "@/assets/images/project-2.jpg";

export type ProjectChallenge = {
  challenge: string;
  solution: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  category: string;
  year: string;
  role: string;
  liveUrl?: string;
  githubUrl?: string;
  image: StaticImageData;
  /** Shown on homepage cards; first items also power case study overview badges */
  techStack: string[];
  problem: string;
  solution: string;
  keyFeatures: string[];
  technicalHighlights: string[];
  challenges: ProjectChallenge[];
  results: string[];
  lessonsLearned: string[];
};

export const projects: Project[] = [
  {
    slug: "busi-pilot",
    title: "BusiPilot",
    tagline: "A focused workspace for turning messy business tasks into clear next steps",
    summary:
      "BusiPilot is a product-style web app that helps small teams capture goals, break them into actionable items, and stay oriented—without forcing everyone into heavyweight project management. I owned the front-end architecture, core UX flows, and performance-sensitive UI patterns.",
    category: "SaaS · productivity",
    year: "2025",
    role: "Product engineer · UI architecture",
    liveUrl: 'https://busipilot.com',
    githubUrl: 'https://github.com/dbenavi5/busipilot',
    image: {
      src: 'https://res.cloudinary.com/dpj6rkbus/image/upload/v1778317270/Screenshot_2026-05-09_at_2.00.55_AM_wwc9tg.png',
      width: 1000,
      height: 1000,
    },
    techStack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Motion",
      "App Router",
    ],
    problem:
      "Operators and founders were juggling notes, spreadsheets, and ad hoc tools—so priorities drifted and handoffs broke down. The product needed an interface that feels lightweight on day one but scales as workflows grow.",
    solution:
      "Shipped a responsive app shell with predictable navigation, task-centric views, and optimistic-feeling interactions so people can log in, capture work, and resume context quickly. Emphasis on readable typography, tight information hierarchy, and keyboard-friendly targets for daily use.",
    keyFeatures: [
      "Dashboard that surfaces active work and stalled items at a glance",
      "Structured task capture with flexible grouping (no rigid methodology lock-in)",
      "Responsive layouts from mobile check-ins through desktop deep work",
      "Motion used for state changes and hierarchy, not decoration",
      "Foundation for role-based views and integrations as the product matures",
    ],
    technicalHighlights: [
      "Next.js App Router with shared layouts, loading boundaries, and colocated UI modules",
      "Reusable component primitives (panels, badges, list rows) with consistent spacing tokens",
      "Client islands only where interactivity is required; lean server-first defaults",
      "Image and font discipline aligned with Lighthouse-style performance goals",
      "Type-safe props and domain-shaped models to reduce UI drift as features land",
    ],
    challenges: [
      {
        challenge:
          "Keeping the app approachable for non-technical users while leaving room for power workflows.",
        solution:
          "Defaulted to simple create-and-complete loops, progressive disclosure for advanced fields, and copy that mirrors how teams talk about work—not software jargon.",
      },
      {
        challenge:
          "Avoiding the “empty product” feeling on first use without fake demo data permanently in the database.",
        solution:
          "Used thoughtful onboarding empty states, suggested starter structures, and clear CTAs that teach the model of the app in one session.",
      },
      {
        challenge:
          "Maintaining snappy interactions when lists and history grow.",
        solution:
          "Structured list rendering around stable keys, pagination or windowing where needed, and deferred loading for non-critical panels.",
      },
    ],
    results: [
      "A coherent v1 product surface teams can adopt without a training manual",
      "Clearer day-to-day orientation for pilot users versus scattered notes (qualitative)",
      "A codebase structure ready for auth hardening, billing, and integrations",
      "Reduced UI inconsistency through shared primitives and tokens",
    ],
    lessonsLearned: [
      "Productivity software wins on trust: the UI must feel calm when people are already overwhelmed.",
      "The best MVP flows are boring to build but obvious to use—celebrate that.",
      "Plan data models for how work actually mutates, not how slides describe it.",
    ],
  },
  {
    slug: "inject-ivf",
    title: "InjectIVF",
    tagline: "A fast, trustworthy Next.js site for IVF concierge care",
    summary:
      "Partnered with the Inject IVF team to move off Wix and ship a custom Next.js marketing site focused on clarity, SEO, and reliable lead capture—so prospective patients can find the practice and reach out with confidence.",
    category: "Healthcare marketing & lead generation",
    year: "2024",
    role: "Lead developer · UX & implementation",
    liveUrl: "https://www.injectivf.com/",
    image: injectIvfImage,
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "Formspree",
      "reCAPTCHA",
    ],
    problem:
      "The previous Wix experience was limiting: branding and layout flexibility were constrained, organic discovery needed improvement, and the team wanted a contact flow that felt professional while filtering spam.",
    solution:
      "Designed and built a custom Next.js experience with structured content, technical SEO foundations, and a Formspree-backed contact path protected with reCAPTCHA—prioritizing performance, accessibility basics, and a calm, clinical tone appropriate for fertility care.",
    keyFeatures: [
      "Service-forward IA that highlights what patients need first",
      "On-page SEO structure (metadata, meaningful headings, readable URLs)",
      "robots.txt and sitemap.xml to support crawling",
      "Search Console setup guidance for indexing and coverage checks",
      "Responsive layouts tuned for phones and desktops",
      "Contact workflow via Formspree with spam mitigation",
    ],
    technicalHighlights: [
      "Next.js App Router pages with shared layout and optimized images",
      "Lighthouse-oriented improvements: image discipline, font loading awareness, and lean UI",
      "Reusable section components and consistent spacing scale",
      "Environment-driven configuration for third-party integrations",
    ],
    challenges: [
      {
        challenge:
          "Migrating content and positioning from Wix without breaking discoverability during transition.",
        solution:
          "Mapped core pages to clean routes, aligned titles/descriptions with patient intent, and used sitemap.xml plus Search Console to validate indexing after launch.",
      },
      {
        challenge:
          "Keeping trust high while adding friction only where needed (spam).",
        solution:
          "Used reCAPTCHA with Formspree so legitimate inquiries stayed smooth, while automated noise dropped noticeably for the inbox.",
      },
      {
        challenge:
          "Performance on image-heavy layouts without compromising brand warmth.",
        solution:
          "Used Next/Image, intentional crops, and restrained motion so the site stayed responsive on common mobile networks.",
      },
    ],
    results: [
      "A modern, credible web presence aligned with a clinical concierge brand",
      "Clearer paths for patients to understand services and convert",
      "Improved technical SEO readiness versus the prior template constraints",
      "More dependable inquiry handling with fewer junk submissions (qualitative)",
    ],
    lessonsLearned: [
      "Healthcare sites win when copy stays simple and the UI stays calm—visual noise reads as risk.",
      "SEO work is as much about crawlability and consistency as the right keywords.",
      "Forms are a product surface: small UX choices materially change lead quality.",
    ],
  },
  {
    slug: "aa-city-electric",
    title: "A&A City Electric",
    tagline: "Solar and electrical expertise presented with modern credibility",
    summary:
      "Built a marketing-forward site for a solar and electrical contractor: strong first impression, services that scan quickly, and performance-minded media so the brand reads “premium operator”, not “generic template”.",
    category: "Local services · solar & electrical",
    year: "2024",
    role: "Frontend developer · design implementation",
    liveUrl: 'https://aacityelectric.vercel.app',
    image: {
      src: 'https://res.cloudinary.com/dpj6rkbus/image/upload/v1778315286/Screenshot_2026-05-09_at_1.25.08_AM_f8vzdw.png',
      width: 1000,
      height: 1000,
    },
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Motion",
      "Cloudinary",
      "Performance",
    ],
    problem:
      "Trade contractors need instant credibility: hero proof, clear services, and trust signals. The site had to feel modern, load fast, and scale as new photography and project stories arrive.",
    solution:
      "Implemented a responsive hero with strong visual hierarchy, service sections engineered for scanning, and Cloudinary-backed imagery with sensible defaults for compression and sizing. Motion is used sparingly to guide attention—not decorate every block.",
    keyFeatures: [
      "Responsive hero with clear primary call-to-action paths",
      "Service grid optimized for skimming on mobile",
      "Trust-building layout patterns (clarity over hype)",
      "Foundation for a richer project gallery as assets mature",
      "Animation used as feedback and narrative pacing, not distraction",
    ],
    technicalHighlights: [
      "Next.js structure suited for incremental content growth",
      "Tailwind-driven design system aligned with the portfolio’s zinc/indigo language",
      "Motion-driven micro-interactions on headings and key CTAs",
      "Image optimization workflow via Cloudinary delivery URLs",
      "Lighthouse-oriented iteration on layout shifts and media weight",
    ],
    challenges: [
      {
        challenge:
          "Balancing a bold hero with fast first paint on real devices.",
        solution:
          "Prioritized LCP elements, tuned image dimensions/format priorities, and deferred non-critical animation until after first render where helpful.",
      },
      {
        challenge:
          "Keeping the story readable for non-technical visitors.",
        solution:
          "Short section intros, strong headings, and consistent spacing rhythm so scanning beats reading walls of text.",
      },
      {
        challenge:
          "Preparing for a growing gallery without a one-off rebuild later.",
        solution:
          "Structured repeatable “card” and grid primitives so new projects can slot in as components and data.",
      },
    ],
    results: [
      "A professional storefront for a high-stakes local service category",
      "Improved perceived quality vs generic builder sites (qualitative feedback)",
      "A media pipeline that scales as the team adds project photography",
      "Cleaner performance headroom for future landing pages and expansions",
    ],
    lessonsLearned: [
      "For trades, trust is designed: typography, spacing, and photography matter as much as feature lists.",
      "Motion should answer “what should I look at next?”—otherwise it hurts comprehension.",
      "Treat Cloudinary as part of performance, not just hosting.",
    ],
  },
  {
    slug: "born-again-thrift-sf",
    title: "Born Again Thrift SF",
    tagline: "Editorial, gallery-first storytelling for a local thrift shop",
    summary:
      "A brand-forward storefront experience for a San Francisco thrift shop—heavy on imagery, light on clutter, with layouts tuned for discovery and a neighborhood story that feels local, not corporate.",
    category: "Retail · local business",
    year: "2024",
    role: "Designer-developer · creative implementation",
    liveUrl: 'https://born-again-thrift-sf.vercel.app',
    image: {
      src: 'https://res.cloudinary.com/dpj6rkbus/image/upload/v1778315286/Screenshot_2026-05-09_at_1.27.08_AM_nn0tga.png',
      width: 1000,
      height: 1000,
    },
    techStack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Motion",
      "Image performance",
      "Responsive layout",
    ],
    problem:
      "Thrift retail is visual: shoppers need to feel the inventory’s energy online. The site needed a unique brand mood, a gallery that invites browsing, and enough structure to stay fast on phones.",
    solution:
      "Leaning into an editorial rhythm: bold type, generous image surfaces, and a browsing pattern that mirrors wandering a rail—not reading a brochure. Performance stays intentional through image sizing, lazy strategies where appropriate, and disciplined layout composition.",
    keyFeatures: [
      "Gallery-heavy homepage with curated visual pacing",
      "Infinite-style browsing pattern for exploration (implemented with performance guardrails)",
      "Responsive typography and spacing that holds up on small screens",
      "Brand-forward preloader/logo animation concepts to set tone on arrival",
      "Minimal editorial copy that supports the photography",
    ],
    technicalHighlights: [
      "Responsive grids that re-balance imagery vs copy by breakpoint",
      "Motion for brand moments (entrances, loaders) with reduced-motion respect in mind",
      "Image pipeline decisions to avoid massive payloads in galleries",
      "Componentized gallery primitives to swap assets without refactors",
    ],
    challenges: [
      {
        challenge:
          "Image-heavy pages can tank mobile performance quickly.",
        solution:
          "Sized media to layout, used Next/Image patterns, and avoided loading full-resolution assets in lists.",
      },
      {
        challenge:
          "A distinctive brand risked becoming noisy.",
        solution:
          "Anchored the design to a simple type scale and a tight neutral palette—letting photos carry saturation.",
      },
      {
        challenge:
          "Motion can distract from shopping intent.",
        solution:
          "Limited animation to onboarding and section transitions; kept product discovery paths obvious.",
      },
      {
        challenge:
          "Local storytelling can feel generic if the visuals are weak.",
        solution:
          "Structured layouts around authentic store photography and short, specific copy tied to SF neighborhood context.",
      },
    ],
    results: [
      "A memorable site posture that matches a physical shop personality",
      "A browsing experience that rewards exploration without overwhelming navigation",
      "Better readiness for seasonal campaigns and new drops (layout modularity)",
      "Stronger brand consistency across channels (qualitative)",
    ],
    lessonsLearned: [
      "Retail sites are editorial products: sequencing matters as much as components.",
      "Galleries need an engineering budget—plan for bytes, not just pixels.",
      "Local businesses win when the website feels like the door sign, not a corporate handbook.",
    ],
  },
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));

export function getProjectBySlug(slug: string): Project | undefined {
  return bySlug.get(slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Homepage cards: pick a subset of stack labels for badges */
export function projectHomeBadgeTech(project: Project, max = 5): string[] {
  return project.techStack.slice(0, max);
}
