import { test, expect } from "@playwright/test";
import * as dotenv from "dotenv";
import { users, newUsers, unknows, newFailUsers } from "./users";
dotenv.config();

// const email = process.env.EMAIL;
// const password = process.env.PASSWORD;
const ui = process.env.UI_URL;
const waitTime = 1_000;

// @=== Login Success ===@
// test("Login to access system", async ({ page }) => {
//   // ทำการล็อกอินตามรายชื่อที่มีอยู่ในระบบ
//   let i = 0

//   for (const user of users) {
//     await page.goto(ui.toString());

//     await page.getByRole('button', {name: 'started'}).click();

//     await page.waitForTimeout(waitTime);

//     await page.getByRole("textbox", { name: "email" }).fill(user.email);

//     await page.waitForTimeout(waitTime);

//     await page.getByRole("textbox", { name: "password" }).fill(user.password);

//     await page.waitForTimeout(waitTime);

//     await page.getByText("Login").click();

//     i++
//     await page.waitForTimeout(waitTime);
//     await page.screenshot({ path: `screenshot/success/login-user${i}.png` });
//   }
//     await expect(
//       page.locator('button[aria-label="client-response"]')
//     ).toHaveText(/Login Successfully!/);
// });

// @=== Login Fail ===@
// test("Login Fail", async ({ page }) => {
//   // ทำการล็อกอินตามรายชื่อที่มีอยู่ในระบบ
//   let i = 0

//   for (const unknow of unknows) {
//     await page.goto(ui.toString());

//     await page.getByRole("textbox", { name: "email" }).fill(unknow.email);

//     // 3 s
//     await page.waitForTimeout(wattTime);

//     await page.getByRole("textbox", { name: "password" }).fill(unknow.password);

//     await page.waitForTimeout(wattTime);

//     await page.getByText("Login").click();

//     i++
//     await page.waitForTimeout(wattTime);
//     await page.screenshot({ path: `screenshot/fail/login-user${i}.png` });
//   }
//     await expect(
//       page.locator('button[aria-label="client-response"]')
//     ).toHaveText(/Login Successfully!/);

// });


// @=== Register Success ===@
// test("Register Success", async ({ page }) => {
//   // ทำการล็อกอินตามรายชื่อที่มีอยู่ในระบบ
//   let i = 0;

//   for (const newUser of newUsers) {
//     await page.goto(ui.toString());
//     await page.getByText("Register").click();

//     await page.getByRole("textbox", { name: "username" }).fill(newUser.username);

//     await page.getByRole("textbox", { name: "email" }).fill(newUser.email);

//     // 3 s
//     await page.waitForTimeout(wattTime);

//     await page
//       .getByRole("textbox", { name: "password" })
//       .fill(newUser.password);

//     await page.waitForTimeout(wattTime);

//     await page.getByText("Register").click();
//     await expect(
//       page.locator('button[aria-label="client-response"]')
//     ).toHaveText(/Register Successfully!/);

//     i++;
//     await page.waitForTimeout(wattTime);


//     await page.screenshot({ path: `screenshot/success/register-user${i}.png` });
//   }
// });

// @=== Register Fail ===@
// test("Register Fail", async ({ page }) => {
//   // ทำการล็อกอินตามรายชื่อที่มีอยู่ในระบบ
//   let i = 0;

//   for (const newUser of newFailUsers) {
//     await page.goto(ui.toString());
//     await page.getByText("Register").click();

//     await page.getByRole("textbox", { name: "username" }).fill(newUser.username);

//     await page.getByRole("textbox", { name: "email" }).fill(newUser.email);

//     // 3 s
//     await page.waitForTimeout(wattTime);

//     await page
//       .getByRole("textbox", { name: "password" })
//       .fill(newUser.password);

//     await page.waitForTimeout(wattTime);

//     await page.getByText("Register").click();
//     await expect(
//       page.locator('button[aria-label="client-response"]')
//     ).toHaveText(/Email already exists!/);

//     i++;
//     await page.waitForTimeout(wattTime);


//     await page.screenshot({ path: `screenshot/fail/register-user${i}.png` });
//   }
// });