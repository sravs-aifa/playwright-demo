const { test, expect } = require('@playwright/test');

test('check example website', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
