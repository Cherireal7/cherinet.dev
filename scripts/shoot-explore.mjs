import puppeteer from 'file:///C:/Users/hp/Documents/Personal/fida-launch-carousel/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { access } from 'node:fs/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'public', 'projects', 'fida-website', 'explore.png');

async function findChrome() {
  for (const p of [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  ]) { try { await access(p); return p; } catch {} }
  throw new Error('no browser');
}

const browser = await puppeteer.launch({
  executablePath: await findChrome(),
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('https://fidadelivery.com/explore', { waitUntil: 'networkidle0', timeout: 60_000 });
  // Wait for the map canvas/tiles to actually appear
  try {
    await page.waitForSelector('canvas.maplibregl-canvas, .maplibregl-map, .leaflet-container', { timeout: 25_000 });
  } catch {}
  // Give MapLibre time to fetch and render tiles
  await new Promise((r) => setTimeout(r, 8000));
  await page.screenshot({ path: OUT, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('✓ explore.png');
} finally { await browser.close(); }
