const mongoose = require("mongoose");

const CoursesSchema = mongoose.Schema({
  id: {
    type: Number,
    required: [true, "ID is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  topic: {
    type: String,
    required: [true, "Topic is required"],
  },
  learningFormats: {
    type: [String],
    required: [true, "Learning formats are required"],
  },
  bestseller: {
    type: Boolean,
    required: [true, "Bestseller status is required"],
  },
  startDate: {
    type: Date,
    required: [true, "Start date is required"],
  },
});

const Courses = mongoose.model("Course", CoursesSchema);

module.exports = Courses;
