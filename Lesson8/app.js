const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");
const bodyParser = require("body-parser");

app.use("/api/user", userRouter);
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.post("/", (req, res) => {
  res.send(req.body);
});

app.use("/register", (req, res) => {
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/register.html");
});
app.get("/login", (req, res) => {
  //   res.cookie("name", "rabeya");
  //   res.cookie("age", "30");
  res.clearCookie("name");
  res.append("id", "130000");
  res.end();
});

app.use("/", (req, res) => {
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html");
});
app.use((req, res) => {
  res.send("<h1>404 !!! Not a valid url</h1>");
});

module.exports = app;
