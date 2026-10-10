import { Page, Locator } from '@playwright/test';

export class AccountPage {
  readonly page: Page;
  readonly myAccountHeading: Locator;
  readonly logoutHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountHeading = page.getByRole('heading', { name: 'My Account' }).first();
    this.logoutHeading = page.getByRole('heading', { name: 'Account Logout' });
  }

  async goto() {
    await this.page.goto('/index.php?route=account/account');
  }

  async logout() {
    await this.page.goto('/index.php?route=account/logout');
  }
}
