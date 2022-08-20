import app from "../index";
import request from "supertest";

describe("Test the endpoint response", () => {
  it("gets api/images endpoint", async () => {
    const res = await request(app).get("/api/images");
    expect(res.statusCode).toEqual(200);
  });
});
