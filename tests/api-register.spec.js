import { test, expect, request } from "@playwright/test";
import { userForUpdate1 } from "./users";

// test.describe("API Integration Test", () => {
//   const baseURL = "http://localhost:3000";

//     test('Register User', async ({ request }) => {
//       const response = await request.post(`${baseURL}/api/register`, {
//         data: {
//           name: 'testuser',
//           email: 'testuser@example.com',
//           password: 'password123',
//         },
//       });

//       expect(response.status()).toBe(201);
//       const body = await response.json();
//       expect(body.message).toContain('Register Successfully');
//     });

// });

test.describe("API Integration Test", () => {
  const baseURL = "http://localhost:3000";

  test("Register User for update", async ({ request }) => {
    for (const user of userForUpdate1) {
      const response = await request.post(`${baseURL}/api/register`, {
        data: {
          name: user.username,
          email: user.email,
          password: user.password,
        },
      });

      expect(response.status()).toBe(201);
      const body = await response.json();
      expect(body.message).toContain("Register Successfully");
    }
  });
});
