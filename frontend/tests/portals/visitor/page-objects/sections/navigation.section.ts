import type { Locator, Page } from '@playwright/test'

export class Navigation {
  readonly homeLink: Locator
  readonly aboutLink: Locator

  constructor(page: Page) {
    const navigation = page.getByRole('navigation')
    this.homeLink = navigation.getByRole('link', { name: 'Home', exact: true })
    this.aboutLink = navigation.getByRole('link', { name: 'About', exact: true })
  }
}
