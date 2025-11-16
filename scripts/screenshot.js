const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const pages = [
  { name: 'index', file: 'index.html' },
  { name: 'pizza', file: 'pizza.html' },
  { name: 'burger', file: 'burger.html' },
  { name: 'beverage', file: 'beverage.html' },
  { name: 'tacos', file: 'tacos.html' },
  { name: 'garlic-bread', file: 'garlic-bread.html' },
  { name: 'dessert', file: 'dessert.html' }
];

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  try {
    for (const p of pages) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1920, height: 1080 });
      const url = 'file://' + path.resolve(__dirname, '..', p.file);
      console.log('Loading', url);
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      const outDir = path.resolve(__dirname, '..', 'assets', 'screenshots');
      if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
      const out = path.join(outDir, `${p.name}.png`);
      await page.screenshot({ path: out, fullPage: false });
      console.log('Saved', out);
      await page.close();
    }
  } catch (err) {
    console.error('Error capturing screenshots:', err);
    process.exitCode = 2;
  } finally {
    await browser.close();
  }
})();
