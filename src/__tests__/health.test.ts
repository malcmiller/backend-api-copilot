import request from "supertest";
import app, { server } from "../index";

describe("Health Check Endpoint", () => {
  it("should return status ok and a timestamp", async () => {
    const response = await request(app).get("/health");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("status", "ok");
    expect(response.body).toHaveProperty("timestamp");
    expect(new Date(response.body.timestamp).toString()).not.toBe(
      "Invalid Date",
    );
  });
});

afterAll(() => {
  server.close(); // Close the server after all tests
});
