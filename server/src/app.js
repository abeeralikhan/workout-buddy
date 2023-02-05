const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const workoutsRouter = require("./routes/workouts/workouts.route");
const usersRouter = require("./routes/users/users.route");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(morgan("dev")); // combined --> popular logs format
app.use(express.json());

app.use("/api/workouts", workoutsRouter);
app.use("/api/user", usersRouter);

module.exports = app;
