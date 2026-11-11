import { test, expect } from '@playwright/test';

test('Name field validation scenario', async ({ page }) => {
  await page.goto('https://www.beshak.org/insurance/forms/proposal/1277cf94-c996-4081-bb3d-ab2ba5040df0/');

  const textboxes = page.locator('input[type="text"]');

  if (await textboxes.first().isVisible()) {
    await textboxes.first().fill('@#$%^');
  }

  await page.waitForTimeout(1000);
});

test('Numeric value in name field scenario', async ({ page }) => {
  await page.goto('https://www.beshak.org/insurance/forms/proposal/1277cf94-c996-4081-bb3d-ab2ba5040df0/');

  const textboxes = page.locator('input[type="text"]');

  if (await textboxes.first().isVisible()) {
    await textboxes.first().fill('123456');
  }

  await page.waitForTimeout(1000);
});