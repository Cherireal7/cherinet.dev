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
  /** Deployment state displayed on project cards — e.g. "Live", "In development" */
  liveStatus?: "live" | "in-development" | "private-beta" | "wip";
}

export const projects: readonly Project[] = [
  {
    slug: "fida-delivery",
    title: "FIDA Delivery",
    subtitle:
      "Bishoftu's first on-demand delivery network. Customer app, rider app, operator dashboard, marketing site + Telegram Mini App — four surfaces, one designer/engineer, one shared design system.",
    year: "2025 — present",
    role: "Co-founder · design + engineering across all four surfaces",
    stack: ["Expo SDK 56", "React Native", "Next.js 16", "Laravel 13", "Filament 5", "PostGIS", "MapLibre"],
    metric: "18+ partners · 500+ deliveries · 4 surfaces",
    status: "case-study",
    span: "wide",
    accent: "blue",
    image: "fida-delivery",
    category: "product",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "bizbridge",
    title: "BizBridge Ethiopia",
    subtitle:
      "Live business-setup platform indexing every licensed sector in Ethiopia for founders and diaspora investors. Bilingual, freemium, Cal.com-booked experts.",
    year: "2025 — present",
    role: "Frontend lead",
    stack: ["Next.js 15", "Payload v3", "Fastify", "Drizzle", "Better Auth"],
    metric: "519 sectors · bilingual · live",
    status: "case-study",
    span: "default",
    image: "bizbridge",
    category: "product",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "lhf-ethiopia",
    title: "Lutheran Heritage Foundation — Ethiopia",
    subtitle:
      "Regional site + CMS for the LCMS mission publishing devotional books in six Ethiopian languages. Podcast pulls fresh YouTube episodes via RSS every hour.",
    year: "2026",
    role: "Designer & engineer",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Drizzle", "GSAP"],
    metric: "6 Ethiopian languages · live",
    status: "case-study",
    span: "default",
    image: "lhf-ethiopia",
    category: "faith",
    liveStatus: "live",
  },
  {
    slug: "drbrug",
    title: "Dr. Brug Archive",
    subtitle:
      "Searchable online archive collecting 40 years of Lutheran scholarship — publications, sermons, and podcast clips — with a full admin CMS.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js", "MDX", "Search"],
    metric: "Live · profbrug.org",
    repo: "https://github.com/Cherireal7/drbrug",
    status: "case-study",
    span: "default",
    image: "drbrug",
    category: "faith",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "geez-transcribe",
    title: "Ge'ez Transcribe",
    subtitle:
      "In-browser Tesseract.js + pdf.js pipeline that turns scanned Ge'ez PDFs into structured, exportable text — no upload, no server.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js 16", "React 19", "Tesseract.js", "pdf.js", "Tailwind v4"],
    metric: "100% client-side",
    status: "case-study",
    span: "default",
    accent: "blue",
    image: "geez-transcribe",
    category: "research",
    liveStatus: "live",
  },
  {
    slug: "liturgical-data-engine",
    title: "Liturgical Data Engine",
    subtitle:
      "TypeScript port of the Ethiopian Bahire Hasab computus + full Mekane Yesus three-year lectionary, served as an open dashboard and JSON dataset.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js 16", "React 19", "TypeScript", "D3", "Tailwind v4"],
    metric: "Bahire Hasab · open source",
    status: "case-study",
    span: "default",
    image: "liturgical",
    category: "faith",
    liveStatus: "live",
  },
  {
    slug: "christian-worship-app",
    title: "Christian Worship App",
    subtitle:
      "Offline Expo companion — LSB one-year lectionary, Amharic hymnal, Small Catechism, Book of Concord confessions. No login, no backend.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Expo SDK 55", "React Native", "expo-router", "NativeWind"],
    metric: "Offline · zero backend",
    status: "case-study",
    span: "default",
    image: "christian-worship",
    category: "faith",
    liveStatus: "wip",
  },
  {
    slug: "classic-noodle",
    title: "Classic Noodle & Burger",
    subtitle:
      "Digital rebuild that lifted online orders 40% year-over-year for a Bishoftu restaurant. React + Vite storefront, content strategy, analytics.",
    year: "2024 — present",
    role: "Digital product & content",
    stack: ["React", "Vite", "Tailwind", "Analytics"],
    metric: "+40% online orders",
    status: "case-study",
    span: "default",
    accent: "blue",
    image: "classic-noodle",
    category: "marketing",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "doxa",
    title: "Doxa Innovations",
    subtitle:
      "Co-founded software studio — 8 shipped projects for Ethiopian and US clients since 2024. Marketing site, Payload CMS, light/dark theming.",
    year: "2024 — present",
    role: "Co-founder · Senior Frontend Engineer",
    stack: ["Next.js 16", "React 19", "Payload v3", "Tailwind v4"],
    metric: "8 client projects shipped",
    status: "case-study",
    span: "default",
    image: "doxa",
    category: "product",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "kla-constructions",
    title: "KLA Construction Equipment",
    subtitle:
      "US heavy-equipment e-commerce with a live eBay catalog sync — ~900 SKUs, n8n bots for customer support and Friday blasts. Doxa client; I led design, brand, and frontend.",
    year: "2025",
    role: "Lead designer · brand · frontend (Doxa)",
    stack: ["React", "Inertia.js", "Laravel", "Filament", "MySQL"],
    metric: "~900 SKUs live · US client",
    status: "case-study",
    span: "default",
    image: "kla-constructions",
    category: "product",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "pejavu",
    title: "Peja Vu",
    subtitle:
      "Chef-owned Sheboygan WI food truck + catering site. Full custom rebuild off Wix — bookings, menu CMS, catering quoting, Kitchen Console admin. Doxa client; lead design + full frontend.",
    year: "2025 — present",
    role: "Lead designer · brand · full frontend + CMS (Doxa)",
    stack: ["Next.js 16", "React 19", "Payload v3", "Postgres", "Tailwind v4", "Radix UI"],
    metric: "Live · US client",
    status: "case-study",
    span: "default",
    accent: "blue",
    image: "pejavu",
    category: "product",
    featured: true,
    liveStatus: "live",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
