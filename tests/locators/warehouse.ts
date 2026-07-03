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
    await page.goto("https://www.thewarehouse.co.nz/", {waitUntil:'domcontentloaded'});

    // //hover
    // await page.locator('[data-test-id="category-root"]').hover();

    // const homeGarden = page.getByRole('link', {
    // name: 'Home, Garden & Appliances',
    // exact: true
    // });

    // await homeGarden.dispatchEvent('mouseover');

    // Close
    await browser.close();
})();