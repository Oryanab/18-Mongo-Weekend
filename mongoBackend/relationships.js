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

const UserSchema = mongoose.Schema({}, { strict: false }, { timestamps: true });

const User = mongoose.model("User", UserSchema);

const postsSchema = new Schema(
  {
    username: {
      type: String,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postsSchema);

const commectSchema = new Schema(
  {
    username: {
      type: String,
    },
    comment: {
      type: String,
    },
    post: {
      type: String,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commectSchema);

module.exports = { User, Post, Comment };
