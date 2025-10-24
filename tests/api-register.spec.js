import { test, expect, request } from "@playwright/test";

test.describe("API Integration Test", () => {
  const baseURL = "http://localhost:3000";

    test('Register User', async ({ request }) => {
      const response = await request.post(`${baseURL}/api/register`, {
        data: {
          name: 'testuser',
          email: 'testuser@example.com',
          password: 'password123',
        },
      });

      expect(response.status()).toBe(201);
      const body = await response.json();
      expect(body.message).toContain('Register Successfully');
    });

  test("Login User and get Token", async ({ request }) => {
    const response = await request.post(`${baseURL}/api/login`, {
      data: {
        email: "test627@mail.com",
        password: "test627",
      },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    const token = body.token;
    expect(body.token).toBeTruthy();

  })
});