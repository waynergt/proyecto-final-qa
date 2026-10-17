// Datos FICTICIOS de prueba del Grupo 4. No usar datos personales reales.
export interface TestUser {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
}

// Cuenta FIJA de automatización (creada manualmente). Solo se usa para login/logout:
// ningún test le cambia datos, para que Chromium y Firefox no choquen entre sí.
export const validUser: TestUser = {
  firstName: 'Juan',
  lastName: 'Lopez',
  email: process.env.QA_EMAIL ?? 'juanlopez@miumg.edu.gt',
  telephone: '123456789',
  password: process.env.QA_PASSWORD ?? 'Pruebajuan',
};

// Genera un usuario nuevo con email único. Se usa en los tests que MODIFICAN la cuenta
// (registro, perfil, contraseña), así cada test y cada navegador trabaja con su propia cuenta.
export function newRandomUser(tag = 'auto'): TestUser {
  const id = `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  return {
    firstName: 'Auto',
    lastName: 'Grupo4',
    email: `qa.g4.${tag}.${id}@example.com`,
    telephone: '55550000',
    password: 'Prueba123!',
  };
}

// Tabla de decisión de acceso (casos negativos) -> se usa para PARAMETRIZAR el test de login.
export interface LoginNegativeCase {
  titulo: string;
  email: string;
  password: string;
}

export const loginNegativeCases: LoginNegativeCase[] = [
  { titulo: 'email no registrado', email: 'noexiste.g4.auto@example.com', password: 'ClaveFicticia#2026' },
  { titulo: 'contraseña incorrecta', email: validUser.email, password: 'ClaveIncorrecta#2026' },
  { titulo: 'campos vacíos', email: '', password: '' },
];

// Producto acordado para pruebas de reseñas (product_id=40 -> "iPhone").
export const reviewProduct = { id: 40, name: 'iPhone' };
