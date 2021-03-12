const express = require("express");
const app = express();
const PORT = 3000;
var bodyParser = require("body-parser");
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

app.use(bodyParser.urlencoded({ extended: false }));

// 1. get request
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
  //   res.json({
  //     name: "Anisul Islam",
  //   });
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
});
app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/views/contact.html");
});
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/views/error.html");
});

// 2. post request
app.post("/", (req, res) => {
  let farn = req.body.farn;
  let cels = (farn - 32) / 1.8;
  cels = cels.toFixed(5);
  res.send(`<h3>Celsius : ${cels}</h3>`);
});
