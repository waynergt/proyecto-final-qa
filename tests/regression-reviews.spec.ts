import { test, expect } from '../fixtures';
import { reviewProduct } from '../test-data/users';

const textoValido = 'Reseña de prueba automatizada del Grupo 4, curso 048 UMG.'; // > 25 caracteres

test.describe('Regression - Reseñas y calificaciones', () => {
  test('calificar un producto con 5 estrellas @regression', async ({ productPage }) => {
    await productPage.gotoById(reviewProduct.id);
    await productPage.writeReview('Auto G4', textoValido, 5);
    await expect(productPage.reviewSuccess).toBeVisible();
  });

  test('enviar una reseña de texto con 4 estrellas @regression', async ({ productPage }) => {
    await productPage.gotoById(reviewProduct.id);
    await productPage.writeReview('Auto G4', `${textoValido} Texto con calificación 4.`, 4);
    await expect(productPage.reviewSuccess).toBeVisible();
  });

  test('reseña sin calificación es rechazada @regression', async ({ productPage }) => {
    await productPage.gotoById(reviewProduct.id);
    await productPage.writeReview('Auto G4', textoValido, null);
    await expect(productPage.reviewWarning).toContainText(/select a review rating/i);
  });
});

test.describe('Regression - Perfil y contraseña', () => {
  test('editar teléfono del perfil y verificar que persiste @regression', async ({ freshUser, accountPage }) => {
    const nuevoTelefono = '55551234';
    await accountPage.updateTelephone(nuevoTelefono);
    await expect(accountPage.successAlert).toContainText(/successfully updated/i);
    // Persistencia: volver a abrir el formulario y leer el valor guardado
    await accountPage.gotoEditAccount();
    await expect(accountPage.telephoneInput).toHaveValue(nuevoTelefono);
    expect(freshUser.telephone).not.toBe(nuevoTelefono);
  });

  test('cambio de contraseña: la anterior se rechaza y la nueva funciona @regression', async ({ freshUser, accountPage, loginPage, page }) => {
    const nuevaClave = 'NuevaClave#2026';
    await accountPage.changePassword(nuevaClave);
    await expect(accountPage.successAlert).toContainText(/password has been successfully updated/i);

    await accountPage.logout();
    // Clave anterior -> rechazada
    await loginPage.goto();
    await loginPage.login(freshUser.email, freshUser.password);
    await expect(loginPage.errorAlert).toBeVisible();
    // Clave nueva -> acceso
    await loginPage.login(freshUser.email, nuevaClave);
    await expect(page).toHaveURL(/route=account\/account/);
  });
});
