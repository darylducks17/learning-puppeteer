const puppeteer = require('puppeteer');

async function interceptRequest(url){
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Logic for Request Interception
        await page.setRequestInterception(true);
        page.on('request', (interceptedRequest) => {
            if(interceptedRequest.url().endsWith('.png')){
               interceptedRequest.abort();
               console.log("Request Aborted");
            } else {
                interceptedRequest.headers({'secretKey': 'abc123'});
                interceptedRequest.continue();
                console.log("request continued with headers")
            }
        });

        await page.goto(url);
        await browser.close();
        console.log('request interception completed');

    } catch(error){
        console.log(error)
    }

    

}
interceptRequest('https://yahoo.com')