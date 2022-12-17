const express = require("express");

const {
  httpCreateWorkout,
  httpGetWorkout,
  httpGetWorkouts,
} = require("./workouts.controller");

const router = express.Router();

// GET all workouts
router.get("/", httpGetWorkouts);

// GET a single workout
router.get("/:id", httpGetWorkout);

// POST a new workout
router.post("/", httpCreateWorkout);

// DELETE a workout
router.delete("/:id", (req, res) => {
  const workoutId = req.params.id;
  res.json({ msg: `DELETE ${workoutId} workout` });
});

// PATCH a workout
router.patch("/:id", (req, res) => {
  const workoutId = req.params.id;
  res.json({ msg: `UPDATE ${workoutId} workout` });
});

module.exports = router;
// DZjsouZsgVhwb0hS
