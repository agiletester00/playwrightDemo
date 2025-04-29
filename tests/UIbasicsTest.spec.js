import { test, expect } from '@playwright/test';
import { only } from 'node:test';
test("My First Test in Playwright",async({browser})=>{

    const context=await browser.newContext();
   const page= await context.newPage()
    // const page=context.newPage();
    await page.goto("https://rahulshettyacademy.com/locatorspractice/");
    console.log(page.title());
})

test("My second test in Paywright",async ({page})=>{
 await  page.goto("https://rahulshettyacademy.com/locatorspractice/");

 console.log(await page.title());
 await expect(page).toHaveTitle("Rahul Shetty Academy - Login page")
})