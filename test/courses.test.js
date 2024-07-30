const mongoose = require("mongoose");
const supertest = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../index");

const Courses = require("../models/courses.model");
const { describe } = require("mocha");
const request = supertest(app);

describe("Courses API", () => {
  before((done) => {
    mongoose.connect(
      "mongodb+srv://alexandrastraton1:StrAle2024@cluster0.vomctjz.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    mongoose.connection.once("open", () => done());
  });
});

after((done) => {
  mongoose.connection.close(done);
});

it("should get all courses", async () => {
  const course1 = new Courses({
    id: 1,
    title: "Agile Innovation for Business Growth",
    topic: "change-and-culture",
    learningFormats: ["virtual", "residential", "blended", "self-study"],
    bestseller: false,
    startDate: "2023-05-05T00:00:00+0000",
  });

  await course1.save();

  const res = await request.get("/api/courses");
  expect(res.status).to.equal(200);
  expect(res.body.length).to.equal(1);
});
