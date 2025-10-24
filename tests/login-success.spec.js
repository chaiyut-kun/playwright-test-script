import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
import { users, newUsers, unknows, newFailUsers } from "./users";
dotenv.config();

// const email = process.env.EMAIL;
// const password = process.env.PASSWORD;
const ui = process.env.UI_URL;
const waitTime = 1_000;

test.use({
  video: {
    mode: "on",
    size: { width: 1280, height: 720 },
  },
});

// @=== Login Success ===@
test("Login to access system", async ({ page }) => {
  // ทำการล็อกอินตามรายชื่อที่มีอยู่ในระบบ
  let i = 0

  for (const user of users) {
    await page.goto(ui.toString());

    await page.getByRole('button', {name: 'started'}).click();

    await page.waitForTimeout(waitTime);

    await page.getByRole("textbox", { name: "email" }).fill(user.email);

    await page.waitForTimeout(waitTime);

    await page.getByRole("textbox", { name: "password" }).fill(user.password);

    await page.waitForTimeout(waitTime);

    await page.getByText("Login").click();

    i++
    await page.waitForTimeout(waitTime);
    await page.screenshot({ path: `screenshot/success/login-user${i}.png` });
  }
    await expect(
      page.locator('button[aria-label="client-response"]')
    ).toHaveText(/Login Successfully!/);
});