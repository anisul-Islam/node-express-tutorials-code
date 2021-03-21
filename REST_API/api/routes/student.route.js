const express = require("express");
const router = express.Router();
const Student = require("../model/student.model");
const mongoose = require("mongoose");

// how to get all data
router.get("/", (req, res) => {
  // res.status(200).json({
  //   message: "this is a student get request",
  // });
  Student.find()
    .then((result) => {
      res.status(200).json({
        studentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// how to get a single data
router.get("/:id", (req, res) => {
  // console.log(req.params.id);
  Student.findById(req.params.id)
    .then((result) => {
      res.status(200).json({
        studentData: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// store data using post request
router.post("/", (req, res) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    gender: req.body.gender,
    email: req.body.email,
    phone: req.body.phone,
  });
  // console.log(req.body);
  // console.log(req.body.name);
  // console.log(req.body.age);

  // saving in the collection
  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newStudent: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

//delete request
router.delete("/:id", (req, res, next) => {
  Student.remove({ _id: req.params.id })
    .then((result) => {
      // console.log(result);
      res.status(200).json({
        message: "student record is deleted",
        result: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

// update code using PUT request
router.put("/:id", (req, res, next) => {
  // console.log(req.params.id);
  Student.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        gender: req.body.gender,
        email: req.body.email,
        phone: req.body.phone,
      },
    }
  )
    .then((result) => {
      // console.log(result);
      res.status(200).json({
        message: "student record is updated successfully",
        updated_data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
