import { test, expect } from '@playwright/test';

test('Form 1 opens successfully', async ({ page }) => {
  await page.goto('https://www.beshak.org/insurance/forms/proposal/0c6bb636-11d2-4c74-9974-fabf49c7407b/');

  await expect(page).toHaveURL(/proposal/);

  await page.waitForLoadState('networkidle');
});

test('Form 1 mandatory validation check', async ({ page }) => {
  await page.goto('https://www.beshak.org/insurance/forms/proposal/0c6bb636-11d2-4c74-9974-fabf49c7407b/');

  const continueButton = page.getByRole('button', { name: /continue/i });

  if (await continueButton.isVisible()) {
    await continueButton.click();
  }
});