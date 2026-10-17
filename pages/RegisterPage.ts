import { Page, Locator } from '@playwright/test';
import { TestUser } from '../test-data/users';

export class RegisterPage {
  readonly page: Page;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly telephone: Locator;
  readonly password: Locator;
  readonly confirm: Locator;
  readonly agree: Locator;
  readonly continueButton: Locator;
  readonly successHeading: Locator;
  readonly warningAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstName = page.locator('#input-firstname');
    this.lastName = page.locator('#input-lastname');
    this.email = page.locator('#input-email');
    this.telephone = page.locator('#input-telephone');
    this.password = page.locator('#input-password');
    this.confirm = page.locator('#input-confirm');
    this.agree = page.locator('label[for="input-agree"]');
    this.continueButton = page.locator('input[type="submit"][value="Continue"]');
    this.successHeading = page.getByRole('heading', { name: /Your Account Has Been Created/i });
    this.warningAlert = page.locator('.alert-danger');
  }

  async goto() {
    await this.page.goto('/index.php?route=account/register', { waitUntil: 'domcontentloaded' });
    await this.firstName.waitFor({ state: 'visible' });
  }

  async register(user: TestUser) {
    await this.firstName.fill(user.firstName);
    await this.lastName.fill(user.lastName);
    await this.email.fill(user.email);
    await this.telephone.fill(user.telephone);
    await this.password.fill(user.password);
    await this.confirm.fill(user.password);
    await this.agree.click();
    await this.continueButton.click();
  }
}
