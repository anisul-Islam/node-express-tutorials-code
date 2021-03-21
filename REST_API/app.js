require("dotenv").config();

const express = require("express");
const studentRoute = require("./api/routes/student.route");
const teacherRoute = require("./api/routes/teacher.route");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (err) => {
  console.log("Database is not connected");
});
db.on("connected", (err) => {
  console.log("Database is connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/student", studentRoute);
app.use("/teacher", teacherRoute);

app.use((req, res, next) => {
  res.status(404).json({
    error: "bad request",
  });
});

module.exports = app;
