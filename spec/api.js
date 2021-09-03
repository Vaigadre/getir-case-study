const { expect } = require("chai");
const supertest = require("supertest");
require("dotenv").config({
  path: `.${process.env.NODE_ENV}.env`
});
const DB = require("../db");
const { app } = require("../app");

const server = supertest(app);

describe("Fetching records", () => {
  before(async () => await DB.connectDb());
  it("success: fetches records", (done) => {
    server
      .post("/api/v1/records")
      .send({
        startDate: "2015-12-26",
        endDate: "2016-12-30",
        minCount: 2700,
        maxCount: 3000
      })
      .expect(200)
      .then((res) => {
        expect(res.body.code).to.be.equal(0);
        done();
      })
      .catch((err) => console.log(err));
  });

  it("failure: minCount is string", (done) => {
    server
      .post("/api/v1/records")
      .send({
        startDate: "2015-12-26",
        endDate: "2016-12-30",
        minCount: "2700",
        maxCount: 3000
      })
      .expect(400)
      .then((res) => {
        expect(res.body.code).to.be.equal(400);
        done();
      })
      .catch((err) => console.log(err));
  });

  it("failure: startDate is not valid ISO date string", (done) => {
    server
      .post("/api/v1/records")
      .send({
        startDate: "20151226",
        endDate: "2016-12-30",
        minCount: 2700,
        maxCount: 3000
      })
      .expect(400)
      .then((res) => {
        expect(res.body.code).to.be.equal(400);
        done();
      })
      .catch((err) => console.log(err));
  });

  it("failure: startDate is number", (done) => {
    server
      .post("/api/v1/records")
      .send({
        startDate: 20151226,
        endDate: "2016-12-30",
        minCount: 2700,
        maxCount: 3000
      })
      .expect(400)
      .then((res) => {
        expect(res.body.code).to.be.equal(400);
        done();
      })
      .catch((err) => console.log(err));
  });
});
