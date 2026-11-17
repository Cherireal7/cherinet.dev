import type { ImageMetadata } from "astro";
import fida from "../assets/work/fida.png";
import bizbridge from "../assets/work/bizbridge.png";
import pejavu from "../assets/work/pejavu.png";
import kla from "../assets/work/kla.png";
import doxa from "../assets/work/doxa.png";
import drbrug from "../assets/work/drbrug.png";
import classicNoodle from "../assets/work/classic-noodle.png";

export type ProjectKind = "client" | "product" | "personal";
export type ProjectStatus = "live" | "building";

export interface Project {
  slug: string;
  title: string;
  /** One line. If it needs two, it's too long. */
  blurb: string;
  year: string;
  kind: ProjectKind;
  status: ProjectStatus;
  /** Three tools at most — the ones that matter. */
  stack: readonly string[];
  /** Headline number, shown on featured cards. */
  metric?: string;
  /** Where it was built, e.g. "Doxa · US client". */
  context?: string;
  image?: ImageMetadata;
  /** True when /work/<slug> has an MDX case study. */
  caseStudy?: boolean;
  live?: string;
  featured?: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: "fida-delivery",
    title: "FIDA Delivery",
    blurb: "Bishoftu's first multi-vertical delivery network, four production apps.",
    year: "2025 — now",
    kind: "product",
    status: "live",
    stack: ["React Native", "Next.js", "Design system"],
    metric: "500+ deliveries · 18+ partners",
    context: "Co-founder",
    image: fida,
    caseStudy: true,
    live: "https://fidadelivery.com",
    featured: true,
  },
  {
    slug: "manolis",
    title: "Manoli's Provisions",
    blurb: "Shop and staff admin for a US farm-to-table food business.",
    year: "2026 — now",
    kind: "client",
    status: "building",
    stack: ["React 19", "TanStack Query", "OAuth + PKCE"],
    metric: "JS bundle −83%",
    context: "Doxa · US client",
  },
  {
    slug: "happy-heron-inventory",
    title: "Happy Heron Inventory",
    blurb: "31-page inventory and traceability admin with offline counts.",
    year: "2026 — now",
    kind: "client",
    status: "building",
    stack: ["React 19", "React Router 7", "Playwright"],
    metric: "400+ tests",
    context: "Doxa · US client",
  },
  {
    slug: "bizbridge",
    title: "BizBridge Ethiopia",
    blurb: "Bilingual business-setup intelligence for all 518 Ethiopian sectors.",
    year: "2025 — now",
    kind: "product",
    status: "live",
    stack: ["Next.js", "Payload", "Drizzle"],
    metric: "518 sectors · EN / AM",
    context: "Doxa product",
    image: bizbridge,
    caseStudy: true,
    featured: true,
  },
  {
    slug: "pejavu",
    title: "Peja Vu",
    blurb: "Food truck and catering site, rebuilt from Wix to custom Next.js.",
    year: "2025",
    kind: "client",
    status: "live",
    stack: ["Next.js 16", "Payload", "Radix"],
    metric: "Bookings · menu CMS · catering quotes",
    context: "Doxa · US client",
    image: pejavu,
    caseStudy: true,
    featured: true,
  },
  {
    slug: "rare-bird-kitchen",
    title: "Rare Bird Kitchen",
    blurb: "Restaurant ordering site: menu builder, cart, delivery and checkout.",
    year: "2026",
    kind: "client",
    status: "building",
    stack: ["Next.js", "TypeScript", "Laravel API"],
    context: "Doxa · US client",
  },
  {
    slug: "kla-constructions",
    title: "KLA Construction Equipment",
    blurb: "Heavy-equipment store with a live eBay sync across ~900 SKUs.",
    year: "2025",
    kind: "client",
    status: "live",
    stack: ["React", "Inertia", "Laravel"],
    context: "Doxa · US client",
    image: kla,
    caseStudy: true,
  },
  {
    slug: "doxa-code",
    title: "Doxa Code",
    blurb: "Desktop app that runs Claude Code and Codex behind one window.",
    year: "2026 — now",
    kind: "product",
    status: "live",
    stack: ["Electron", "React", "TypeScript"],
    context: "Doxa product",
  },
  {
    slug: "doxa",
    title: "Doxa Innovations",
    blurb: "The studio I co-founded: site, CMS and token-driven theming.",
    year: "2024 — now",
    kind: "product",
    status: "live",
    stack: ["Next.js 16", "Payload", "Tailwind v4"],
    context: "Co-founder",
    image: doxa,
    caseStudy: true,
  },
  {
    slug: "lhf-ethiopia",
    title: "Lutheran Heritage Foundation",
    blurb: "Book-request site and CMS in six Ethiopian languages.",
    year: "2026",
    kind: "client",
    status: "live",
    stack: ["Next.js 16", "Drizzle", "GSAP"],
    caseStudy: true,
    live: "https://lhfethiopia.org",
  },
  {
    slug: "classic-noodle",
    title: "Classic Noodle & Burger",
    blurb: "Brand, storefront and analytics that lifted online orders 40%.",
    year: "2024",
    kind: "client",
    status: "live",
    stack: ["React", "Vite", "Analytics"],
    metric: "+40% online orders",
    image: classicNoodle,
    caseStudy: true,
  },
  {
    slug: "drbrug",
    title: "Dr. Brug Archive",
    blurb: "Searchable archive of 40 years of scholarship, with a full CMS.",
    year: "2025",
    kind: "client",
    status: "live",
    stack: ["Next.js", "MDX", "Search"],
    image: drbrug,
    caseStudy: true,
  },
  {
    slug: "geez-transcribe",
    title: "Ge'ez Transcribe",
    blurb: "Turns scanned Ge'ez PDFs into text, fully in the browser.",
    year: "2025",
    kind: "personal",
    status: "live",
    stack: ["Next.js", "Tesseract.js", "pdf.js"],
    caseStudy: true,
    live: "https://geez-transcribe.vercel.app",
  },
  {
    slug: "liturgical-data-engine",
    title: "Liturgical Data Engine",
    blurb: "Ethiopian calendar computus and lectionary as open data.",
    year: "2025",
    kind: "personal",
    status: "live",
    stack: ["TypeScript", "Next.js", "D3"],
    caseStudy: true,
    live: "https://liturgical-data-engine.vercel.app",
  },
  {
    slug: "christian-worship-app",
    title: "Christian Worship App",
    blurb: "Offline lectionary, hymnal and catechism. No login, no backend.",
    year: "2025",
    kind: "personal",
    status: "building",
    stack: ["Expo", "React Native", "NativeWind"],
    caseStudy: true,
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);
export const buildingNow = projects.filter((p) => p.status === "building" && p.kind === "client");
export const caseStudies = projects.filter((p) => p.caseStudy);

export const kindLabel: Record<ProjectKind, string> = {
  client: "Client",
  product: "Product",
  personal: "Personal",
};
