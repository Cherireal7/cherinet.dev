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
    liveStatus: "in-development",
  },
  {
    slug: "bizbridge",
    title: "BizBridge Ethiopia",
    subtitle:
      "Freemium business-setup platform — sector library, Chapa + Stripe payments, expert booking via Cal.com.",
    year: "2025 — present",
    role: "Frontend lead",
    stack: ["Next.js 15", "Payload v3", "Fastify", "Drizzle", "Better Auth"],
    metric: "519 sectors indexed",
    status: "case-study",
    span: "default",
    image: "bizbridge",
    category: "product",
    featured: true,
    liveStatus: "private-beta",
  },
  {
    slug: "fida-website",
    title: "FIDA Website",
    subtitle:
      "Marketing site + Telegram Mini App with a live MapLibre coverage view.",
    year: "2026",
    role: "Designer & engineer",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "MapLibre GL", "GSAP"],
    metric: "Live · fidadelivery.et",
    status: "case-study",
    span: "default",
    image: "fida-website",
    category: "marketing",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "lhf-ethiopia",
    title: "Lutheran Heritage Foundation — Ethiopia",
    subtitle:
      "Marketing site + CMS for confessional Lutheran book distribution in six Ethiopian languages.",
    year: "2026",
    role: "Designer & engineer",
    stack: ["Next.js 16", "React 19", "Tailwind v4", "Drizzle", "GSAP"],
    metric: "6 Ethiopian languages",
    status: "case-study",
    span: "default",
    image: "lhf-ethiopia",
    category: "faith",
    featured: true,
    liveStatus: "live",
  },
  {
    slug: "drbrug",
    title: "Dr. Brug Archive",
    subtitle:
      "Online archive and personal site for Dr. John F. Brug — Lutheran theologian. Long-form scholarship, searchable.",
    year: "2025",
    role: "Designer & engineer",
    stack: ["Next.js", "MDX", "Search"],
    metric: "Long-form scholarship archive",
    repo: "https://github.com/Cherireal7/drbrug",
    status: "case-study",
    span: "default",
    image: "drbrug",
    category: "faith",
    featured: true,
    liveStatus: "wip",
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
    liveStatus: "live",
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
    liveStatus: "live",
  },
  {
    slug: "kla-constructions",
    title: "KLA Construction Equipment",
    subtitle:
      "E-commerce platform for a US construction-equipment vendor, with a live eBay catalog import. Doxa client — I led design, brand, and the frontend.",
    year: "2025",
    role: "Lead designer · brand · frontend (Doxa)",
    stack: ["React", "Inertia.js", "Laravel", "Filament", "MySQL"],
    metric: "~900 SKUs synced from eBay",
    status: "case-study",
    span: "default",
    image: "kla-constructions",
    category: "product",
    liveStatus: "live",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
