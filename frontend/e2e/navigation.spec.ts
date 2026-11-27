import { expect, test } from '@playwright/test'

test('navigates between Home and About', async ({ page }) => {
  await page.goto('/')
  const navigation = page.getByRole('navigation')
  const homeHeading = page.getByRole('heading', { name: 'Documentation', exact: true })

  await expect(homeHeading).toBeVisible()
  await navigation.getByRole('link', { name: 'About', exact: true }).click()
  await expect(page).toHaveURL('/about')
  await expect(page.getByRole('heading', { name: 'This is an about page' })).toBeVisible()

  await navigation.getByRole('link', { name: 'Home', exact: true }).click()
  await expect(page).toHaveURL('/')
  await expect(homeHeading).toBeVisible()
})

test('opens the About page directly', async ({ page }) => {
  await page.goto('/about')

  await expect(page.getByRole('heading', { name: 'This is an about page' })).toBeVisible()
})
