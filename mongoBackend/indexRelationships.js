"use strict";
const mongoose = require("mongoose");
const { User, Post, Comment } = require("./relationships");

function addsecondUserToDB(username, first, last) {
  const user = new User({
    username,
    full_name: {
      first,
      last,
    },
  });
  user
    .save()
    .then((result) => {
      console.log("added " + username);
    })
    .catch((err) => {
      console.log(err);
      //   mongoose.connection.close();
    });
}

//addUserToDB("GoodGuyGreg", "Good Guy", "Greg");
//addsecondUserToDB("ScumbagSteve", "Scumbag", "Steve");

async function addPosts() {
  const newPosts = await Post.insertMany([
    {
      username: "GoodGuyGreg",
      title: "Passes out at party",
      body: "Wakes up early and cleans house",
    },
    {
      username: "GoodGuyGreg",
      title: "Steals your identity",
      body: "Raises your credit score",
    },

    {
      username: "GoodGuyGreg",
      title: "Reports a bug in your code",
      body: "Sends you a Pull Request",
    },

    {
      username: "ScumbagSteve",
      title: "Borrows something",
      body: "Sells it",
    },

    {
      username: "ScumbagSteve",
      title: "Borrows everything",
      body: "The end",
    },

    {
      username: "ScumbagSteve",
      title: "Forks your repo on github",
      body: "Sets to private",
    },
  ]);
}
//addPosts();
async function getPostId(postTitle) {
  const postId = await Post.findOne({ title: postTitle });
  return postId["_id"].toString();
}

async function addComments() {
  const newComments = await Comment.insertMany([
    {
      username: "GoodGuyGreg",
      comment: "Hope you got a good deal!",
      post: await getPostId("Borrows something"),
    },
    {
      username: "GoodGuyGreg",
      comment: "What's mine is yours!",
      post: await getPostId("Borrows everything"),
    },
    {
      username: "GoodGuyGreg",
      comment: "Don't violate the licensing agreement!",
      post: await getPostId("Forks your repo on github"),
    },
    {
      username: "ScumbagSteve",
      comment: "It still isn't clean",
      post: await getPostId("Passes out at party"),
    },
    {
      username: "ScumbagSteve",
      comment: "Denied your PR cause I found a hack",
      post: await getPostId("Reports a bug in your code"),
    },
  ]);
}
//addComments();

/*
    Relationship assignment
*/
function findAllUsers() {
  User.find()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function findAllPosts() {
  Post.find()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
function findAllPostsAuthoredGoodGuyGreg() {
  Post.find({ username: "GoodGuyGreg" })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
function findAllPostsAuthoredScumbagSteve() {
  Post.find({ username: "ScumbagSteve" })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function findAllComments() {
  Comment.find()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function findAllCommentsAuthoredGoodGuyGreg() {
  Comment.find({ username: "GoodGuyGreg" })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function findAllCommentsAuthoredScumbagSteve() {
  Comment.find({ username: "ScumbagSteve" })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function findAllCommentsBelongingReportsABugInYourCode() {
  await Comment.find({ post: await getPostId("Reports a bug in your code") })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
