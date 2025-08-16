import { test, expect } from '@playwright/test';

test('MoneyLion homepage loads and has correct title', async ({ page }) => {
  await page.goto('https://www.moneylion.com');
  await expect(page).toHaveTitle(/MoneyLion/);
});

test('Navigate to About usclick on Careers', async ({ page }) => {
  await page.goto('https://www.moneylion.com');
  await page.getByRole('link', { name: /About/i }).click();
  await page.getByRole('link', { name: /Careers/i }).click();
  await expect(page).toHaveURL(/careers/i);
});

test ('Moneylion display location of Where We Work', async ({ page }) => {
    await page.goto('https://www.moneylion.com');
    await page.getByRole('link', { name: /About/i }).click();
    await page.getByRole('link', { name: /Where We Work/i }).click();
    const location = page.locator('text=New York City;}');
    await expect(location).toBeVisible();
    });