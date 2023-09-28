const { test } = require('playwright/test');

test("default test", async ({ page1 }) => {
  const browser = await chromium.launch({
    executablePath: '/usr/bin/chromium-browser', // Updated path to Chromium executable
    headless: false, // Run in non-headless mode
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://example.com');
  console.log(await page.title());

  await browser.close();
});
