// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://www.google.co.in/');
//   await page.getByRole('combobox', { name: 'Search' }).click();
//   await page.getByRole('combobox', { name: 'Search' }).fill('');
//   await page.getByRole('combobox', { name: 'Search' }).click();
//   await page.getByRole('combobox', { name: 'Search' }).fill('national holidays');
//   await page.goto('https://www.google.com/sorry/index?continue=https://www.google.co.in/search%3Fq%3Dnational%2Bholidays%26sca_esv%3Df75ba8cdc20acdb9%26source%3Dhp%26ei%3D2h0SaNSdOova1e8PtNHZ2AI%26iflsig%3DACkRmUkAAAAAaBIr6oQuL3XaJgJtFcSx6uAvm6YhmVw0%26ved%3D0ahUKEwjU8riA5_-MAxULbfUHHbRoFisQ4dUDCA8%26uact%3D5%26oq%3Dnational%2Bholidays%26gs_lp%3DEgdnd3Mtd2l6IhFuYXRpb25hbCBob2xpZGF5czIIEAAYgAQYsQMyCBAAGIAEGLEDMgsQABiABBixAxiDATILEAAYgAQYsQMYgwEyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI-MMBULcIWL3CAXAHeACQAQCYAbMBoAGTHKoBBDAuMjK4AQPIAQD4AQGYAh2gArUeqAIKwgIKEAAYAxjqAhiPAcICChAuGAMY6gIYjwHCAg4QABiABBixAxiDARiKBcICBBAAGAPCAg4QLhiABBixAxjRAxjHAcICBRAuGIAEwgIIEC4YgAQYsQPCAgsQLhiABBjHARivAcICERAuGIAEGLEDGNEDGIMBGMcBwgILEC4YgAQYsQMYgwHCAgsQLhiABBixAxjUAsICDRAAGIAEGLEDGEYY-QHCAgsQABiABBiSAxiKBcICCBAAGIAEGMkDwgIHEAAYgAQYCpgDDvEFFN7ZYqNPC2ySBwQ3LjIyoAf-wAGyBwQwLjIyuAfFHQ%26sclient%3Dgws-wiz%26sei%3D-R0SaJSMD4yQnesPhsvs-Ag&q=EhAkBQIBwDzIn-n_7THC9pcsGPm7yMAGIjD4sYaijK27hNEHvhqf96EZIV22fGRIQT3PoVuu1JhB1h9UunaGbFpPt5l2KFjb5TQyAnJSWgFD');
//   await page.locator('iframe[name="a-6tv8ajlsomal"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
//   await page.locator('iframe[name="c-6tv8ajlsomal"]').contentFrame().locator('.rc-imageselect-tile').first().click();
//   await page.locator('iframe[name="c-6tv8ajlsomal"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
//   await page.locator('iframe[name="c-6tv8ajlsomal"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
//   await page.locator('iframe[name="c-6tv8ajlsomal"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
//   await page.locator('iframe[name="c-6tv8ajlsomal"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
//   await page.getByRole('button', { name: 'Not now' }).click();
//   await page.getByRole('button', { name: 'Show more' }).click();
//   await page.getByRole('link', { name: 'Public holidays in India' }).click();
// });