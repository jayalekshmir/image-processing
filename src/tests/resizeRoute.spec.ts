import request from "supertest";
import express from "express";
import resizeRoute from "../routers/resize";

const app = express();
app.use("/api", resizeRoute);

describe("GET /api/resize", () => {
  it("returns 400 if missing params", async () => {
    const res = await request(app).get("/api/resize");
    expect(res.status).toBe(400);
  });
});
