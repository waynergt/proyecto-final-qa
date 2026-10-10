import { test, expect } from '../fixtures';
import { validUser } from '../test-data/users';

test.describe('Smoke tests', () => {
  test('la página principal carga con categorías visibles @smoke', async ({ homePage, page }) => {
    await homePage.goto();
    await expect(page).toHaveTitle(/Your Store/i);
    await expect(page.getByText('Shop by Category').first()).toBeVisible();
  });

  test('la página de login muestra el formulario @smoke', async ({ loginPage }) => {
    await loginPage.goto();
    await expect(loginPage.emailInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('login con usuario válido lleva a My Account @smoke', async ({ loginPage, accountPage, page }) => {
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    await expect(page).toHaveURL(/route=account\/account/);
    await expect(accountPage.myAccountHeading).toBeVisible();
  });

  test('logout redirige a Account Logout @smoke', async ({ loggedInPage, accountPage }) => {
    await accountPage.logout();
    await expect(loggedInPage).toHaveURL(/route=account\/logout/);
    await expect(accountPage.logoutHeading).toBeVisible();
  });

  test('la página de detalle de un producto carga @smoke', async ({ productPage }) => {
    await productPage.gotoById(40);
    await expect(productPage.title).toBeVisible();
    await expect(productPage.title).not.toBeEmpty();
  });
});
