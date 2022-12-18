const express = require("express");
const morgan = require("morgan");
const workoutsRouter = require("./routes/workouts/workouts.route");

const app = express();

app.use(morgan("combined")); // combined --> popular logs format
app.use(express.json());

app.use("/api/workouts", workoutsRouter);

module.exports = app;
