const express = require("express");

const {
  httpCreateWorkout,
  httpGetWorkout,
  httpGetWorkouts,
  httpDeleteWorkout,
  httpUpdateWorkout,
} = require("./workouts.controller");

const router = express.Router();

// GET all workouts
router.get("/", httpGetWorkouts);

// GET a single workout
router.get("/:id", httpGetWorkout);

// POST a new workout
router.post("/", httpCreateWorkout);

// DELETE a workout
router.delete("/:id", httpDeleteWorkout);

// PATCH a workout
router.patch("/:id", httpUpdateWorkout);

module.exports = router;
// DZjsouZsgVhwb0hS
