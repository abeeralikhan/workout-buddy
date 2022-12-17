const express = require("express");
const workoutsRouter = require("./routes/workouts/workouts.route");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutsRouter);

module.exports = app;
