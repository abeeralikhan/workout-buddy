require("dotenv").config();

const express = require("express");
const workoutsRouter = require("./routes/workouts/workouts.route");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutsRouter);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB atlas");
  })
  .catch((error) => console.log(error));

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
