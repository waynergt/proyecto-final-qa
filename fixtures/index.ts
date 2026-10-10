import { test as base, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountPage } from '../pages/AccountPage';
import { ProductPage } from '../pages/ProductPage';
import { loginAs } from '../helpers/auth';
import { validUser } from '../test-data/users';

type Fixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  accountPage: AccountPage;
  productPage: ProductPage;
  loggedInPage: Page; // página con sesión ya iniciada
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => { await use(new HomePage(page)); },
  loginPage: async ({ page }, use) => { await use(new LoginPage(page)); },
  registerPage: async ({ page }, use) => { await use(new RegisterPage(page)); },
  accountPage: async ({ page }, use) => { await use(new AccountPage(page)); },
  productPage: async ({ page }, use) => { await use(new ProductPage(page)); },
  loggedInPage: async ({ page }, use) => {
    await loginAs(page, validUser);
    await use(page);
  },
});

export { expect } from '@playwright/test';
