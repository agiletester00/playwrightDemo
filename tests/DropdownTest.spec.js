import { expect,test } from "@playwright/test";

test("",async ({page})=>{
    const userName=page.locator("#userEmail");
    const password=page.locator("#userPassword");
    const sdropdown=page.locator("select.form-control");
    const radio=page.locator("[type='radio']");
    const okButton=page.locator("#okayBtn");
    const checkBox=page.locator("#terms");
    const blinkingText=page.locator("body a.blinkingText");

    page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await sdropdown.selectOption("consult");

    // await expect(sdropdown).toHaveText("Consultant");
    await radio.last().check();
    await okButton.click();
    // await radio.nth(1).click()
     await expect(radio.last()).toBeChecked();
     await expect(radio.last()).toBeTruthy();
    console.log(await radio.last().isChecked());
    //  await page.pause();
    await checkBox.check();
    await expect(checkBox).toBeChecked();
    await checkBox.uncheck();
    expect(await checkBox.isChecked()).toBeFalsy();
    await expect(blinkingText).toHaveAttribute('class','blinkingText');





})