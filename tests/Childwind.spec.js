import { expect, test } from "@playwright/test";

test("Handling child window", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const blinkingText = page.locator("[href*='documents-request']");

  const [childPage] = await Promise.all([
    context.waitForEvent('page'),
    blinkingText.click(),
  ]);
  const text = await childPage.locator(".red").textContent();
  console.log(text);
});