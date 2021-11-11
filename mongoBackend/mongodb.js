"use strict";
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DBURL)
  .then((result) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    name: {
      type: String,
    },
    surName: {
      type: String,
    },
    birth: {
      type: Date,
    },
    phone: {
      type: String,
    },
    gender: {
      type: String,
    },
    courses: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = { Student };
