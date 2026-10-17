import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { TestUser } from '../test-data/users';

// Inicia sesión y espera a llegar a la página de cuenta.
export async function loginAs(page: Page, user: TestUser) {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(user.email, user.password);
  await page.waitForURL(/route=account\/account/, { waitUntil: 'domcontentloaded' });
}
