import { Page, Locator } from '@playwright/test';

export class AccountPage {
  readonly page: Page;
  readonly myAccountHeading: Locator;
  readonly logoutHeading: Locator;
  // Formulario "Edit Account" (route=account/edit)
  readonly firstNameInput: Locator;
  readonly telephoneInput: Locator;
  // Formulario "Change Password" (route=account/password)
  readonly passwordInput: Locator;
  readonly confirmInput: Locator;
  readonly continueButton: Locator;
  readonly successAlert: Locator;

  constructor(page: Page) {
    this.page = page;
    this.myAccountHeading = page.getByRole('heading', { name: 'My Account' }).first();
    this.logoutHeading = page.getByRole('heading', { name: 'Account Logout' });
    this.firstNameInput = page.locator('#input-firstname');
    this.telephoneInput = page.locator('#input-telephone');
    this.passwordInput = page.locator('#input-password');
    this.confirmInput = page.locator('#input-confirm');
    this.continueButton = page.locator('input[type="submit"][value="Continue"]');
    this.successAlert = page.locator('.alert-success');
  }

  async goto() {
    await this.page.goto('/index.php?route=account/account', { waitUntil: 'domcontentloaded' });
  }

  async logout() {
    await this.page.goto('/index.php?route=account/logout', { waitUntil: 'domcontentloaded' });
  }

  async gotoEditAccount() {
    await this.page.goto('/index.php?route=account/edit', { waitUntil: 'domcontentloaded' });
    await this.telephoneInput.waitFor({ state: 'visible' });
  }

  async updateTelephone(newPhone: string) {
    await this.gotoEditAccount();
    await this.telephoneInput.fill(newPhone);
    await this.continueButton.click();
    // Al guardar, el sitio redirige a My Account y ahí muestra el aviso de éxito:
    // se espera esa navegación en lugar de asumir que el aviso aparece en menos de 5 s.
    await this.page.waitForURL(/route=account\/account/, { waitUntil: 'domcontentloaded' });
  }

  async changePassword(newPassword: string) {
    await this.page.goto('/index.php?route=account/password', { waitUntil: 'domcontentloaded' });
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.passwordInput.fill(newPassword);
    await this.confirmInput.fill(newPassword);
    await this.continueButton.click();
    await this.page.waitForURL(/route=account\/account/, { waitUntil: 'domcontentloaded' });
  }
}
