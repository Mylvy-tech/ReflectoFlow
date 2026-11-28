import { test as base } from '@playwright/test'
import { AboutPage } from '../page-objects/pages/about.page'
import { HomePage } from '../page-objects/pages/home.page'
import { Navigation } from '../page-objects/sections/navigation.section'

type VisitorFixtures = {
  aboutPage: AboutPage
  homePage: HomePage
  navigation: Navigation
}

export const test = base.extend<VisitorFixtures>({
  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page))
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  navigation: async ({ page }, use) => {
    await use(new Navigation(page))
  },
})

export { expect } from '@playwright/test'
