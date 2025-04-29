import { expect,test } from "@playwright/test";

test("",async ({page})=>{
    const userName=page.locator("#userEmail");
    const password=page.locator("#userPassword");
    const sdropdown=page.locator("select.form-control");
    const radio=page.locator("[type='radio']");
    const okButton=page.locator("#okayBtn");

    page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await sdropdown.selectOption("consult");

    // await expect(sdropdown).toHaveText("Consultant");
    await radio.last().check();
    await okButton.click();
     expect(await radio.last()).toBeChecked();
     expect(await radio.last()).toBeTruthy();
     page.pause();





})