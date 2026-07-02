const {chromium} = require('@playwright/test');
// const {firefox} = require('@playwright/test');
// const {} = require('@playwright/test');

//Async - calls automatically, no need of any call.
(async () => {
    //creating the browser instance
    const browser = await chromium.launch({
        headless : false,
    });
    //Browser Instance
    const browserInstance = await browser.newContext();
    //Page
    const page = await browserInstance.newPage();
    //Navigate 
    await page.goto("https://google.com");
    // Close
    await browser.close();


})();