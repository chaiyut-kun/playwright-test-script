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


// @=== Register Success ===@
test("Register Success", async ({ page }) => {
  // สมัครสมาชิกตามร
  let i = 0;

  for (const newUser of newUsers) {
    await page.goto(ui.toString());

    await page.getByRole("button", { name: "started" }).click();

    await page.getByText("Register").click();

    await page
      .getByRole("textbox", { name: "username" })
      .fill(newUser.username);

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
    ).toHaveText(/Register Successfully!/);

    i++;
    await page.waitForTimeout(waitTime);

    await page.screenshot({ path: `screenshot/success/register-user${i}.png` });
  }
});

