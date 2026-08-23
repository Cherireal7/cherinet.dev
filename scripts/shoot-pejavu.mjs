import puppeteer from 'file:///C:/Users/hp/Documents/Personal/fida-launch-carousel/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mkdir, access } from 'node:fs/promises';
import { platform } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '..', 'public', 'projects', 'pejavu');

const BASE = 'https://pejavu.doxaplc.com';
const shots = [
  { path: '/',              file: 'home.png',        w: 1440, h: 900,  fullPage: false },
  { path: '/menu',          file: 'menu.png',        w: 1440, h: 1200, fullPage: false },
  { path: '/catering',      file: 'catering.png',    w: 1440, h: 1200, fullPage: false },
  { path: '/book',          file: 'book.png',        w: 1440, h: 900,  fullPage: false },
  { path: '/about',         file: 'about.png',       w: 1440, h: 1200, fullPage: false },
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

await mkdir(OUT_DIR, { recursive: true });
const executablePath = await findChrome();
console.log(`Using: ${executablePath}`);

const browser = await puppeteer.launch({
  executablePath,
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
  for (const s of shots) {
    await page.setViewport({ width: s.w, height: s.h, deviceScaleFactor: 2 });
    const url = BASE + s.path;
    console.log(`→ ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 45_000 });
    } catch (e) {
      console.log(`  ! nav timeout, continuing: ${e.message}`);
    }
    try {
      await page.evaluate(async () => {
        if (document.fonts && document.fonts.ready) await document.fonts.ready;
      });
    } catch {}
    // Allow motion + images to settle
    await new Promise((r) => setTimeout(r, 1200));
    const outPath = join(OUT_DIR, s.file);
    await page.screenshot({
      path: outPath,
      fullPage: s.fullPage,
      clip: s.fullPage ? undefined : { x: 0, y: 0, width: s.w, height: s.h },
    });
    console.log(`  ✓ ${s.file}`);
  }
} finally {
  await browser.close();
}
console.log('Done.');
