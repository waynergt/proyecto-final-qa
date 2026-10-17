# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression-reviews.spec.ts >> Regression - Reseñas y calificaciones >> reseña sin calificación es rechazada @regression
- Location: tests/regression-reviews.spec.ts:19:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: net::ERR_TIMED_OUT at https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=40
Call log:
  - navigating to "https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=40", waiting until "load"

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class ProductPage {
  4  |   readonly page: Page;
  5  |   readonly title: Locator;
  6  |   // Formulario "Write a review"
  7  |   readonly reviewName: Locator;
  8  |   readonly reviewText: Locator;
  9  |   readonly reviewButton: Locator;
  10 |   readonly reviewSuccess: Locator;
  11 |   readonly reviewWarning: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 |     this.title = page.locator('h1').first();
  16 |     this.reviewName = page.locator('#input-name');
  17 |     this.reviewText = page.locator('#input-review');
  18 |     this.reviewButton = page.locator('#button-review');
  19 |     this.reviewSuccess = page.getByText(/Thank you for your review/i);
  20 |     this.reviewWarning = page.locator('.alert-danger, .text-danger').first();
  21 |   }
  22 | 
  23 |   async gotoById(productId: number) {
> 24 |     await this.page.goto(`/index.php?route=product/product&product_id=${productId}`);
     |                     ^ Error: page.goto: net::ERR_TIMED_OUT at https://ecommerce-playground.lambdatest.io/index.php?route=product/product&product_id=40
  25 |   }
  26 | 
  27 |   // rating: 1..5, o null para NO seleccionar estrellas
  28 |   async writeReview(name: string, text: string, rating: number | null) {
  29 |     await this.reviewName.scrollIntoViewIfNeeded();
  30 |     await this.reviewName.fill(name);
  31 |     await this.reviewText.fill(text);
  32 |     if (rating !== null) {
  33 |       await this.selectRating(rating);
  34 |     }
  35 |     await this.reviewButton.click();
  36 |   }
  37 | 
  38 |   // El tema oculta los <input type="radio" name="rating"> y muestra estrellas dibujadas
  39 |   // con su <label for="rating-N-...">. Por eso se hace clic en la estrella (label) visible.
  40 |   async selectRating(rating: number) {
  41 |     const radio = this.page.locator(`input[name="rating"][value="${rating}"]`);
  42 |     const star = this.page.locator(`label[for^="rating-${rating}-"]`).first();
  43 |     if ((await star.count()) > 0 && (await star.isVisible())) {
  44 |       await star.click();
  45 |     } else {
  46 |       // Respaldo: marcar el radio directamente si la estrella no es clicable
  47 |       await radio.evaluate((el: HTMLInputElement) => {
  48 |         el.checked = true;
  49 |         el.dispatchEvent(new Event('change', { bubbles: true }));
  50 |       });
  51 |     }
  52 |   }
  53 | }
  54 | 
```