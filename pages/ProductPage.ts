import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1').first();
  }

  async gotoById(productId: number) {
    await this.page.goto(`/index.php?route=product/product&product_id=${productId}`);
  }
}
