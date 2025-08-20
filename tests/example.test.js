// requires the module to access the puppeteer module
// gives us access to everything in puppeteer package
const puppeteer = require('puppeteer');

// describe = wrapper around test steps, depends on the context
describe('My First Puppeteer Test', () => {
    // can have many it blocks/ test steps inside the describe block
    // puppeteer uses async functions 
    it('should launch the browser', async function() {
        // headless = always opens the browser 
        // headed = does the test in the background
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        // assertion
        await page.waitForSelector('body div h1');
        await browser.close();
    });
});