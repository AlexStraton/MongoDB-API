const express = require("express");
const mongoose = require("mongoose");
const Courses = require("./models/courses.model");
const app = express();
const dotenv = require("dotenv");

const envFile = process.env.NODE_ENV === "test" ? ".env.test" : ".env.dev";
dotenv.config({ path: envFile });

app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running");
});

app.get("/", (req, res) => {
  res.send("Hello from node API");
});

app.post("/api/courses", async (req, res) => {
  try {
    const courses = await Courses.create(req.body);
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Courses.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const course = await Courses.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted sucessfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect(
    "mongodb+srv://alexandrastraton1:StrAle2024@cluster0.vomctjz.mongodb.net/Cluster0?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("connected to db");
  })
  .catch(() => {
    console.log("Conenction failed");
  });

module.exports = app;
