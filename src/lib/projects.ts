import type { ImageTag } from "./images";

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  stack: readonly string[];
  metric?: string;
  href?: string;
  external?: string;
  repo?: string;
  status: "case-study" | "external" | "placeholder";
  span?: "wide" | "tall" | "default";
  accent?: "blue" | "ink";
  image: ImageTag;
  category?:
    | "product"
    | "marketing"
    | "research"
    | "tooling"
    | "civic"
    | "faith";
  featured?: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: "fida-delivery",
    title: "FIDA Delivery",
    subtitle:
      "Customer + rider Expo apps for Ethiopia's first vertically-integrated last-mile brand. MapLibre, Firebase, EAS Updates.",
    year: "2025 — present",
    role: "Co-founder · design + engineering",
    stack: ["Expo SDK 56", "React Native", "MapLibre", "Firebase", "EAS"],
    metric: "2 apps · one shared backend",
    status: "case-study",
    span: "wide",
    accent: "blue",
    image: "fida-delivery",
    category: "product",
    featured: true,
  },
  {
    slug: "bizbridge",
    title: "BizBridge Ethiopia",
    subtitle:
      "Freemium business-setup platform — sector library, Chapa + Stripe payments, expert booking via Cal.com.",
    year: "2025 — present",
    role: "Frontend lead",
    stack: ["Next.js 15", "Payload v3", "Fastify", "Drizzle", "Better Auth"],
    metric: "Turborepo · bilingual",
    status: "case-study",
    span: "default",
    image: "bizbridge",
    category: "product",
    featured: true,
  },
  {
    slug: "fida-website",
    title: "FIDA Website",
    subtitle:
      "Marketing site + Telegram Mini App with a live MapLibre coverage view.",
    year: "2026",
    role: "Designer & engineer",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "MapLibre GL", "GSAP"],
    status: "case-study",
    span: "default",
    image: "fida-website",
    category: "marketing",
    featured: true,
  },
  {
    slug: "lhf-ethiopia",
    title: "Lutheran Heritage Foundation — Ethiopia",
    subtitle:
      "Marketing site + CMS for confessional Lutheran book distribution in six Ethiopian languages.",
    year: "2026",
    role: "Designer & engineer",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Drizzle", "GSAP"],
    status: "case-study",
    span: "default",
    image: "lhf-ethiopia",
    category: "faith",
    featured: true,
  },
  {
    slug: "drbrug",
    title: "Dr. Brug Archive",
    subtitle:
      "Online archive and personal site for Dr. John F. Brug — Lutheran theologian. Long-form scholarship, searchable.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js", "MDX", "Search"],
    repo: "https://github.com/Cherireal7/drbrug",
    status: "case-study",
    span: "default",
    image: "drbrug",
    category: "faith",
    featured: true,
  },
  {
    slug: "geez-transcribe",
    title: "Ge'ez Transcribe",
    subtitle:
      "Browser tool for transcribing Ge'ez script — Ethiopia's ancient liturgical language.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js", "TypeScript", "i18n"],
    external: "https://geez-transcribe.vercel.app",
    repo: "https://github.com/Cherireal7/geez-transcribe",
    status: "external",
    span: "default",
    accent: "blue",
    image: "geez-transcribe",
    category: "research",
  },
  {
    slug: "liturgical-data-engine",
    title: "Liturgical Data Engine",
    subtitle:
      "Open data layer for Christian liturgical calendars, lectionaries, and feast days.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["TypeScript", "API", "Data"],
    external: "https://liturgical-data-engine.vercel.app",
    repo: "https://github.com/Cherireal7/liturgical-data-engine",
    status: "external",
    span: "default",
    image: "liturgical",
    category: "faith",
  },
  {
    slug: "christian-worship-app",
    title: "Christian Worship App",
    subtitle:
      "Mobile-first worship companion — songbooks, daily readings, prayer flow.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["TypeScript", "React Native"],
    external: "https://github.com/Cherireal7/christian-worship-app",
    repo: "https://github.com/Cherireal7/christian-worship-app",
    status: "external",
    span: "default",
    image: "christian-worship",
    category: "faith",
  },
  {
    slug: "classic-noodle",
    title: "Classic Noodle & Burger",
    subtitle:
      "Digital touchpoints + content strategy for a Bishoftu restaurant.",
    year: "2024 — present",
    role: "Digital product & content",
    stack: ["UX", "Content strategy", "Analytics"],
    metric: "+40% online orders",
    status: "case-study",
    span: "default",
    accent: "blue",
    image: "classic-noodle",
    category: "marketing",
  },
  {
    slug: "yeneta-master",
    title: "Yeneta Master SIS",
    subtitle:
      "School information system for Ethiopian schools — multi-campus by design. Teachers, parents, and administration in one platform.",
    year: "2025 — present",
    role: "Product designer · frontend (Doxa)",
    stack: ["React", "Tailwind", "Laravel", "PostgreSQL", "Redis", "Cloudflare R2"],
    status: "case-study",
    span: "default",
    image: "yeneta-master",
    category: "civic",
  },
  {
    slug: "project-nexus",
    title: "Project Nexus",
    subtitle:
      "Movie recommendation engine — clean UX over TMDB data, watchlists, taste graph.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js", "Tailwind", "TMDB API"],
    external: "https://project-nexus-movie-recommendation.vercel.app",
    repo: "https://github.com/Cherireal7/project-nexus",
    status: "external",
    span: "default",
    image: "project-nexus",
    category: "product",
  },
  {
    slug: "apartment-guide",
    title: "Apartment Guide PWA",
    subtitle:
      "Offline-first PWA for browsing Bishoftu rentals — installable, fast.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js", "PWA", "Service Worker"],
    external: "https://apartment-guide-pwa.vercel.app",
    repo: "https://github.com/Cherireal7/apartment-guide-pwa",
    status: "external",
    span: "default",
    image: "apartment-guide",
    category: "product",
  },
  {
    slug: "ai-workflows",
    title: "AI Automation — n8n Workflows",
    subtitle:
      "Reusable n8n workflows for content ops, lead routing, and analytics push.",
    year: "2025",
    role: "Automation engineer",
    stack: ["n8n", "OpenAI", "Webhooks"],
    repo: "https://github.com/Cherireal7/AI-Automation-Workflows-n8n",
    status: "external",
    span: "default",
    image: "ai-workflows",
    category: "tooling",
  },
  {
    slug: "doxa",
    title: "Doxa Innovations",
    subtitle:
      "Co-founded studio shipping software, branding, and digital content for clients across Ethiopia and the US.",
    year: "2024 — present",
    role: "Co-founder · Vice Manager · Product Designer + FE",
    stack: ["React", "Next.js", "Tailwind", "Laravel", "PostgreSQL"],
    metric: "8 client projects shipped",
    status: "case-study",
    span: "default",
    image: "doxa",
    category: "product",
  },
  {
    slug: "maor-seminary",
    title: "Maor Lutheran Theological Seminary",
    subtitle:
      "Website for the seminary of The Lutheran Church of Ethiopia (LCE) — Doxa client.",
    year: "2025",
    role: "Designer & engineer (Doxa)",
    stack: ["React", "Tailwind", "Laravel"],
    external: "https://mlts.lcechurch.org",
    status: "external",
    span: "default",
    image: "maor-seminary",
    category: "faith",
  },
  {
    slug: "kla-constructions",
    title: "KLA Construction Equipment",
    subtitle:
      "E-commerce platform for a US construction-equipment vendor, with eBay SOAP integration — Doxa client.",
    year: "2025",
    role: "Designer & engineer (Doxa)",
    stack: ["React", "Inertia", "Laravel", "MySQL", "eBay SOAP"],
    external: "https://klaconstructionequipment.com",
    status: "external",
    span: "default",
    image: "kla-constructions",
    category: "product",
  },
  {
    slug: "myseed",
    title: "MySeed — School of Insight",
    subtitle:
      "E-learning platform for Ethiopian grade-12 students preparing for the national exam — Doxa client.",
    year: "2025",
    role: "Designer & engineer (Doxa)",
    stack: ["Next.js", "Laravel", "GraphQL", "Cloudflare Stream"],
    external: "https://myseed.et",
    status: "external",
    span: "default",
    image: "myseed",
    category: "civic",
  },
  {
    slug: "zoe-delivery",
    title: "Zoe Plant Delivery",
    subtitle:
      "Storefront for a Bishoftu plant-delivery business — Doxa client.",
    year: "2025",
    role: "Designer & engineer (Doxa)",
    stack: ["React", "Tailwind", "Laravel"],
    external: "https://zoedelivery.com",
    status: "external",
    span: "default",
    image: "zoe-delivery",
    category: "product",
  },
  {
    slug: "scholten",
    title: "Scholten Pattern Works",
    subtitle:
      "Bespoke informational site and CMS for a Wisconsin precision-molding firm — full brand identity scope. Doxa client.",
    year: "2025",
    role: "Designer & engineer (Doxa)",
    stack: ["Livewire", "Laravel", "Tailwind"],
    external: "https://spw.doxaplc.com",
    status: "external",
    span: "default",
    image: "scholten",
    category: "marketing",
  },
  {
    slug: "zoa",
    title: "ZOA — Ethiopia",
    subtitle:
      "Database management and public site (with future-ready REST API) for ZOA's disability-services program in Ethiopia. Doxa client.",
    year: "2025 — present",
    role: "Designer & engineer (Doxa)",
    stack: ["React PWA", "Laravel", "MySQL"],
    status: "placeholder",
    span: "default",
    image: "zoa",
    category: "civic",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
