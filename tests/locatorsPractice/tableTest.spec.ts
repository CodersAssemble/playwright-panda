import {expect, test} from '@playwright/test';
test('Verify navigate to table test',async({page})=>{
    await page.goto('https://practicetestautomation.com/',{waitUntil:'domcontentloaded'});
    await page.locator('#menu-item-20').getByRole('link', { name: 'Practice' }).click();
    await page.getByRole('link',{name:'Test Table'}).click();
    await expect(page.locator('#xpath-table').getByRole('heading',{name:'Automation Courses'})).toBeVisible();
});
test('Verify selecting Java filters the table data',async({page})=>{
    await page.goto('https://practicetestautomation.com/',{waitUntil:'domcontentloaded'});
    await page.locator('#menu-item-20').getByRole('link', { name: 'Practice' }).click();
    await page.getByRole('link',{name:'Test Table'}).click();
    await expect(page.locator('#xpath-table').getByRole('heading',{name:'Automation Courses'})).toBeVisible();
    await page.getByRole('radio', { name: 'Java' }).check();
    await expect(page.getByRole('radio', { name: 'Java' })).toBeChecked();
    const visibleRows = page.locator('#courses_table tbody tr').filter({ visible: true });
    await expect(visibleRows).toHaveCount(6);
    const languageCells = visibleRows.locator('td[data-col="language"]');
    await expect(languageCells).toHaveCount(6);
    for (const cell of await languageCells.all()) {
        await expect(cell).toHaveText('Java');
    }
});