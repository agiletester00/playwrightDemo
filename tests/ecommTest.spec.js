import { expect,test } from "@playwright/test";

test("My ecomm Test",async ({page})=>{

const userName=page.locator("#userEmail");
const password=page.locator("#userPassword");
const signIn=page.locator("#login");
const products=page.locator("h5 b");



await page.goto("https://rahulshettyacademy.com/client");
await userName.fill("agiletester00@gmail.com")
await password.fill("Red@rose1")
await signIn.click();
await products.first().waitFor();
let productNames=await products.allTextContents();
console.log(productNames);
expect(productNames).toContain("IPHONE 13 PRO");

})