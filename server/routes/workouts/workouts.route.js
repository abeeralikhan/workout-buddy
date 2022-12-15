const express = require("express");

const router = express.Router();

// DZjsouZsgVhwb0hS

// GET all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

// GET a single workout
router.get("/:id", (req, res) => {
  const workoutId = req.params.id;
  res.json({ msg: `GET ${workoutId} workout` });
});

// POST a new workout
router.post("/", (req, res) => {
  const body = req.body;
  res.json({ msg: "POST a new workouts", body });
});

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
