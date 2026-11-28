import type { Locator, Page } from '@playwright/test'

export class AboutPage {
  readonly heading: Locator

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'This is an about page', exact: true })
  }

  async goto() {
    await this.page.goto('/about')
  }
}
