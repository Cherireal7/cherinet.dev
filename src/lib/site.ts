export const site = {
  name: "Cherinet Demeke",
  shortName: "Cherinet",
  role: "Co-founder & Senior Frontend Engineer",
  tagline:
    "Product designer, researcher, and frontend engineer. I run the full UX loop — research, strategy, design, build, measure — from one operator.",
  location: "Bishoftu, Ethiopia",
  availability: "Available now · full-time preferred, contract on request. Remote, GMT+3.",
  email: "cheridemeke7@gmail.com",
  phone: "+251 989 932 714",
  url: "https://cherinet-portfolio-one.vercel.app",
  social: {
    github: { label: "GitHub", href: "https://github.com/Cherireal7" },
    linkedin: {
      label: "LinkedIn",
      href: "https://linkedin.com/in/cherinet-Demeke",
    },
  },
} as const;

export const nav = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Now", href: "/now" },
  { label: "Writing", href: "/writing" },
  { label: "CV", href: "/cv" },
] as const;

export const footerNav = {
  Site: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Now", href: "/now" },
    { label: "How I work", href: "/how-i-work" },
    { label: "CV", href: "/cv" },
  ],
  Explore: [
    { label: "Writing", href: "/writing" },
    { label: "Stack / Uses", href: "/stack" },
    { label: "Tools I built", href: "/tools" },
    { label: "Design system", href: "/system" },
    { label: "RSS", href: "/rss.xml" },
  ],
  Reach: [
    { label: "Contact", href: "/contact" },
    { label: "Email", href: "mailto:cheridemeke7@gmail.com" },
    { label: "GitHub", href: "https://github.com/Cherireal7" },
    { label: "LinkedIn", href: "https://linkedin.com/in/cherinet-Demeke" },
  ],
} as const;
