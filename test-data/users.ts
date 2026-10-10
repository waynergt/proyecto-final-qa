// Datos FICTICIOS de prueba.
export interface TestUser {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  password: string;
}

// Usuario fijo creado manualmente en la tienda (actualizar con el que registren).
export const validUser: TestUser = {
  firstName: 'Juan',
  lastName: 'Lopez',
  email: process.env.QA_EMAIL ?? 'juanlopez@miumg.edu.gt',
  telephone: '123456789',
  password: process.env.QA_PASSWORD ?? 'Pruebajuan',
};

// Genera un usuario nuevo con email único para pruebas de registro.
export function newRandomUser(): TestUser {
  const id = Date.now();
  return {
    firstName: 'Test',
    lastName: 'Grupo4',
    email: `qa.g4.${id}@example.com`,
    telephone: '55550000',
    password: 'Prueba123!',
  };
}
