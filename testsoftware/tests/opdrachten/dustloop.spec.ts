import { test, expect, request } from '@playwright/test';
import path from 'path';


test.use({ viewport: { width: 1900, height: 890 }, });

test('Dustloop framedata redirect', async ({ page }) => {
    await page.goto('https://dustloop.com/wiki/');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: 'Advanced Settings' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Reject all' }).click();
    await page.waitForTimeout(2000);
    await page.locator('.home-link__button > .mw-default-size > a').first().click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'GBVSR/Metera' }).first().click();
    await page.waitForTimeout(3000);
    await page.locator('#citizen-section-1').getByRole('link', { name: 'Resources' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('link', { name: 'Replay Theater' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button').nth(5).click();
    await page.waitForTimeout(3000);
    await page.getByRole('menuitem', { name: 'Metera Metera' }).click();
    await page.waitForTimeout(5000);
    const page1Promise = page.waitForEvent('popup');
    await page.getByRole('link', { name: '2026-02-22 Dudeakoff Metera' }).click();
    const page1 = await page1Promise;
    await page1.waitForTimeout(5000);
    await page1.goto('https://www.youtube.com/watch?v=ENr8PjZw558&t=6166s');
    await page1.waitForTimeout(2000);
    await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();
    await page1.waitForTimeout(1000);
    await page1.waitForSelector('video.html5-main-video', { state: 'visible', timeout: 10000 });
    await page1.waitForTimeout(3000);

    // Fullscreen button
    try {
        const fsButton = await page1.$('button.ytp-fullscreen-button');
        if (fsButton) {
            await fsButton.click();
        } else {
            await page1.click('video.html5-main-video');
            // Then press the 'F' key
            await page1.keyboard.press('f');
        }
    } 
    catch (e) {
    }
});

