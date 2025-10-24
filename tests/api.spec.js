// tests/api.spec.ts
import { test, expect, request } from "@playwright/test";

test.describe("API Integration Test", () => {
  const baseURL = "http://localhost:3000";

  test("Get Users with Auth Token", async ({ request }) => {
    const loginRes = await request.post(`${baseURL}/api/login`, {
      data: {
        email: "testuser@example.com",
        password: "password123",
      },
    });

    const { token } = await loginRes.json();

    const userContext = await test.request.newContext({
      extraHTTPHeaders: {
        Cookie: `token=${token}`, // ส่ง cookie เข้าไปใน request
      },
    });

    const usersRes = await userContext.get(`${baseURL}/api/users`);
    expect(usersRes.status()).toBe(200);

    const users = await usersRes.json();
    expect(users.data.length).toBeGreaterThan(0);
  });

});

