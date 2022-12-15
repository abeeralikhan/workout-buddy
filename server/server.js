const express = require("express");
const workoutsRouter = require("./routes/workouts/workouts.route");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutsRouter);

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
