import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
import { users, newUsers, unknows, newFailUsers } from "./users";
dotenv.config();

const ui = process.env.UI_URL;
const waitTime = 1_000;

// / @=== Register Fail ===@
test("Register Fail", async ({ page }) => {
  // ทำการล็อกอินตามรายชื่อที่มีอยู่ในระบบ
  let i = 0;

  for (const newUser of newFailUsers) {
    await page.goto(ui.toString());

    await page.getByRole("button", { name: "started" }).click();

    
    await page.getByText("Register").click();

    await page.getByRole("textbox", { name: "username" }).fill(newUser.username);

    await page.getByRole("textbox", { name: "email" }).fill(newUser.email);

    // 3 s
    await page.waitForTimeout(waitTime);

    await page
      .getByRole("textbox", { name: "password" })
      .fill(newUser.password);

    await page.waitForTimeout(waitTime);

    await page.getByText("Register").click();
    await expect(
      page.locator('button[aria-label="client-response"]')
    ).toHaveText(/Email already exists!/);

    i++;
    await page.waitForTimeout(waitTime);

    await page.screenshot({ path: `screenshot/fail/register-user${i}.png` });
  }
});