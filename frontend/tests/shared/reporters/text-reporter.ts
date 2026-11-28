import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join, relative, sep } from 'node:path'
import type { FullConfig, FullResult, Reporter, Suite, TestCase } from '@playwright/test/reporter'

const divider = '═'.repeat(70)
const marks = { expected: '✓', unexpected: '✗', flaky: '~', skipped: '–' }

export default class TextReporter implements Reporter {
  private configDir = process.cwd()
  private tests: TestCase[] = []

  onBegin(config: FullConfig, suite: Suite) {
    this.configDir = config.configFile ? dirname(config.configFile) : config.rootDir
    this.tests = suite.allTests()
  }

  async onEnd(run: FullResult) {
    // Listing tests can finish successfully without executing any attempts.
    if (run.status === 'passed' && !this.tests.some((test) => test.results.length > 0)) return

    const groups = Map.groupBy(this.tests, (test) =>
      relative(this.configDir, dirname(test.location.file)).replaceAll(sep, '/'),
    )
    const totals = { expected: 0, unexpected: 0, flaky: 0, skipped: 0 }
    const lines: string[] = []

    for (const [folder, tests] of [...groups].sort(([left], [right]) => left.localeCompare(right))) {
      lines.push(`📁 ${folder}`, divider)
      for (const test of tests) {
        const outcome = test.outcome()
        const project = test.parent.project()?.name || 'default'
        const duration = test.results.reduce((total, result) => total + result.duration, 0)
        totals[outcome] += 1
        lines.push(`  ${marks[outcome]} ${test.title} [${project}] (${duration}ms)`)
      }
      lines.push('')
    }

    const runMark = run.status === 'passed' ? '✓' : '✗'
    lines.push(
      divider,
      '',
      `${runMark} ${totals.expected} passed, ${totals.unexpected} failed out of ${this.tests.length} tests`,
    )
    if (totals.flaky || totals.skipped) lines.push(`${totals.flaky} flaky, ${totals.skipped} skipped`)
    if (run.status !== 'passed') lines.push(`Run ${run.status}`)

    const username = (process.env.USERNAME || process.env.USER || 'playwright').replace(
      /[^a-zA-Z0-9_-]/g,
      '-',
    )
    const timestamp = run.startTime.toISOString().slice(0, -1).replace('T', '_').replace(/[:.]/g, '-')
    const reportPath = join(this.configDir, 'test-reports', `test-report-${username}-${timestamp}.txt`)

    try {
      await mkdir(dirname(reportPath), { recursive: true })
      await writeFile(reportPath, `${lines.join('\n')}\n`, { encoding: 'utf8', flag: 'wx' })
      console.log(`Text report saved to ${relative(this.configDir, reportPath)}`)
    } catch (error) {
      console.error('Could not save the Playwright text report', error)
      return { status: 'failed' as const }
    }
  }
}
