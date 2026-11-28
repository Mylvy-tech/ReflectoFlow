import type { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly heading: Locator

  constructor(private readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Documentation', exact: true })
  }

  async goto() {
    await this.page.goto('/')
  }
}
