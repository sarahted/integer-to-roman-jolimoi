import supertest from "supertest";
import { createServer } from "../server";

const app = createServer();
describe("convert to roman numeral route", () => {
  it("Should return 200 if number is in 1 - 100 interval (num = 1)", async () => {
    await supertest(app).get("/v1/convert/1").expect(200);
  });

  it("Should return 400 if number is not in 1 - 100 interval (num = 0)", async () => {
    await supertest(app).get("/v1/convert/0").expect(400);
  });

  it("Should return 400 if number is not in 1 - 100 interval (num = 101)", async () => {
    await supertest(app).get("/v1/convert/101").expect(400);
  });

  it("Should return LXXXVII if number is 87", async () => {
    const result = await supertest(app).get("/v1/convert/87");
    expect(result.body.data).toBeDefined();
    expect(result.body.data).toBe("LXXXVII");
  });

  it("Should return ERROR if number is 101", async () => {
    const result = await supertest(app).get("/v1/convert/101");
    expect(result.body.error).toBeDefined();
  });
});
