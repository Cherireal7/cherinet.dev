import puppeteer from 'file:///C:/Users/hp/Documents/Personal/fida-launch-carousel/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, access } from 'node:fs/promises';
import { platform } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public', 'projects');

// A page shot at 1440×900 desktop resolution unless overridden.
const D_W = 1440;
const D_H = 900;

const sites = [
  {
    slug: 'bizbridge',
    base: 'https://biz.doxaplc.com',
    shots: [
      { path: '/',                     file: 'home.png' },
      { path: '/sectors',              file: 'sectors.png',   h: 1200 },
      { path: '/suggest',              file: 'suggest.png',   h: 1200 },
    ],
  },
  {
    slug: 'drbrug',
    base: 'https://profbrug.org',
    shots: [
      { path: '/',                     file: 'home.png' },
      { path: '/publications',         file: 'publications.png', h: 1200 },
      { path: '/library',              file: 'library.png',   h: 1200 },
      { path: '/blog',                 file: 'blog.png' },
    ],
  },
  {
    slug: 'doxa',
    base: 'https://doxaplc.com',
    shots: [
      { path: '/',                     file: 'home.png' },
      { path: '/work',                 file: 'work.png',      h: 1200 },
      { path: '/services',             file: 'services.png',  h: 1200 },
    ],
  },
  {
    slug: 'classic-noodle',
    base: 'https://classicnoodle.com',
    shots: [
      { path: '/',                     file: 'home.png' },
      { path: '/menu',                 file: 'menu.png',      h: 1200 },
    ],
  },
];

async function findChrome() {
  const candidates = platform() === 'win32'
    ? [
        'C:/Program Files/Google/Chrome/Application/chrome.exe',
        'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
        'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
      ]
    : ['/usr/bin/google-chrome', '/usr/bin/chromium'];
  for (const p of candidates) {
    try { await access(p); return p; } catch {}
  }
  throw new Error('No Chrome/Edge found.');
}

const executablePath = await findChrome();
console.log(`Using: ${executablePath}`);

const browser = await puppeteer.launch({
  executablePath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const results = { ok: [], failed: [] };

try {
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
  for (const site of sites) {
    const outDir = join(PUBLIC, site.slug);
    await mkdir(outDir, { recursive: true });
    console.log(`\n[${site.slug}] → ${site.base}`);
    for (const s of site.shots) {
      const w = s.w || D_W;
      const h = s.h || D_H;
      await page.setViewport({ width: w, height: h, deviceScaleFactor: 2 });
      const url = site.base + s.path;
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 45_000 });
        try {
          await page.evaluate(async () => {
            if (document.fonts && document.fonts.ready) await document.fonts.ready;
          });
        } catch {}
        await new Promise((r) => setTimeout(r, 1400));
        const outPath = join(outDir, s.file);
        await page.screenshot({
          path: outPath,
          clip: { x: 0, y: 0, width: w, height: h },
        });
        console.log(`  ✓ ${s.file}`);
        results.ok.push(`${site.slug}/${s.file}`);
      } catch (e) {
        console.log(`  ✗ ${s.file}  (${e.message.split('\n')[0]})`);
        results.failed.push(`${site.slug}/${s.file}`);
      }
    }
  }
} finally {
  await browser.close();
}

console.log(`\nDone. ${results.ok.length} ok, ${results.failed.length} failed.`);
if (results.failed.length) console.log('Failed:', results.failed.join(', '));
