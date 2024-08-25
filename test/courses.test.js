process.env.NODE_ENV = "test";
const chai = require("chai");
const expect = chai.expect;
const app = require("../index");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("GET all courses", () => {
  it("should get all courses in a list", (done) => {
    chai
      .request(app)
      .get("/api/courses")
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });
  it("should throw an error if the route is incorrect", (done) => {
    chai
      .request(app)
      .get("/api/notARoute")
      .end((err, res) => {
        res.should.have.status(404);
        expect(res.body.message).to.equal("Not Found");
        done();
      });
  });
});

describe("POST a course", () => {
  it("should post a new course", (done) => {
    chai
      .request(app)
      .post("/api/courses")
      .send({
        id: 14,
        title: "Example",
        topic: "business",
        learningFormats: ["example", "another exam[ple"],
        bestseller: false,
        startDate: "2022-07-18T00:00:00+0000",
      })
      .end((err, res) => {
        res.should.have.status(201);
        expect(res.body).to.include.keys("title");
        expect(res.body).to.include.keys("topic");
        expect(res.body).to.include.keys("learningFormats");
        expect(res.body).to.include.keys("startDate");
        done();
      });
  });
  it("should handle missing credentials correctly when posting with missing credentials", (done) => {
    chai
      .request(app)
      .post("/api/courses")
      .send({
        learningFormats: ["online"],
        bestseller: false,
        startDate: "2022-07-18T00:00:00+0000",
      })
      .end((err, res) => {
        res.should.have.status(400);
        expect(res.body.message).to.equal("Missing credentials");
        done();
      });
  });
});

//test for delete
//check id is correct
//id is correct but doesn't exist
