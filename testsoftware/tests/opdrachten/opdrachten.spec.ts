// How to go about these exercises? 
// Copy this file and paste it in the folder 'opdrachten'. Give it
// a name like my-opdrachten.spec.ts. This copy is the file you use for completing the exercises
// Use as much from the original code as you like.


import { test, expect, request } from '@playwright/test';
import path from 'path';

test.use( { viewport: { width: 1833, height: 980 } } );

///////////////////////////////////////////////////////////////////////
// With Codegen                                                      //
///////////////////////////////////////////////////////////////////////



test( 'Exercise with codegen: go to NOS.nl', async ( { page } ) => {
   await page.goto( 'https://nos.nl' );
   // Instructions: script a flow that jumps from 'laatste nieuws' to ' videos' to top video in list of videos.
   await page.getByRole('button', { name: 'Sluiten' }).click();
   await page.getByLabel('Hoofdnavigatie').getByRole('link', { name: 'Laatste nieuws' }).click();
   await page.getByRole('link', { name: 'Zoeken', exact: true }).click();
   await page.getByRole('searchbox', { name: 'Zoeken' }).click();
   await page.getByRole('searchbox', { name: 'Zoeken' }).fill('Flevoland');
   await page.getByRole('searchbox', { name: 'Zoeken' }).press('Enter');
   await page.getByRole('button', { name: 'Zoeken' }).click();
   await page.getByRole('link', { name: 'dinsdag 3 februari, 17:24' }).click();
   const page1Promise = page.waitForEvent('popup');
   await page.getByRole('link', { name: 'RTV Noord', exact: true }).click();
   const page1 = await page1Promise;
   await page1.getByRole('button', { name: 'Alles accepteren' }).click();

} )

test( 'Exercise with codegen: go to Ikea', async ( { page } ) => {
   await page.goto( 'https://ikea.nl' );  
   await page.getByRole('button', { name: 'Weiger' }).click();

   // Instructions: script the flow to the webpage of the ikea shop in  Heerlen.
   await page.getByRole('button', { name: 'Selecteer winkel' }).click();
   await page.getByRole('button', { name: 'IKEA Heerlen In de Cramer 142' }).click();
} )

test( 'Exercise with codegen: go to Wikipedia.com', async ( { page } ) => {
   await page.goto( 'https://en.wikipedia.org/wiki/Wikipedia' );
   await page.getByLabel('Search Wikipedia').click();
   await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('w3.org');
   await page.getByRole('link', { name: 'World Wide Web Consortium' }).click();
   // Instructions: script a flow within wikipedia to the article about 'w3.org' and 
   // navigate to the w3.org website by using the link
   // in 'external links' of the article.

} )

test( 'Exercise with codegen: go to Playwright', async ( { page } ) => {
   await page.goto( 'https://playwright.dev/docs/test-typescript' );
   // Instructions: script de flow to 'docs' and from there to 'Test Generator'. 
   // // Bookmark the Test Generator page and read it.
   await page.getByRole('link', { name: 'Docs' }).click();
   await page.getByRole('link', { name: 'Test generator' }).click();

} )

test( 'Exercise with codegen: go to Tempoteam', async ( { page } ) => {
   await page.goto( 'https://tempoteam.nl/' );
   // Instructions: script a flow to the current IT vacancies
   await page.getByText('Nee, ik wil geen optimale').click();
   await page.getByRole('textbox', { name: 'Functie of trefwoord' }).click();
   await page.getByRole('textbox', { name: 'Functie of trefwoord' }).fill('IT');
   await page.getByRole('button', { name: 'Vacatures zoeken' }).click();
} )

test( 'Exercise with codegen: go to vs-code', async ( { page } ) => {
   await page.goto( 'https://code.visualstudio.com/' );
   // Instructions: script a flow to Get Started / vs-code Tutorial
   // // btw bookmark this link. 
   await page.getByRole('button', { name: 'Reject' }).click();
   await page.getByRole('link', { name: 'Docs' }).click();
   await page.getByRole('button', { name: 'Get Started' }).click();
   await page.getByRole('link', { name: 'VS Code Tutorial' }).click();
} )

