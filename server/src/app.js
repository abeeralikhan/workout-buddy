const express = require("express");
const workoutsRouter = require("./routes/workouts/workouts.route");

const app = express();

app.use(express.json());

app.use("/api/workouts", workoutsRouter);

module.exports = app;
