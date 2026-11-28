# frontend

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run browser tests with [Playwright](https://playwright.dev/)

From `frontend/`, install the dependencies and browsers, then run the suite.

```sh
npm ci
npx playwright install chromium webkit
npm run test:e2e
```

On Linux, add `--with-deps` to the browser install command to install system packages.
Playwright starts Vite on `127.0.0.1:4174` and runs the tests in `tests/` on desktop Chromium and emulated Mobile Safari (WebKit).
The starter tests cover the frontend's public routes and require no backend or credentials.

Each portal under `tests/portals/` keeps its use-case specs, fixtures, and page objects together.
The Visitor portal covers the current public routes. The Client, Subcontractor, and Owner directories are ready for test cases as those screens are built.
Place reusable test data and utilities in `tests/shared/data/` and `tests/shared/utils/`.

Each `npm run test:e2e` run writes a timestamped `test-report-*.txt` file in `test-reports/`.
The text report groups results by use-case folder and shows the browser, duration, and totals.
Run `npx playwright show-report` to open the HTML report or `npm run test:e2e -- --ui` to debug interactively.

GitHub Actions runs the suite on pull requests targeting `main` and pushes to `main`.
Download the `playwright-text-report` and `playwright-report` artifacts from the run page for the text and HTML reports, including when tests fail.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