///////////////////////////////////////////////////////////////////////
// No codegen allowed, flows should use different locators this time //
///////////////////////////////////////////////////////////////////////
test( 'Exercise without codegen: go to NOS.nl', async ( { page } ) => {
   await page.goto( 'https://nos.nl' );
   // Instructions: script a flow that jumps from 'laatste nieuws' to ' videos' to top video in list of videos.
   await page.getByRole('button', { name: 'Sluiten' }).click();
   await page.getByLabel('Hoofdnavigatie').getByRole('link', { name: 'Laatste nieuws' }).click();
   await page.locator('#content').getByRole('link', { name: 'Video\'s' }).click();
   await page.getByRole('link', { name: 'Grote luchtaanval op Oekraïne' }).click();

} )

test( 'Exercise without codegen: go to Ikea', async ( { page } ) => {
   await page.goto( 'https://ikea.nl' );  
   await page.getByRole('button', { name: 'Weiger' }).click();
   await page.getByRole('button', { name: 'Selecteer winkel' }).click();
   await page.getByRole('button', { name: 'IKEA Heerlen In de Cramer 142' }).click();
   // Instructions: script the flow to the webpage of the ikea shop in  Heerlen.

} )

test( 'Exercise without codegen: go to Wikipedia.com', async ( { page } ) => {
   await page.goto( 'https://en.wikipedia.org/wiki/Wikipedia' );
   await page.getByLabel('Search Wikipedia').click();
   await page.getByRole('combobox', { name: 'Search Wikipedia' }).fill('W3.org');
   await page.getByRole('link', { name: 'World Wide Web Consortium' }).click();
   // Instructions: script a flow within wikipedia to the article about 'w3.org' and 
   // navigate to the w3.org website by using the link
   // in 'external links' of the article.

} )

test( 'Exercise without codegen: go to Playwright', async ( { page } ) => {
   await page.goto( 'https://playwright.dev/docs/test-typescript' );
   await page.getByRole('link', { name: 'Docs' }).click();
   await page.getByRole('link', { name: 'Test generator' }).click();
   // Instructions: script de flow to 'docs' and from there to 'Test Generator'. 

} )

test( 'Exercise without codegen: go to Tempoteam', async ( { page } ) => {
   await page.goto( 'https://tempoteam.nl/' );
   await page.getByText('Nee, ik wil geen optimale').click();
   await page.getByRole('textbox', { name: 'Functie of trefwoord' }).click();
   await page.getByRole('textbox', { name: 'Functie of trefwoord' }).fill('IT');
   await page.getByRole('button', { name: 'Vacatures zoeken' }).click();
   // Instructions: script a flow to the current IT vacancies

} )   

test( 'Dustloop framedata redirect', async ( { page } ) => {
   await page.goto( 'https://dustloop.com/wiki/' );
   await page.getByRole('button', { name: 'Advanced Settings' }).click();
   await page.getByRole('button', { name: 'Reject all' }).click();
   await page.locator('.home-link__button > .mw-default-size > a').first().click();
   await page.getByRole('link', { name: 'GBVSR/Metera' }).first().click();
   await page.locator('#citizen-section-1').getByRole('link', { name: 'Resources' }).click();
   await page.getByRole('link', { name: 'Replay Theater' }).click();
   const page1Promise = page.waitForEvent('popup');
   await page.getByRole('link', { name: '2026-02-22 Dudeakoff Metera' }).click();
    const page1 = await page1Promise;
    await page1.goto('https://www.youtube.com/watch?v=ENr8PjZw558&t=6166s');
    await page1.getByRole('button', { name: 'Reject the use of cookies and' }).click();

    // Wait for the YouTube player video to appear
    await page1.waitForSelector('video.html5-main-video', { state: 'visible', timeout: 10000 });

    // Try clicking the fullscreen button, fall back to keyboard 'f', then JS requestFullscreen
    try {
       const fsButton = await page1.$('button.ytp-fullscreen-button');
       if (fsButton) {
          await fsButton.click();
       } else {
          // Ensure player has focus, then toggle fullscreen with keyboard
          await page1.click('video.html5-main-video');
          await page1.keyboard.press('f');
       }
    } catch (e) {
       // Last-resort: call requestFullscreen on the video element inside the page
       await page1.evaluate(() => {
          const v = document.querySelector('video');
          // @ts-ignore - runs in browser
          if (v && v.requestFullscreen) v.requestFullscreen();
       });
    }

    await page1.waitForTimeout(2000);
    });

