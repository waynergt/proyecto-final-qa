import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  // La tienda es un entorno de práctica compartido por todos los grupos: se limita a 2 workers
  // para no saturarla (consideraciones éticas del enunciado) y reducir timeouts por carga.
  workers: 2,
  use: {
    baseURL: 'https://ecommerce-playground.lambdatest.io',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  ],
  // El reporte HTML se guarda dentro de reportes/ para versionarlo en el repo
  reporter: [['list'], ['html', { open: 'never', outputFolder: 'reportes/html-report' }]],
});
