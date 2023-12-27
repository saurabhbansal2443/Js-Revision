import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.wikipedia.org/');

  await page.setViewport({width: 1080, height: 1024});

  await page.type('#searchInput', 'Java');
  await page.click(`[data-jsl10n="search-input-button"]`)
  
})();