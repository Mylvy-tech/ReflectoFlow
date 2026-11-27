import { defineConfig, devices } from '@playwright/test'

const isCI = Boolean(process.env.CI)
const host = '127.0.0.1'
const port = 4174
const baseURL = `http://${host}:${port}`

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  workers: isCI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL,
    screenshot: 'only-on-failure',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-safari', use: { ...devices['iPhone 12'] } },
  ],
  // https://playwright.dev/docs/test-webserver
  webServer: {
    command: `npm run dev -- --mode e2e --host ${host} --port ${port} --strictPort`,
    url: baseURL,
    reuseExistingServer: !isCI,
  },
})
