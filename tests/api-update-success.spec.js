import { test, expect, request } from "@playwright/test";
import { userForUpdate2, userForUpdate1 } from "./users";

test.describe("API Integration Test", () => {
  const baseURL = "http://localhost:3000";

  test("update user by id (success)", async ({ request }) => {
    for (const user of userForUpdate2) {
      const response = await request.put(`${baseURL}/api/users/${user.id}`, {
        data: {
          name: user.username,
          email: user.email,
          password: user.password,
        },
      });

      expect(response.status()).toBe(200);
      const body = await response.json();
      const token = body.token;
      expect(body.message).toContain("Update user Successfully!");
    }
  });
});

