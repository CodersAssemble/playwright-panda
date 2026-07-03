import {chromium}  from '@playwright/test';

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
    await page.goto("http://eaapp.somee.com");

    //Locators
    // await page.locator("").click(); or await page.click("");
    // Close
    await browser.close();


})();