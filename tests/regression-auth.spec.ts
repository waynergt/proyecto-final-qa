import { test, expect } from '../fixtures';
import { validUser, newRandomUser, loginNegativeCases } from '../test-data/users';

test.describe('Regression - Autenticación', () => {
  test('login con credenciales válidas muestra My Account @regression', async ({ loginPage, accountPage, page }) => {
    await loginPage.goto();
    await loginPage.login(validUser.email, validUser.password);
    await expect(page).toHaveURL(/route=account\/account/);
    await expect(accountPage.myAccountHeading).toBeVisible();
  });

  // Test PARAMETRIZADO: la misma prueba se repite con cada fila de la tabla de decisión.
  for (const caso of loginNegativeCases) {
    test(`login rechazado con ${caso.titulo} @regression`, async ({ loginPage, page }) => {
      await loginPage.goto();
      await loginPage.login(caso.email, caso.password);
      await expect(loginPage.errorAlert).toBeVisible();
      await expect(loginPage.errorAlert).toContainText(/No match for E-Mail Address and\/or Password|exceeded allowed number of login attempts/i);
      await expect(page).toHaveURL(/route=account\/login/);
    });
  }

  test('registro de usuario válido crea la cuenta @regression', async ({ registerPage, page }, testInfo) => {
    const user = newRandomUser(testInfo.project.name);
    await registerPage.goto();
    await registerPage.register(user);
    await expect(page).toHaveURL(/route=account\/success/);
    await expect(registerPage.successHeading).toBeVisible();
  });

  test('registro con email ya utilizado es rechazado @regression', async ({ registerPage, page }) => {
    await registerPage.goto();
    await registerPage.register({ ...validUser, firstName: 'Duplicado' });
    await expect(registerPage.warningAlert).toContainText(/E-Mail Address is already registered/i);
    await expect(page).toHaveURL(/route=account\/register/);
  });
});
