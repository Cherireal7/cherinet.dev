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
    slug: "doxa",
    title: "Doxa Innovations",
    subtitle:
      "Co-founded studio shipping software, branding, and digital content for clients across Ethiopia and the US.",
    year: "2024 — present",
    role: "Co-founder · Senior Frontend Engineer",
    stack: ["React", "Next.js", "Tailwind", "Laravel", "PostgreSQL"],
    metric: "8 client projects shipped",
    status: "case-study",
    span: "default",
    image: "doxa",
    category: "product",
  },
  {
    slug: "kla-constructions",
    title: "KLA Construction Equipment",
    subtitle:
      "E-commerce platform for a US construction-equipment vendor, with a live eBay catalog import. Doxa client — I led design, brand, and the frontend.",
    year: "2025",
    role: "Lead designer · brand · frontend (Doxa)",
    stack: ["React", "Inertia.js", "Laravel", "Filament", "MySQL"],
    status: "case-study",
    span: "default",
    image: "kla-constructions",
    category: "product",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
