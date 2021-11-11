"use strict";
const mongoose = require("mongoose");
const { User, Post, Comment } = require("./relationships");

// function addUserToDB(username, first_name, last_name) {
//   const user = new User({
//     username: username,
//     first_name: first_name,
//     last_name: last_name,
//   });
//   user
//     .save()
//     .then((result) => {
//       console.log("added " + username);
//     })
//     .catch((err) => {
//       console.log(err);
//       //   mongoose.connection.close();
//     });
// }

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
addsecondUserToDB("ScumbagSteve", "Scumbag", "Steve");
