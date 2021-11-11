"use strict";
const mongoose = require("mongoose");
const { Student } = require("./mongodb");

function addStudentToDB(
  studentName,
  studentsurName,
  studentbirth,
  studentphone,
  studentgender,
  studentcourses
) {
  const student = new Student({
    name: studentName,
    surName: studentsurName,
    birth: new Date(studentbirth),
    phone: studentphone,
    gender: studentgender,
    courses: studentcourses,
  });
  student
    .save()
    .then((result) => {
      console.log("added " + studentName);
    })
    .catch((err) => {
      console.log(err);
      //   mongoose.connection.close();
    });
}

function getAllStudents() {
  Student.find()
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      //   mongoose.connection.close();
    });
}
//getAllStudents();

function getAllStudentsNameIdo() {
  Student.find({ name: /^ido$/i })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      //   mongoose.connection.close();
    });
}
//getAllStudentsNameIdo();

function getAllStudentsIncludeLaw() {
  Student.find({ courses: { $in: ["Law"] } })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      //   mongoose.connection.close();
    });
}

//getAllStudentsIncludeLaw();

function getAllStudentsIncludeJavaGenderFemale() {
  Student.find({ courses: { $in: ["Java"] }, gender: /^female$/i })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      //   mongoose.connection.close();
    });
}

//getAllStudentsIncludeJavaGenderFemale();

function getAllStudentsBirth() {
  Student.find({ birth: { $lte: new Date("1998-05-05") } })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      //   mongoose.connection.close();
    });
}

//getAllStudentsBirth();

function getAllStudentsPhoneStarts() {
  Student.find({ phone: { $regex: "^054", $options: "i" } })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function QueryFindDocuments() {
  getAllStudents();
  getAllStudentsNameIdo();
  getAllStudentsIncludeLaw();
  getAllStudentsIncludeJavaGenderFemale();
  getAllStudentsBirth();
  getAllStudentsPhoneStarts();
}

function addJavaScriptToYahalom() {
  Student.update(
    { name: "Yahalom" },
    { $push: { courses: { $each: ["JavaScript"] } } }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function updateBirthToKoren() {
  Student.findOneAndUpdate({ name: "Koren" }, { birth: new Date("1998-12-02") })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function findAllStudentsNameContainsO() {
  Student.find({ name: { $regex: "o", $options: "i" } })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function findAllStudentsSurNameContainsHOrY() {
  Student.find(
    { SurName: { $regex: "y", $options: "i" } },
    { SurName: { $regex: "h", $options: "i" } }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteStudentNameIdo() {
  Student.findOneAndDelete({ name: /^ido$/i })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteStudentDateSet() {
  Student.findOneAndDelete({ birth: new Date("1998-04-02") })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

//   Blog.find()
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   Blog.findById("7")
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
