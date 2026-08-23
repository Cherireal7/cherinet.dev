import puppeteer from 'file:///C:/Users/hp/Documents/Personal/fida-launch-carousel/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, access } from 'node:fs/promises';
import { platform } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public', 'projects');

const retries = [
  { slug: 'bizbridge',      url: 'https://biz.doxaplc.com/sectors',  file: 'sectors.png',  w: 1440, h: 1400 },
  { slug: 'bizbridge',      url: 'https://biz.doxaplc.com/suggest',  file: 'suggest.png',  w: 1440, h: 1200 },
  { slug: 'classic-noodle', url: 'https://classicnoodle.com/menu',   file: 'menu.png',     w: 1440, h: 1400 },
];

async function findChrome() {
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
  ];
  for (const p of candidates) {
    try { await access(p); return p; } catch {}
  }
  throw new Error('No Chrome/Edge found.');
}

const executablePath = await findChrome();
const browser = await puppeteer.launch({
  executablePath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
  for (const r of retries) {
    await page.setViewport({ width: r.w, height: r.h, deviceScaleFactor: 2 });
    console.log(`→ ${r.url}`);
    try {
      // Looser wait: just dom-content-loaded, longer timeout, then hard sleep for images
      await page.goto(r.url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
      try {
        await page.evaluate(async () => {
          if (document.fonts && document.fonts.ready) await document.fonts.ready;
        });
      } catch {}
      // Wait for images to load or 6s, whichever comes first
      await Promise.race([
        page.evaluate(() => Promise.all(
          Array.from(document.images).map((img) =>
            img.complete ? Promise.resolve() : new Promise((res) => { img.onload = img.onerror = res; })
          )
        )),
        new Promise((res) => setTimeout(res, 6000)),
      ]);
      const outDir = join(PUBLIC, r.slug);
      await mkdir(outDir, { recursive: true });
      const outPath = join(outDir, r.file);
      await page.screenshot({
        path: outPath,
        clip: { x: 0, y: 0, width: r.w, height: r.h },
      });
      console.log(`  ✓ ${r.slug}/${r.file}`);
    } catch (e) {
      console.log(`  ✗ ${r.slug}/${r.file}  (${e.message.split('\n')[0]})`);
    }
  }
} finally {
  await browser.close();
}
console.log('Done.');
