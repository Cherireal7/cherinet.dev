// Curated Unsplash photo IDs by theme. Photos are free to use under the
// Unsplash License (https://unsplash.com/license). When a real screenshot or
// commissioned shot is available, replace the tag with a local /public path.

export type ImageTag =
  | "fida-delivery"
  | "fida-website"
  | "bizbridge"
  | "lhf-ethiopia"
  | "classic-noodle"
  | "yeneta-master"
  | "doxa"
  | "drbrug"
  | "geez-transcribe"
  | "liturgical"
  | "christian-worship"
  | "project-nexus"
  | "apartment-guide"
  | "ai-workflows"
  | "maor-seminary"
  | "kla-constructions"
  | "myseed"
  | "zoe-delivery"
  | "scholten"
  | "zoa"
  | "books-old"
  | "manuscript"
  | "church-interior"
  | "code-editor"
  | "design-tools"
  | "workspace"
  | "process-notes"
  | "city-bishoftu"
  | "philosophy"
  | "science-lab"
  | "history-archive";

interface PhotoMeta {
  // Unsplash backup — used when no `local` is set
  id: string;
  credit: string;
  href: string;
  // Override with a local file under /public when available. When set, img()
  // returns the local path verbatim and ignores the Unsplash params.
  // `isLogo` lets the consumer apply logo-centered styling instead of cover-fill.
  local?: { src: string; isLogo?: boolean };
}

