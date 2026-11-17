// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cherinet-portfolio-one.vercel.app',
  integrations: [mdx(), sitemap()],
  // Pages retired in the 2026-11 redesign: keep old links working.
  redirects: {
    '/about': '/#about',
    '/contact': '/#contact',
    '/now': '/',
    '/how-i-work': '/cv',
    '/stack': '/cv',
    '/system': '/',
    '/tools': '/work',
    '/writing': '/',
    '/writing/why-a-portfolio': '/',
    '/rss.xml': '/',
    '/resume': '/Cherinet-Demeke-Resume.pdf',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
