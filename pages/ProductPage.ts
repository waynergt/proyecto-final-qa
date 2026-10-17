import { Page, Locator } from '@playwright/test';

export class ProductPage {
  readonly page: Page;
  readonly title: Locator;
  // Formulario "Write a review"
  readonly reviewName: Locator;
  readonly reviewText: Locator;
  readonly reviewButton: Locator;
  readonly reviewSuccess: Locator;
  readonly reviewWarning: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('h1').first();
    this.reviewName = page.locator('#input-name');
    this.reviewText = page.locator('#input-review');
    this.reviewButton = page.locator('#button-review');
    this.reviewSuccess = page.getByText(/Thank you for your review/i);
    this.reviewWarning = page.locator('.alert-danger, .text-danger').first();
  }

  async gotoById(productId: number) {
    await this.page.goto(`/index.php?route=product/product&product_id=${productId}`);
  }

  // rating: 1..5, o null para NO seleccionar estrellas
  async writeReview(name: string, text: string, rating: number | null) {
    await this.reviewName.scrollIntoViewIfNeeded();
    await this.reviewName.fill(name);
    await this.reviewText.fill(text);
    if (rating !== null) {
      // El radio de las estrellas está oculto por el diseño del tema; por eso force: true
      await this.page.locator(`input[name="rating"][value="${rating}"]`).check({ force: true });
    }
    await this.reviewButton.click();
  }
}
