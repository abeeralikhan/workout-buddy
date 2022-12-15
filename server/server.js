require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Welcome to the app!" });
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
