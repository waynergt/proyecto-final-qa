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
      await this.selectRating(rating);
    }
    await this.reviewButton.click();
  }

  // El tema oculta los <input type="radio" name="rating"> y muestra estrellas dibujadas
  // con su <label for="rating-N-...">. Por eso se hace clic en la estrella (label) visible.
  async selectRating(rating: number) {
    const radio = this.page.locator(`input[name="rating"][value="${rating}"]`);
    const star = this.page.locator(`label[for^="rating-${rating}-"]`).first();
    if ((await star.count()) > 0 && (await star.isVisible())) {
      await star.click();
    } else {
      // Respaldo: marcar el radio directamente si la estrella no es clicable
      await radio.evaluate((el: HTMLInputElement) => {
        el.checked = true;
        el.dispatchEvent(new Event('change', { bubbles: true }));
      });
    }
  }
}
