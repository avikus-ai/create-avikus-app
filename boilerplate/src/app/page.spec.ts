import { test, expect, type Page } from "@playwright/test"

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test.describe("Main Page", () => {
  test("should have main logo", async ({ page }) => {
    await expect(page.getByAltText("Next.js Logo")).toBeVisible()
  })
})
