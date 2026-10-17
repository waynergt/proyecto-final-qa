# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: regression-reviews.spec.ts >> Regression - Perfil y contraseña >> editar teléfono del perfil y verificar que persiste @regression
- Location: tests/regression-reviews.spec.ts:27:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://ecommerce-playground.lambdatest.io/index.php?route=account/edit", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - generic [ref=f3e2]:
    - generic [ref=f3e3]:
      - heading [level=5] [ref=f3e4]:
        - text: Top categories
        - link "close" [ref=f3e5] [cursor=pointer]:
          - /url: "#mz-component-1626147655"
          - text: 
      - navigation [ref=f3e8]:
        - list [ref=f3e10]:
          - listitem [ref=f3e11]:
            - link "Components" [ref=f3e12] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=25
          - listitem [ref=f3e18]:
            - link "Cameras" [ref=f3e19] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33
          - listitem [ref=f3e25]:
            - link "Phone, Tablets & Ipod" [ref=f3e26] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=57
          - listitem [ref=f3e32]:
            - link "Software" [ref=f3e33] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=17
          - listitem [ref=f3e39]:
            - link "MP3 Players" [ref=f3e40] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=34
          - listitem [ref=f3e46]:
            - link "Laptops & Notebooks" [ref=f3e47] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=18
          - listitem [ref=f3e53]:
            - link "Desktops and Monitors" [ref=f3e54] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=28
          - listitem [ref=f3e60]:
            - link "Printers & Scanners" [ref=f3e61] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=30
          - listitem [ref=f3e67]:
            - link "Mice and Trackballs" [ref=f3e68] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=29
          - listitem [ref=f3e74]:
            - link "Fashion and Accessories" [ref=f3e75] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f3e81]:
            - link "Beauty and Saloon" [ref=f3e82] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f3e88]:
            - link "Autoparts and Accessories" [ref=f3e89] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f3e95]:
            - link "Washing machine" [ref=f3e96] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f3e102]:
            - link "Gaming consoles" [ref=f3e103] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f3e109]:
            - link "Air conditioner" [ref=f3e110] [cursor=pointer]:
              - /url: ""
          - listitem [ref=f3e116]:
            - link "Web Cameras" [ref=f3e117] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=32
    - generic [ref=f3e123]:
      - heading [level=5] [ref=f3e124]:
        - text: Quick Links
        - link "close" [ref=f3e125] [cursor=pointer]:
          - /url: "#mz-component-162614767"
          - text: 
      - generic [ref=f3e126]:
        - navigation [ref=f3e128]:
          - list [ref=f3e130]:
            - listitem [ref=f3e131]:
              - link " Special Hot" [ref=f3e132] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                - generic [ref=f3e133]: 
                - generic [ref=f3e134]: Special
                - generic [ref=f3e136]: Hot
            - listitem [ref=f3e137]:
              - link " Wishlist" [ref=f3e138] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f3e139]: 
                - generic [ref=f3e140]: Wishlist
            - listitem [ref=f3e142]:
              - link " Compare" [ref=f3e143] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
                - generic [ref=f3e144]: 
                - generic [ref=f3e145]: Compare
            - listitem [ref=f3e147]:
              - link " My account" [ref=f3e148] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f3e149]: 
                - generic [ref=f3e150]: My account
            - listitem [ref=f3e152]:
              - link " Blog" [ref=f3e153] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - generic [ref=f3e154]: 
                - generic [ref=f3e155]: Blog
            - listitem [ref=f3e157]:
              - link " Tracking" [ref=f3e158] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/tracking
                - generic [ref=f3e159]: 
                - generic [ref=f3e160]: Tracking
            - listitem [ref=f3e162]:
              - link " Contact us" [ref=f3e163] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=information/contact
                - generic [ref=f3e164]: 
                - generic [ref=f3e165]: Contact us
        - separator [ref=f3e168]
        - paragraph [ref=f3e171]: Place here any module, widget, design or HTML. for example menu, categories
    - generic [ref=f3e172]:
      - heading [level=5] [ref=f3e173]:
        - text: Cart
        - link "close" [ref=f3e174] [cursor=pointer]:
          - /url: "#cart-total-drawer"
          - text: 
      - generic [ref=f3e175]:
        - generic [ref=f3e176]:
          - paragraph [ref=f3e177]: Your shopping cart is empty!
          - table [ref=f3e178]:
            - rowgroup [ref=f3e179]:
              - row [ref=f3e180]:
                - cell "Sub-Total:" [ref=f3e181]
                - cell [ref=f3e182]:
                  - strong [ref=f3e183]: $0.00
              - row [ref=f3e184]:
                - cell "Total:" [ref=f3e185]
                - cell [ref=f3e186]:
                  - strong [ref=f3e187]: $0.00
        - generic [ref=f3e189]:
          - button " Edit cart" [ref=f3e191] [cursor=pointer]:
            - generic [ref=f3e192]: 
            - text: Edit cart
          - button " Checkout" [ref=f3e194] [cursor=pointer]:
            - generic [ref=f3e195]: 
            - text: Checkout
    - generic [ref=f3e196]:
      - banner [ref=f3e197]:
        - button "" [ref=f3e199] [cursor=pointer]
        - generic [ref=f3e201]:
          - generic [ref=f3e202]:
            - figure [ref=f3e204]:
              - link [ref=f3e205] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - img "Poco Electro" [ref=f3e206]
            - generic [ref=f3e210]:
              - generic [ref=f3e212]:
                - button "All Categories" [ref=f3e214] [cursor=pointer]
                - textbox "Search For Products" [ref=f3e216]
              - button "Search" [ref=f3e218] [cursor=pointer]
            - link "Compare" [ref=f3e220] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/compare
            - link "Wishlist" [ref=f3e225] [cursor=pointer]:
              - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
            - button "0" [ref=f3e230] [cursor=pointer]
          - text: 
        - generic [ref=f3e236]:
          - generic [ref=f3e238] [cursor=pointer]:
            - button "Shop by Category" [ref=f3e240]
            - navigation [ref=f3e245]:
              - list [ref=f3e247]:
                - listitem [ref=f3e248]:
                  - link "Home" [ref=f3e249]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
                - listitem [ref=f3e252]:
                  - link "Special Hot" [ref=f3e253]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=product/special
                    - generic [ref=f3e254]: Special
                    - generic [ref=f3e256]: Hot
                - listitem [ref=f3e257]:
                  - link "Blog" [ref=f3e258]:
                    - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home
                - listitem [ref=f3e261]:
                  - button "Mega Menu" [ref=f3e262]
                - listitem [ref=f3e265]:
                  - button "AddOns Featured" [ref=f3e266]:
                    - generic [ref=f3e267]: AddOns
                    - generic [ref=f3e269]: Featured
                - listitem [ref=f3e270]:
                  - button " My account" [ref=f3e271]:
                    - generic [ref=f3e272]: 
                    - generic [ref=f3e273]: My account
          - text:  
          - paragraph [ref=f3e277]:
            - strong [ref=f3e278]: This is a dummy website for Web Automation Testing
      - generic [ref=f3e279]:
        - navigation "breadcrumb" [ref=f3e280]:
          - list [ref=f3e281]:
            - listitem [ref=f3e282]:
              - link "" [ref=f3e283] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=common/home
            - listitem [ref=f3e285]: / Account
        - generic [ref=f3e286]:
          - generic [ref=f3e287]: 
          - text: "Success: Your account has been successfully updated."
        - generic [ref=f3e288]:
          - generic [ref=f3e289]:
            - generic [ref=f3e290]:
              - heading "My Account" [level=2] [ref=f3e291]
              - generic [ref=f3e293]:
                - link " Edit your account information" [ref=f3e295] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/edit
                  - generic [ref=f3e296]: 
                  - text: Edit your account information
                - link " Change your password" [ref=f3e298] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/password
                  - generic [ref=f3e299]: 
                  - text: Change your password
                - link " Modify your address book entries" [ref=f3e301] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/address
                  - generic [ref=f3e302]: 
                  - text: Modify your address book entries
                - link " Modify your wish list" [ref=f3e304] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                  - generic [ref=f3e305]: 
                  - text: Modify your wish list
                - link " Subscribe / unsubscribe to newsletter" [ref=f3e307] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/newsletter
                  - generic [ref=f3e308]: 
                  - text: Subscribe / unsubscribe to newsletter
            - generic [ref=f3e309]:
              - heading "My Orders" [level=2] [ref=f3e310]
              - generic [ref=f3e312]:
                - link " View your order history" [ref=f3e314] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/order
                  - generic [ref=f3e315]: 
                  - text: View your order history
                - link " Downloads" [ref=f3e317] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/download
                  - generic [ref=f3e318]: 
                  - text: Downloads
                - link " Your Reward Points" [ref=f3e320] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/reward
                  - generic [ref=f3e321]: 
                  - text: Your Reward Points
                - link " View your return requests" [ref=f3e323] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/return
                  - generic [ref=f3e324]: 
                  - text: View your return requests
                - link " Your Transactions" [ref=f3e326] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/transaction
                  - generic [ref=f3e327]: 
                  - text: Your Transactions
                - link " Recurring payments" [ref=f3e329] [cursor=pointer]:
                  - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/recurring
                  - generic [ref=f3e330]: 
                  - text: Recurring payments
            - generic [ref=f3e331]:
              - heading "My Affiliate Account" [level=2] [ref=f3e332]
              - link " Register for an affiliate account" [ref=f3e334] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/affiliate/add
                - generic [ref=f3e335]: 
                - text: Register for an affiliate account
          - complementary [ref=f3e336]:
            - generic [ref=f3e337]:
              - link " My Account" [ref=f3e338] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/account
                - generic [ref=f3e339]: 
                - text: My Account
              - link " Edit Account" [ref=f3e340] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/edit
                - generic [ref=f3e341]: 
                - text: Edit Account
              - link " Password" [ref=f3e342] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/password
                - generic [ref=f3e343]: 
                - text: Password
              - link " Address Book" [ref=f3e344] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/address
                - generic [ref=f3e345]: 
                - text: Address Book
              - link " Wish List" [ref=f3e346] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/wishlist
                - generic [ref=f3e347]: 
                - text: Wish List
              - link " Notification" [ref=f3e348] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/account/notification/product
                - generic [ref=f3e349]: 
                - text: Notification
              - link " Order History" [ref=f3e350] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/order
                - generic [ref=f3e351]: 
                - text: Order History
              - link " Downloads" [ref=f3e352] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/download
                - generic [ref=f3e353]: 
                - text: Downloads
              - link " Recurring payments" [ref=f3e354] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/recurring
                - generic [ref=f3e355]: 
                - text: Recurring payments
              - link " Reward Points" [ref=f3e356] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/reward
                - generic [ref=f3e357]: 
                - text: Reward Points
              - link " Returns" [ref=f3e358] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/return
                - generic [ref=f3e359]: 
                - text: Returns
              - link " Transactions" [ref=f3e360] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/transaction
                - generic [ref=f3e361]: 
                - text: Transactions
              - link " Newsletter" [ref=f3e362] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/newsletter
                - generic [ref=f3e363]: 
                - text: Newsletter
              - link " Logout" [ref=f3e364] [cursor=pointer]:
                - /url: https://ecommerce-playground.lambdatest.io/index.php?route=account/logout
                - generic [ref=f3e365]: 
                - text: Logout
      - contentinfo [ref=f3e366]:
        - paragraph [ref=f3e372]: © LambdaTest - Powered by OpenCart
  - text:  
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class AccountPage {
  4  |   readonly page: Page;
  5  |   readonly myAccountHeading: Locator;
  6  |   readonly logoutHeading: Locator;
  7  |   // Formulario "Edit Account" (route=account/edit)
  8  |   readonly firstNameInput: Locator;
  9  |   readonly telephoneInput: Locator;
  10 |   // Formulario "Change Password" (route=account/password)
  11 |   readonly passwordInput: Locator;
  12 |   readonly confirmInput: Locator;
  13 |   readonly continueButton: Locator;
  14 |   readonly successAlert: Locator;
  15 | 
  16 |   constructor(page: Page) {
  17 |     this.page = page;
  18 |     this.myAccountHeading = page.getByRole('heading', { name: 'My Account' }).first();
  19 |     this.logoutHeading = page.getByRole('heading', { name: 'Account Logout' });
  20 |     this.firstNameInput = page.locator('#input-firstname');
  21 |     this.telephoneInput = page.locator('#input-telephone');
  22 |     this.passwordInput = page.locator('#input-password');
  23 |     this.confirmInput = page.locator('#input-confirm');
  24 |     this.continueButton = page.locator('input[type="submit"][value="Continue"]');
  25 |     this.successAlert = page.locator('.alert-success');
  26 |   }
  27 | 
  28 |   async goto() {
  29 |     await this.page.goto('/index.php?route=account/account');
  30 |   }
  31 | 
  32 |   async logout() {
  33 |     await this.page.goto('/index.php?route=account/logout');
  34 |   }
  35 | 
  36 |   async gotoEditAccount() {
> 37 |     await this.page.goto('/index.php?route=account/edit');
     |                     ^ Error: page.goto: Test timeout of 30000ms exceeded.
  38 |   }
  39 | 
  40 |   async updateTelephone(newPhone: string) {
  41 |     await this.gotoEditAccount();
  42 |     await this.telephoneInput.fill(newPhone);
  43 |     await this.continueButton.click();
  44 |   }
  45 | 
  46 |   async changePassword(newPassword: string) {
  47 |     await this.page.goto('/index.php?route=account/password');
  48 |     await this.passwordInput.fill(newPassword);
  49 |     await this.confirmInput.fill(newPassword);
  50 |     await this.continueButton.click();
  51 |   }
  52 | }
  53 | 
```