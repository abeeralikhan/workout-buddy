const express = require("express");
const workoutsRouter = require("./routes/workouts/workouts.route");
const logRequests = require("./middlewares/logRequests");

const app = express();

app.use(express.json());
app.use(logRequests);

app.use("/api/workouts", workoutsRouter);

module.exports = app;
