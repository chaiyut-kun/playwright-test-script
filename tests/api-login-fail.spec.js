import { test, expect, request } from "@playwright/test";

test.describe("API Integration Test", () => {
  const baseURL = "http://localhost:3000";

  test("Login User and get Token (Fail)", async ({ request }) => {
    const response = await request.post(`${baseURL}/api/login`, {
      data: {
        email: "test627@mail.com",
        password: "test627",
      },
    });

    expect(response.status()).toBe(404);
    const body = await response.json();
    const token = body.token;
    expect(body.message).toContain('No account found for this user');

  })
});