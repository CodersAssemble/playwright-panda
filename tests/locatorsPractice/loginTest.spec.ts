import {test, expect} from '@playwright/test';
// (async ()=>{
// const browser = await chromium.launch({
//     headless : false
// });
// const browserInstance = await browser.newContext();
// const page = await browserInstance.newPage();
// const testLoginLink = page.getByRole('link', {
//         name: 'Test Login Page'
//     });
test('Verify user can navigate to Test Login Page',async({page})=>{
    await page.goto('https://practicetestautomation.com/',{waitUntil:'domcontentloaded'});
    await page.locator('#menu-item-20').getByRole('link', { name: 'Practice' }).click();
    const testLoginLink = page.getByRole('link', {name: 'Test Login Page'});
    await expect(testLoginLink).toBeVisible();
    await testLoginLink.click();
    await expect(page).toHaveURL(/practice-test-login/);
});

test('Verify if user can log in with valid credentails',async({page})=>{
    await page.goto('https://practicetestautomation.com/',{waitUntil:'domcontentloaded'});
    await page.locator('#menu-item-20').getByRole('link', { name: 'Practice' }).click();
    await page.getByRole('link', {name: 'Test Login Page'}).click();
    await expect(page).toHaveURL(/practice-test-login/);
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    await expect(page).toHaveURL(/practicetestautomation.com\/logged-in-successfully\//);
    await expect(page.locator('#loop-container').getByText('Congratulations student. You successfully logged in!')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});
test('Verify if user can log in with invalid username',async({page})=>{
    await page.goto('https://practicetestautomation.com/',{waitUntil:'domcontentloaded'});
    await page.locator('#menu-item-20').getByRole('link', { name: 'Practice' }).click();
    await page.getByRole('link', {name: 'Test Login Page'}).click();
    await expect(page).toHaveURL(/practice-test-login/);
    await page.locator('#username').fill('incorrectUser');
    await page.locator('#password').fill('Password123');
    await page.locator('#submit').click();
    await page.locator('#error').getByTestId('Your username is invalid!').isVisible();
});
test('Verify if user can log in with invalid password',async({page})=>{
    await page.goto('https://practicetestautomation.com/',{waitUntil:'domcontentloaded'});
    await page.locator('#menu-item-20').getByRole('link', { name: 'Practice' }).click();
    await page.getByRole('link', {name: 'Test Login Page'}).click();
    await expect(page).toHaveURL(/practice-test-login/);
    await page.locator('#username').fill('student');
    await page.locator('#password').fill('incorrectPassword');
    await page.locator('#submit').click();
    await page.locator('#error').getByTestId('Your username is invalid!').isVisible();
});
// await browser.close();
