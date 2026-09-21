import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

for (const width of [375, 768, 1440]) {
  test(`FR/EN layout and navigation at ${width}px`, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('response', (response) => {
      if (response.status() >= 400)
        errors.push(`${response.status()} ${response.url()}`)
    })
    await page.setViewportSize({ width, height: 950 })
    await page.goto('/')
    await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName(
      'Dany Naser Addin',
    )
    for (const lang of ['en', 'fr']) {
      await page
        .getByRole('button', {
          name: lang === 'en' ? 'English' : 'Français',
          exact: true,
        })
        .click()
      await expect(page.locator('html')).toHaveAttribute('lang', lang)
      await expect(page.locator('.outlined-name')).toHaveText('NASER ADDIN')
      await expect(page.locator('.project-card')).toHaveCount(4)
      await page.locator('.workflow-steps button').nth(3).click()
      await expect(
        page.locator('.workflow-steps button').nth(3),
      ).toHaveAttribute('aria-pressed', 'true')
      await expect(page.locator('#workflow-description')).toContainText(
        lang === 'fr' ? 'Relire le code' : 'Review the code',
      )
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo(0, y)
          await new Promise((resolve) => setTimeout(resolve, 25))
        }
      })
      await expect
        .poll(() =>
          page
            .locator('img')
            .evaluateAll((images) =>
              images.every(
                (image) =>
                  (image as HTMLImageElement).complete &&
                  (image as HTMLImageElement).naturalWidth > 0,
              ),
            ),
        )
        .toBe(true)
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      )
      expect(overflow).toBe(false)
      await page.evaluate(() =>
        window.scrollTo({ top: 0, behavior: 'instant' }),
      )
      await page.screenshot({
        path: `test-results/site-${width}-${lang}.png`,
        fullPage: true,
        animations: 'disabled',
      })
      if (width === 375 || width === 1440) {
        const audit = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
          .analyze()
        expect(audit.violations).toEqual([])
      }
    }
    if (width < 1000) {
      await page.getByRole('button', { name: 'Menu', exact: true }).click()
      await page
        .locator('#mobile-navigation')
        .getByRole('link', { name: 'Réalisations' })
        .click()
      await expect(page.locator('#mobile-navigation')).toBeHidden()
      await expect(page).toHaveURL(/#projects$/)
      await page.getByRole('button', { name: 'Menu', exact: true }).click()
      await page.keyboard.press('Escape')
      await expect(page.locator('#mobile-navigation')).toBeHidden()
    }
    expect(errors).toEqual([])
  })
}

test('CV dialog keyboard behavior, downloads and published asset integrity', async ({
  page,
  request,
}) => {
  await page.goto('/')
  const trigger = page.getByRole('button', { name: 'CV', exact: true })
  await trigger.focus()
  await page.keyboard.press('Enter')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toBeVisible()
  await expect(dialog.getByRole('link')).toHaveCount(4)
  for (let i = 0; i < 7; i++) {
    await page.keyboard.press('Tab')
    expect(
      await dialog.evaluate((element) =>
        element.contains(document.activeElement),
      ),
    ).toBe(true)
  }
  const audit = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
    .analyze()
  expect(audit.violations).toEqual([])
  const downloadPromise = page.waitForEvent('download')
  await dialog
    .getByRole('link', { name: 'Download — Français', exact: true })
    .click()
  const download = await downloadPromise
  expect(download.suggestedFilename()).toBe('dany-naser-addin-fr.pdf')
  expect(await download.failure()).toBeNull()
  await page.keyboard.press('Escape')
  await expect(dialog).toBeHidden()
  await expect(trigger).toBeFocused()
  for (const lang of ['fr', 'en']) {
    const response = await request.get(`/cv/dany-naser-addin-${lang}.pdf`)
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/pdf')
    const digest = (bytes: Buffer) =>
      createHash('sha256').update(bytes).digest('hex')
    expect(digest(await response.body())).toBe(
      digest(readFileSync(`public/cv/dany-naser-addin-${lang}.pdf`)),
    )
  }
  for (const path of ['/og.png', '/robots.txt', '/sitemap.xml'])
    expect((await request.get(path)).status()).toBe(200)
})

test('Language persistence, reduced motion and unavailable storage', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.getByRole('button', { name: 'Français', exact: true }).click()
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
  await expect(page.locator('.outlined-name')).toHaveText('NASER ADDIN')
  expect(
    await page
      .locator('.ring-two')
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none')
  expect(
    await page
      .locator('html')
      .evaluate((element) => getComputedStyle(element).scrollBehavior),
  ).toBe('auto')
  await page.addInitScript(() =>
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Disabled', 'SecurityError')
      },
    }),
  )
  await page.reload()
  await page.getByRole('button', { name: 'Français', exact: true }).click()
  await expect(page.locator('html')).toHaveAttribute('lang', 'fr')
})

test('Essential content and CV links remain available without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false })
  const page = await context.newPage()
  await page.goto(process.env.SITE_URL || 'http://127.0.0.1:4173')
  await expect(page.getByRole('heading', { level: 1 })).toHaveAccessibleName(
    'Dany Naser Addin',
  )
  await expect(page.locator('.project-card')).toHaveCount(4)
  await expect(page.locator('#contact a[download]')).toHaveCount(2)
  await context.close()
})
