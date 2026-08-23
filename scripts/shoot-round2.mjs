import puppeteer from 'file:///C:/Users/hp/Documents/Personal/fida-launch-carousel/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, access } from 'node:fs/promises';
import { platform } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, '..', 'public', 'projects');

// Reshoot Doxa home (dismiss cookie banner first) + shoot FIDA website pages
const sites = [
  {
    slug: 'doxa',
    base: 'https://doxaplc.com',
    // Inject CSS to hide any typical cookie consent overlay
    dismissCookieCSS: `
      [class*="cookie" i], [class*="consent" i], [id*="cookie" i], [id*="consent" i],
      [aria-label*="cookie" i], [aria-label*="consent" i],
      [role="dialog"][aria-modal="true"] { display: none !important; visibility: hidden !important; }
    `,
    shots: [
      { path: '/', file: 'home.png', w: 1440, h: 900 },
    ],
  },
  {
    slug: 'fida-website',
    base: 'https://fidadelivery.com',
    shots: [
      { path: '/',            file: 'home.png',        w: 1440, h: 900,  looser: true },
      { path: '/restaurants', file: 'restaurants.png', w: 1440, h: 1200, looser: true },
      { path: '/explore',     file: 'explore.png',     w: 1440, h: 1200, looser: true },
      { path: '/about',       file: 'about.png',       w: 1440, h: 1200, looser: true },
    ],
  },
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
      await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 2 });
      const url = site.base + s.path;
      const wait = s.looser ? 'domcontentloaded' : 'networkidle2';
      try {
        await page.goto(url, { waitUntil: wait, timeout: 60_000 });
        if (site.dismissCookieCSS) {
          await page.addStyleTag({ content: site.dismissCookieCSS });
          // Also try to click any "reject all" or "accept all" button in case CSS hide misses
          try {
            await page.evaluate(() => {
              const buttons = Array.from(document.querySelectorAll('button, a'));
              for (const b of buttons) {
                const t = (b.textContent || '').trim().toLowerCase();
                if (/^(reject|accept)\s+(all|cookies?)/.test(t) || t === 'reject all' || t === 'accept all') {
                  b.click();
                  return;
                }
              }
            });
          } catch {}
        }
        try {
          await page.evaluate(async () => {
            if (document.fonts && document.fonts.ready) await document.fonts.ready;
          });
        } catch {}
        // Race image loading against a hard cap
        await Promise.race([
          page.evaluate(() => Promise.all(
            Array.from(document.images).map((img) =>
              img.complete ? Promise.resolve() : new Promise((res) => { img.onload = img.onerror = res; })
            )
          )),
          new Promise((res) => setTimeout(res, 6000)),
        ]);
        await new Promise((r) => setTimeout(r, 800));
        const outPath = join(outDir, s.file);
        await page.screenshot({
          path: outPath,
          clip: { x: 0, y: 0, width: s.w, height: s.h },
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
