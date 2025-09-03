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
        // can slow the test down to view it 
        const browser = await puppeteer.launch({
            headless: false, 
            slowMo: 100, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://example.com/');
        // assertion
        await page.waitForSelector('body div h1');
        // reload/refreshing the browser
        await page.reload();
        await page.waitForSelector('body div h1');
        // navigates to other website
        await page.goto('https://dev.to/');
        await page.waitForSelector('.site-logo__img');
        // simulates clicking the go back button in browser
        await page.goBack();
        await page.waitForSelector('body div h1');
        // simulates clicking the to go forward button in browser
        await page.goForward();
        await page.waitForSelector('.site-logo__img');
        await browser.close();
    });
    it('inputs, buttons and dropdowns', async function() {
        const browser = await puppeteer.launch({
            headless: false, 
            slowMo: 100, 
            devtools: true});
        const page = await browser.newPage();
        await page.goto('https://devexpress.github.io/testcafe/example/')
        // best not to use delay as it will slow down the test automation
        await page.type('#developer-name', 'DJ', {delay: 0});
        // buttons
        // clickCount repeatedly clicks element for the said number of times
        await page.click('#tried-test-cafe', {clickCount: 1});
        // dropdowns
        await page.select('#preferred-interface', 'Javascript API');
        // text area 
        const message = 'Lets fill the message with some text'
        await page.type('#comments', message);
        await page.click('#submit-button');
        await page.waitForSelector('.result-content')
        await browser.close();

    });
});