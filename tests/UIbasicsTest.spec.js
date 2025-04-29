import { test, expect } from '@playwright/test';
import { only } from 'node:test';

//locators







test("My First Test in Playwright",async({browser})=>{

    const context=await browser.newContext();
   const page= await context.newPage()
    // const page=context.newPage();
    await page.goto("https://rahulshettyacademy.com/locatorspractice/");
    console.log(await page.title());
});

test("My second test in Paywright",async ({page})=>{
 await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");

 console.log(await page.title());
 await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy")
});

test("My third test in Paywright",async ({page})=>
    {
    await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    // await page.locator("#username").fill("rahulshettyacademy")
    await page.locator("#password").fill("rahulshettyacademy")
    await page.locator("#signInBtn").click();
    const text=await page.locator("[style*='block']").textContent();
    await expect(page.locator("[style*='block']")).toContainText("username/password.")
 
   })

   test("My fourth test in Paywright",async ({page})=>
   {
    const userName= page.locator("#username");
    const password= page.locator("#password");
    const signIn=page.locator("#signInBtn");
    const elementInEcomm=page.locator("h1.my-4");
    const errortext=await page.locator("[style*='block']");
    const cards=page.locator("h4 a");

    await  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());

    await userName.fill("rahulshettyacademy")
    await password.fill("learning")
    await signIn.click();
    // const text=await page.locator("[style*='block']").textContent();
    await expect(elementInEcomm).toBeVisible();

    const itemNames=await cards.allTextContents();
    console.log(itemNames);
    expect(itemNames).toContain("Nokia Edge");
   })