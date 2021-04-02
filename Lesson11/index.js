const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
  console.log("Middleware function");

  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleWare);

app.use((req, res, next) => {
  res.send("404 bad url request");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something broke!");
});

app.get("/", (req, res) => {
  console.log("I am home. " + req.currentTime);
  res.send("<h1>I am home route</h1>");
});
app.get("/about", (req, res) => {
  console.log("I am about. " + req.currentTime);
  res.send("<h1>I am about route</h1>");
});

app.listen(PORT, () => {
  console.log(`Sever is running at http://localhost:${PORT}`);
});