const PHOTOS: Record<ImageTag, PhotoMeta> = {
  // Case study heroes
  "fida-delivery": {
    id: "1601158935942-52255782d322",
    credit: "Photo by Mubarak Showole",
    href: "https://unsplash.com/photos/man-riding-on-motorcycle-RYAyXAYxq3o",
    local: { src: "/projects/fida/feature.png" },
  },
  "fida-website": {
    id: "1524661135-423995f22d0b",
    credit: "Photo by Tamas Tuzes-Katai",
    href: "https://unsplash.com/photos/black-and-white-textile-on-brown-wooden-table-rEn-AdBr3Ig",
    local: { src: "/projects/fida-website/cover.png" },
  },
  bizbridge: {
    id: "1551836022-deb4988cc6c0",
    credit: "Photo by Sebastian Herrmann",
    href: "https://unsplash.com/photos/people-having-meeting-NbtIDoFKGO8",
  },
  "lhf-ethiopia": {
    id: "1507434965-365f8da4c970",
    credit: "Photo by Edward Cisneros",
    href: "https://unsplash.com/photos/people-inside-cathedral-_H6wpor9mjs",
    local: { src: "/projects/lhf/logo.png", isLogo: true },
  },
  "classic-noodle": {
    id: "1569718212165-3a8278d5f624",
    credit: "Photo by alexander mils",
    href: "https://unsplash.com/photos/brown-and-white-noodles-in-white-ceramic-bowl-w7dMlCmnsKw",
    local: { src: "/projects/classic-noodle/logo.png", isLogo: true },
  },
  "yeneta-master": {
    id: "1497486751825-1233686d5d80",
    credit: "Photo by Annie Spratt",
    href: "https://unsplash.com/photos/children-sitting-on-chairs-inside-classroom-LiNIONbajm4",
  },
  doxa: {
    id: "1551434678-e076c223a692",
    credit: "Photo by Alvaro Reyes",
    href: "https://unsplash.com/photos/two-people-drawing-on-whiteboard-qWwpHwip31M",
  },

  // New GitHub projects
  drbrug: {
    id: "1481627834876-b7833e8f5570",
    credit: "Photo by Patrick Tomasso",
    href: "https://unsplash.com/photos/books-on-bookshelf-Oaqk7qqNh_c",
  },
  "geez-transcribe": {
    id: "1568667256549-094345857637",
    credit: "Photo by Birmingham Museums Trust",
    href: "https://unsplash.com/photos/old-manuscript-page-7gKEr7E3CSk",
  },
  liturgical: {
    id: "1438232992991-995b7058bbb3",
    credit: "Photo by Josh Applegate",
    href: "https://unsplash.com/photos/lit-candles-inside-cathedral-cu7xQXAHTSk",
  },
  "christian-worship": {
    id: "1493804714600-6edb1cd93080",
    credit: "Photo by Edward Cisneros",
    href: "https://unsplash.com/photos/group-of-people-raising-their-hands-c-S4UVitvNI",
  },
  "project-nexus": {
    id: "1485846234645-a62644f84728",
    credit: "Photo by Jeremy Yap",
    href: "https://unsplash.com/photos/people-inside-cinema-jn1u5ATt87E",
  },
  "apartment-guide": {
    id: "1502672023488-70e25813eb80",
    credit: "Photo by Spacejoy",
    href: "https://unsplash.com/photos/yellow-leather-couch-near-glass-window-9M66C_w_ToM",
  },
  "ai-workflows": {
    id: "1620712943543-bcc4688e7485",
    credit: "Photo by Markus Spiske",
    href: "https://unsplash.com/photos/colorful-software-or-web-code-on-a-computer-monitor-iar-afB0QQw",
  },

  // Doxa client work
  "maor-seminary": {
    id: "1438232992991-995b7058bbb3",
    credit: "Photo by Josh Applegate",
    href: "https://unsplash.com/photos/lit-candles-inside-cathedral-cu7xQXAHTSk",
  },
  "kla-constructions": {
    id: "1581094288338-2314dddb7ece",
    credit: "Photo by Josh Olalde",
    href: "https://unsplash.com/photos/construction-equipment-on-site-X1P1_EDNnok",
  },
  myseed: {
    id: "1497486751825-1233686d5d80",
    credit: "Photo by Annie Spratt",
    href: "https://unsplash.com/photos/children-sitting-on-chairs-inside-classroom-LiNIONbajm4",
  },
  "zoe-delivery": {
    id: "1416879595882-3373a0480b5b",
    credit: "Photo by Annie Spratt",
    href: "https://unsplash.com/photos/green-plants-on-white-pots-h0_SKZARQiI",
  },
  scholten: {
    id: "1581094288338-2314dddb7ece",
    credit: "Photo by Josh Olalde",
    href: "https://unsplash.com/photos/construction-equipment-on-site-X1P1_EDNnok",
  },
  zoa: {
    id: "1488521787991-ed7bbaae773c",
    credit: "Photo by Larm Rmah",
    href: "https://unsplash.com/photos/people-walking-in-refugee-camp-AEaTUnvneik",
  },

  // Thematic / page-level
  "books-old": {
    id: "1524995997946-a1c2e315a42f",
    credit: "Photo by Aaron Burden",
    href: "https://unsplash.com/photos/open-book-on-brown-wooden-table-y02jEX_B0O0",
  },
  manuscript: {
    id: "1455390582262-044cdead277a",
    credit: "Photo by Aaron Burden",
    href: "https://unsplash.com/photos/open-book-page-aBP18S2vK7w",
  },
  "church-interior": {
    id: "1519491050282-cf00c82424b4",
    credit: "Photo by Ümit Yıldırım",
    href: "https://unsplash.com/photos/inside-of-cathedral-Pn6iimgM-lo",
  },
  "code-editor": {
    id: "1517694712202-14dd9538aa97",
    credit: "Photo by Fotis Fotopoulos",
    href: "https://unsplash.com/photos/code-on-monitor-DuHKoV44prg",
  },
  "design-tools": {
    id: "1561070791-2526d30994b8",
    credit: "Photo by Theme Inn",
    href: "https://unsplash.com/photos/macbook-pro-on-white-desk-DkO95gDoNvE",
  },
  workspace: {
    id: "1519389950473-47ba0277781c",
    credit: "Photo by Marvin Meyer",
    href: "https://unsplash.com/photos/people-around-monitors-SYTO3xs06fU",
  },
  "process-notes": {
    id: "1454165804606-c3d57bc86b40",
    credit: "Photo by Kelly Sikkema",
    href: "https://unsplash.com/photos/notebook-with-pen-1-aA2Fadydc",
  },
  "city-bishoftu": {
    id: "1577086664693-894d8405334a",
    credit: "Photo by Trevor Cole",
    href: "https://unsplash.com/photos/ethiopia-landscape-pPfdFqBOQYU",
  },
  philosophy: {
    id: "1604866830893-c13cafa515d5",
    credit: "Photo by Giammarco Boscaro",
    href: "https://unsplash.com/photos/books-on-shelves-zeH-ljawHtg",
  },
  "science-lab": {
    id: "1532187863486-abf9dbad1b69",
    credit: "Photo by Hans Reniers",
    href: "https://unsplash.com/photos/lab-glassware-lQGJCMY5qcM",
  },
  "history-archive": {
    id: "1568667256549-094345857637",
    credit: "Photo by Birmingham Museums Trust",
    href: "https://unsplash.com/photos/old-manuscript-page-7gKEr7E3CSk",
  },
};

interface ImgOptions {
  w?: number;
  h?: number;
  q?: number;
  fit?: "crop" | "max";
}

export function img(tag: ImageTag, opts: ImgOptions = {}): string {
  const photo = PHOTOS[tag];
  if (photo.local) return photo.local.src;
  const { w = 1600, h, q = 80, fit = "crop" } = opts;
  const params = new URLSearchParams({
    auto: "format",
    fit,
    w: String(w),
    q: String(q),
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${photo.id}?${params.toString()}`;
}

export function imgCredit(tag: ImageTag) {
  return PHOTOS[tag];
}

// "logo" → centered on a tinted background. "photo" → object-cover full bleed.
export function imgKind(tag: ImageTag): "logo" | "photo" {
  return PHOTOS[tag].local?.isLogo ? "logo" : "photo";
}

// True when the asset is owned (no third-party credit needed).
export function imgIsLocal(tag: ImageTag): boolean {
  return Boolean(PHOTOS[tag].local);
}
