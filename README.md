# learning-puppeteer

Learning Puppeteer for Front End Performance Testing.

## Topics Covered

- Project Setup
- Prettier Setup
- Launch Chrome Browser
- Browser Options
- Reload / Refresh Browser
- Go Back & Forward
- Inputs
- Buttons
- Dropdowns
- Extracting URL, Titles, Text and Element Counts
- Assertions
- Timeouts

## What is Front End Performance Testing?

- Frontend performance testing evaluates the speed and responsiveness of a website or web application from the user’s perspective.
- A frontend performance test is usually performed to ensure that an application's end-user experience is ideal.
- It is an interface-level test that measures round-trip metrics to identify issues like rendering speed, UI lags, and sudden shifts in page elements.
- The fewer the requests and the quicker the response times, the better the frontend performance.

## Front End vs Back End Performance Testing

- Front End
  - Testing the user interface visible to the user.
  - Typically black box testing as this means you don’t require knowledge of the underlying code.
  - Front end testing is the process of testing the frontend side of the application to ensure there are no glitches, functionality breaks or significant problems present in the application.
  - A well driven front end test makes the product bug free and ensures the user will get a great user-experience.
- Back End
  - Back end testing ensures an application’s database and server-side functionality are working as intended.
  - Typically white box, meaning the tester will interact with the code logic behind any functionality.
  - We use JMeter for API endpoint testing which is a backend testing technique.

### How can we benefit from Front End Testing

- Frontend performance testing allows businesses to explore the user interface and ensure that every element loads efficiently.
- Speed is synonymous with efficiency.
- Optimising page load times through frontend performance testing is the key to addressing this issue and retaining customers.
- Frontend performance testing helps businesses identify and resolve load-related issues before a website or application is launched.

## Key Metrics for Performance Front End Testing

- **Performance Score**
  - This is a comprehensive rating that takes into account various aspects of page performance.
- **Speed Index**
  - This metric measures the average time it takes for all visible parts of a page to load.
  - A lower Speed Index indicates that the content is loading quickly, which is essential for keeping users engaged.
- **First Contentful Paint (FCP)**
  - FCP measures the time it takes for the first piece of content to appear on the screen.
  - This is a critical moment in the user experience, as it gives the impression that the page is loading and functioning correctly.
- **Time to Interactive (TTI)**
  - TTI tracks how long it takes for a page to become fully interactive, meaning that users can click on buttons, fill out forms, or interact with other elements without delay.
  - A fast TTI is vital for ensuring that users can engage with the site as soon as possible.
- **First Meaningful Paint (FMP)**
  - This metric measures when the primary content of a page becomes visible. It’s important because it represents the point at which the user feels the page has loaded enough to start engaging with it.
- **Input Latency**
  - Input latency measures the delay between a user’s input (like a click or keystroke) and the page’s response.
  - High input latency can lead to frustration and negatively impact the user experience.

## About Puppeteer

- Puppeteer is a JavaScript (Node.js) library which provides a high-level API to control Chrome or Firefox over the [DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) or [WebDriver BiDi](https://pptr.dev/webdriver-bidi). Puppeteer runs in the headless (no visible UI) by default.
- Use it to automate anything in the browser, from taking screenshots and generating PDFs to navigating through and testing complex UIs and analysing performance.
- It is developed by the Chrome DevTools team released Puppeteer in 2017.
- Google owns Puppeteer and the Chrome team maintains it, but it's developed as an open-source project.
- Very quick test execution compared to other testing frameworks.
- Functions are readable even for non-technical people

## Notes

```JavaScript
const puppeteer = require('puppeteer');
```

- requires the module to access to puppeteer - gives us access to everything in puppeteer package.

```JavaScript
describe('My First Puppeteer Test'() => {};
```

- describe = wrapper around test steps, depends on the context.
  
```JavaScript
it('should launch the browser', async function() {} );
```

- can have many it blocks/ test steps inside the describe block.
- puppeteer uses async functions.

```JavaScript
const browser = await puppeteer.launch({headless: false, slowMo: 500, devtools: true, devtools: true});
```

- headless = always opens the browser.
- headed = does the test in the background.
- can slow the test down with specified time to view the process.
- devtools can be opened during the tests.

```JavaScript
await page.reload();
```

- reload/refreshing the browser.

```JavaScript
await page.goBack();
await page.goForward();
```

- simulates clicking the go back/forward button in browser

```JavaScript
await page.type( 'dom element', 'typeWhatever', {delay: 0});
```

- inputs text.
- best not to use any delays otherwise it will lengthen the automation.

```JavaScript
 await page.click('#tried-test-cafe', {clickCount: 1});
```

- clicks buttons.
- clickCount repeatedly clicks element for the said number of times.

```JavaScript
await page.select('#preferred-interface', 'Javascript API');
```

- selects one of the dropdown options.

```JavaScript
await page.title();
await page.url();
await page.$eval('text', element => element.textContent);
await page.$$eval('p', element => element.length)

```

- extracts title, url, text and element count from the webpage.

```JavaScript
//overrides the default one of 30 seconds
await page.setDefaultTimeout(10000);
//overrides the timeout above
await page.setDefaultNavigationTimeout(20000)
```

- setting timeouts for the specific describe/it block
