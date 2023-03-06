const express = require("express");
const userRouter = require("./router/users");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.redirect("/users");
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Server OK !!! ${port}`);
});
