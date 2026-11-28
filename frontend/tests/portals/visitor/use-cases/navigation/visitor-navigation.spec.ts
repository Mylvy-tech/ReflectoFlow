import { expect, test } from '../../fixtures/base-pages'

test('navigates between Home and About', async ({ page, homePage, aboutPage, navigation }) => {
  await homePage.goto()

  await expect(homePage.heading).toBeVisible()
  await navigation.aboutLink.click()
  await expect(page).toHaveURL('/about')
  await expect(aboutPage.heading).toBeVisible()

  await navigation.homeLink.click()
  await expect(page).toHaveURL('/')
  await expect(homePage.heading).toBeVisible()
})

test('opens the About page directly', async ({ aboutPage }) => {
  await aboutPage.goto()

  await expect(aboutPage.heading).toBeVisible()
})
