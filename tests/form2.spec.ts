import { test, expect } from '@playwright/test';

test('Form 2 opens successfully', async ({ page }) => {
  await page.goto('https://www.beshak.org/insurance/forms/proposal/1277cf94-c996-4081-bb3d-ab2ba5040df0/');

  await expect(page).toHaveURL(/proposal/);

  await page.waitForLoadState('networkidle');
});

test('Form 2 navigation test', async ({ page }) => {
  await page.goto('https://www.beshak.org/insurance/forms/proposal/1277cf94-c996-4081-bb3d-ab2ba5040df0/');

  const continueButton = page.getByRole('button', { name: /continue/i });

  if (await continueButton.isVisible()) {
    await continueButton.click();
  }
});