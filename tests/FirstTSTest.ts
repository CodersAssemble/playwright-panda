//const {chromium} = require('@playwright/test'); --> JavaScript
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
    await page.goto("https://google.com");
    // Close
    await browser.close();


})();
/**TypeScript is the superset of JavaScript. In TypeScript there is no const instead we use
 * import - from. Anyways this gets transpiled into JavaScipt and then it is going to get executed
 * behined the screen.
 */