const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  await Promise.all([
    page.coverage.startJSCoverage(),
    page.coverage.startCSSCoverage()
  ]);

  await page.goto('https://www.yahoo.com', { waitUntil: 'networkidle0' });

  // Give some extra time for scripts and CSS to load dynamically
  //await page.waitForTimeout(5000);

  const [jsCoverage, cssCoverage] = await Promise.all([
    page.coverage.stopJSCoverage(),
    page.coverage.stopCSSCoverage()
  ]);

  let totalBytes = 0;
  let usedBytes = 0;

  for (const entry of [...jsCoverage, ...cssCoverage]) {
    totalBytes += entry.text.length;
    for (const range of entry.ranges) {
      usedBytes += range.end - range.start;
    }
  }

  console.log(`Total bytes: ${totalBytes}`);
  console.log(`Used bytes: ${usedBytes}`);
  console.log(`Coverage: ${(usedBytes / totalBytes * 100).toFixed(2)}%`);

  await browser.close();
  process.exit(0);
})();

