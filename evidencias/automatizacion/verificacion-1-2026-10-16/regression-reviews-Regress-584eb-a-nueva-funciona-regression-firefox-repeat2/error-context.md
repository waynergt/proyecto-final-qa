# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression-reviews.spec.ts >> Regression - Perfil y contraseña >> cambio de contraseña: la anterior se rechaza y la nueva funciona @regression
- Location: tests/regression-reviews.spec.ts:37:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /route=account\/account/
Received string:  ""

```

# Page snapshot

```yaml
- generic [ref=f6e1]:
  - generic [ref=f6e2]:
    - generic [ref=f6e3]:
      - heading [level=5] [ref=f6e4]:
        - text: Top categories
        - link "close" [ref=f6e5] [cursor=pointer]:
          - /url: "#mz-component-1626147655"
          - text: 
      - navigation [ref=f6e8]:
        - list [ref=f6e10]:
          - listitem [ref=f6e11]:
            - link "Components" [ref=f6e12] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
          - listitem [ref=f6e18]:
            - link "Cameras" [ref=f6e19] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
          - listitem [ref=f6e25]:
            - link "Phone, Tablets & Ipod" [ref=f6e26] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
          - listitem [ref=f6e32]:
            - link "Software" [ref=f6e33] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
          - listitem [ref=f6e39]:
            - link "MP3 Players" [ref=f6e40] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
          - listitem [ref=f6e46]:
            - link "Laptops & Notebooks" [ref=f6e47] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
          - listitem [ref=f6e53]:
            - link "Desktops and Monitors" [ref=f6e54] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
          - listitem [ref=f6e60]:
            - link "Printers & Scanners" [ref=f6e61] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
          - listitem [ref=f6e67]:
            - link "Mice and Trackballs" [ref=f6e68] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
          - listitem [ref=f6e74]:
            - link "Fashion and Accessories" [ref=f6e75] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e81]:
            - link "Beauty and Saloon" [ref=f6e82] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e88]:
            - link "Autoparts and Accessories" [ref=f6e89] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e95]:
            - link "Washing machine" [ref=f6e96] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e102]:
            - link "Gaming consoles" [ref=f6e103] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e109]:
            - link "Air conditioner" [ref=f6e110] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f6e116]:
            - link "Web Cameras" [ref=f6e117] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
    - generic [ref=f6e123]:
      - heading [level=5] [ref=f6e124]:
        - text: Quick Links
        - link "close" [ref=f6e125] [cursor=pointer]:
          - /url: "#mz-component-162614767"
          - text: 
      - generic [ref=f6e126]:
        - navigation [ref=f6e128]:
          - list [ref=f6e130]:
            - listitem [ref=f6e131]:
              - link " Special Hot" [ref=f6e132] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                - generic [ref=f6e133]: 
                - generic [ref=f6e134]: Special
                - generic [ref=f6e136]: Hot
            - listitem [ref=f6e137]:
              - link " Wishlist" [ref=f6e138] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f6e139]: 
                - generic [ref=f6e140]: Wishlist
            - listitem [ref=f6e142]:
              - link " Compare" [ref=f6e143] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
                - generic [ref=f6e144]: 
                - generic [ref=f6e145]: Compare
            - listitem [ref=f6e147]:
              - link " My account" [ref=f6e148] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f6e149]: 
                - generic [ref=f6e150]: My account
            - listitem [ref=f6e152]:
              - link " Blog" [ref=f6e153] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - generic [ref=f6e154]: 
                - generic [ref=f6e155]: Blog
            - listitem [ref=f6e157]:
              - link " Tracking" [ref=f6e158] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
                - generic [ref=f6e159]: 
                - generic [ref=f6e160]: Tracking
            - listitem [ref=f6e162]:
              - link " Contact us" [ref=f6e163] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
                - generic [ref=f6e164]: 
                - generic [ref=f6e165]: Contact us
        - separator [ref=f6e168]
        - paragraph [ref=f6e171]: Place here any module, widget, design or HTML. for example menu, categories
    - generic [ref=f6e172]:
      - heading [level=5] [ref=f6e173]:
        - text: Cart
        - link "close" [ref=f6e174] [cursor=pointer]:
          - /url: "#cart-total-drawer"
          - text: 
      - generic [ref=f6e175]:
        - generic [ref=f6e176]:
          - paragraph [ref=f6e177]: Your shopping cart is empty!
          - table [ref=f6e178]:
            - rowgroup [ref=f6e179]:
              - row [ref=f6e180]:
                - cell "Sub-Total:" [ref=f6e181]
                - cell [ref=f6e182]:
                  - strong [ref=f6e183]: $0.00
              - row [ref=f6e184]:
                - cell "Total:" [ref=f6e185]
                - cell [ref=f6e186]:
                  - strong [ref=f6e187]: $0.00
        - generic [ref=f6e189]:
          - button " Edit cart" [ref=f6e191] [cursor=pointer]:
            - generic [ref=f6e192]: 
            - text: Edit cart
          - button " Checkout" [ref=f6e194] [cursor=pointer]:
            - generic [ref=f6e195]: 
            - text: Checkout
    - generic [ref=f6e196]:
      - banner [ref=f6e197]:
        - button "" [ref=f6e199] [cursor=pointer]
        - generic [ref=f6e201]:
          - generic [ref=f6e202]:
            - figure [ref=f6e204]:
              - link [ref=f6e205] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=f6e206]
            - generic [ref=f6e210]:
              - generic [ref=f6e212]:
                - button "All Categories" [ref=f6e214] [cursor=pointer]
                - textbox "Search For Products" [ref=f6e216]
              - button "Search" [ref=f6e218] [cursor=pointer]
            - link "Compare" [ref=f6e220] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
            - link "Wishlist" [ref=f6e225] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
            - button "0" [ref=f6e230] [cursor=pointer]
          - text: 
        - generic [ref=f6e236]:
          - generic [ref=f6e238] [cursor=pointer]:
            - button "Shop by Category" [ref=f6e240]
            - navigation [ref=f6e245]:
              - list [ref=f6e247]:
                - listitem [ref=f6e248]:
                  - link "Home" [ref=f6e249]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - listitem [ref=f6e252]:
                  - link "Special Hot" [ref=f6e253]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=f6e254]: Special
                    - generic [ref=f6e256]: Hot
                - listitem [ref=f6e257]:
                  - link "Blog" [ref=f6e258]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - listitem [ref=f6e261]:
                  - button "Mega Menu" [ref=f6e262]
                - listitem [ref=f6e265]:
                  - button "AddOns Featured" [ref=f6e266]:
                    - generic [ref=f6e267]: AddOns
                    - generic [ref=f6e269]: Featured
                - listitem [ref=f6e270]:
                  - button " My account" [ref=f6e271]:
                    - generic [ref=f6e272]: 
                    - generic [ref=f6e273]: My account
          - text:  
          - paragraph [ref=f6e277]:
            - strong [ref=f6e278]: This is a dummy website for Web Automation Testing
      - generic [ref=f6e279]:
        - navigation "breadcrumb" [ref=f6e280]:
          - list [ref=f6e281]:
            - listitem [ref=f6e282]:
              - link "" [ref=f6e283] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
            - listitem [ref=f6e285]:
              - text: /
              - link "Account" [ref=f6e286] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
            - listitem [ref=f6e287]: / Login
        - generic [ref=f6e288]:
          - generic [ref=f6e289]: 
          - text: "Warning: No match for E-Mail Address and/or Password."
        - generic [ref=f6e290]:
          - generic [ref=f6e292]:
            - generic [ref=f6e295]:
              - heading "New Customer" [level=2] [ref=f6e296]
              - paragraph [ref=f6e297]:
                - strong [ref=f6e298]: Register Account
              - paragraph [ref=f6e299]: By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.
              - link "Continue" [ref=f6e300] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/register
            - generic [ref=f6e303]:
              - heading "Returning Customer" [level=2] [ref=f6e304]
              - paragraph [ref=f6e305]:
                - strong [ref=f6e306]: I am a returning customer
              - generic [ref=f6e307]:
                - generic [ref=f6e308]:
                  - generic [ref=f6e309]: E-Mail Address
                  - textbox "E-Mail Address" [ref=f6e310]: qa.g4.firefox.1792205899483347@example.com
                - generic [ref=f6e311]:
                  - generic [ref=f6e312]: Password
                  - textbox "Password" [ref=f6e313]: NuevaClave#2026
                  - link "Forgotten Password" [ref=f6e314] [cursor=pointer]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten
                - button "Login" [active] [ref=f6e315] [cursor=pointer]
          - complementary [ref=f6e316]:
            - generic [ref=f6e317]:
              - link " Login" [ref=f6e318] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/login
                - generic [ref=f6e319]: 
                - text: Login
              - link " Register" [ref=f6e320] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/register
                - generic [ref=f6e321]: 
                - text: Register
              - link " Forgotten Password" [ref=f6e322] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/forgotten
                - generic [ref=f6e323]: 
                - text: Forgotten Password
              - link " My Account" [ref=f6e324] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f6e325]: 
                - text: My Account
              - link " Address Book" [ref=f6e326] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/address
                - generic [ref=f6e327]: 
                - text: Address Book
              - link " Wish List" [ref=f6e328] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f6e329]: 
                - text: Wish List
              - link " Order History" [ref=f6e330] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/order
                - generic [ref=f6e331]: 
                - text: Order History
              - link " Downloads" [ref=f6e332] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/download
                - generic [ref=f6e333]: 
                - text: Downloads
              - link " Recurring payments" [ref=f6e334] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/recurring
                - generic [ref=f6e335]: 
                - text: Recurring payments
              - link " Reward Points" [ref=f6e336] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/reward
                - generic [ref=f6e337]: 
                - text: Reward Points
              - link " Returns" [ref=f6e338] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/return
                - generic [ref=f6e339]: 
                - text: Returns
              - link " Transactions" [ref=f6e340] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/transaction
                - generic [ref=f6e341]: 
                - text: Transactions
              - link " Newsletter" [ref=f6e342] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/newsletter
                - generic [ref=f6e343]: 
                - text: Newsletter
      - contentinfo [ref=f6e344]:
        - paragraph [ref=f6e350]: © LambdaTest - Powered by OpenCart
  - text:  
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures';
  2  | import { reviewProduct } from '../test-data/users';
  3  | 
  4  | const textoValido = 'Reseña de prueba automatizada del Grupo 4, curso 048 UMG.'; // > 25 caracteres
  5  | 
  6  | test.describe('Regression - Reseñas y calificaciones', () => {
  7  |   test('calificar un producto con 5 estrellas @regression', async ({ productPage }) => {
  8  |     await productPage.gotoById(reviewProduct.id);
  9  |     await productPage.writeReview('Auto G4', textoValido, 5);
  10 |     await expect(productPage.reviewSuccess).toBeVisible();
  11 |   });
  12 | 
  13 |   test('enviar una reseña de texto con 4 estrellas @regression', async ({ productPage }) => {
  14 |     await productPage.gotoById(reviewProduct.id);
  15 |     await productPage.writeReview('Auto G4', `${textoValido} Texto con calificación 4.`, 4);
  16 |     await expect(productPage.reviewSuccess).toBeVisible();
  17 |   });
  18 | 
  19 |   test('reseña sin calificación es rechazada @regression', async ({ productPage }) => {
  20 |     await productPage.gotoById(reviewProduct.id);
  21 |     await productPage.writeReview('Auto G4', textoValido, null);
  22 |     await expect(productPage.reviewWarning).toContainText(/select a review rating/i);
  23 |   });
  24 | });
  25 | 
  26 | test.describe('Regression - Perfil y contraseña', () => {
  27 |   test('editar teléfono del perfil y verificar que persiste @regression', async ({ freshUser, accountPage }) => {
  28 |     const nuevoTelefono = '55551234';
  29 |     await accountPage.updateTelephone(nuevoTelefono);
  30 |     await expect(accountPage.successAlert).toContainText(/successfully updated/i);
  31 |     // Persistencia: volver a abrir el formulario y leer el valor guardado
  32 |     await accountPage.gotoEditAccount();
  33 |     await expect(accountPage.telephoneInput).toHaveValue(nuevoTelefono);
  34 |     expect(freshUser.telephone).not.toBe(nuevoTelefono);
  35 |   });
  36 | 
  37 |   test('cambio de contraseña: la anterior se rechaza y la nueva funciona @regression', async ({ freshUser, accountPage, loginPage, page }) => {
  38 |     const nuevaClave = 'NuevaClave#2026';
  39 |     await accountPage.changePassword(nuevaClave);
  40 |     await expect(accountPage.successAlert).toContainText(/password has been successfully updated/i);
  41 | 
  42 |     await accountPage.logout();
  43 |     // Clave anterior -> rechazada
  44 |     await loginPage.goto();
  45 |     await loginPage.login(freshUser.email, freshUser.password);
  46 |     await expect(loginPage.errorAlert).toBeVisible();
  47 |     // Clave nueva -> acceso
  48 |     await loginPage.login(freshUser.email, nuevaClave);
> 49 |     await expect(page).toHaveURL(/route=account\/account/);
     |                        ^ Error: expect(page).toHaveURL(expected) failed
  50 |   });
  51 | });
  52 | 
```