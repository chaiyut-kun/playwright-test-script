import { test, expect, request } from "@playwright/test";
import { unknows } from "./users";

test.describe("API Integration Test", () => {
  const baseURL = "http://localhost:3000";

  test("Login User and get Token (Fail)", async ({ request }) => {
    for (const unknow of unknows) {
      const response = await request.post(`${baseURL}/api/login`, {
        data: {
          email: unknow.email,
          password: unknow.password,
        },
      });

      expect(response.status()).toBe(404);
      const body = await response.json();
      const token = body.token;
      
      expect(body.message).toContain("No account found for this user");
    }
  });
});
