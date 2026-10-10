import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly shopByCategory: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.shopByCategory = page.getByRole('button', { name: /shop by category/i }).or(page.getByText('Shop by Category')).first();
    this.searchInput = page.locator('input[name="search"]').first();
  }

  async goto() {
    await this.page.goto('/index.php?route=common/home');
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }
}
