import { test, expect, request } from "@playwright/test";

test.describe("API Integration Test", () => {
  const baseURL = "http://localhost:3000";

    test('Register User (Fail)', async ({ request }) => {
      const response = await request.post(`${baseURL}/api/register`, {
        data: {
          name: 'testuser',
          email: 'testuser@example.com',
          password: 'password123',
        },
      });

      expect(response.status()).toBe(409);
      const body = await response.json();
      expect(body.message).toContain('Email already exists!');
    });

});