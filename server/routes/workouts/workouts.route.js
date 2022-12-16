const express = require("express");
const workouts = require("../../models/workouts.model");

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
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workoutDoc = await workouts.create({ title, load, reps });
    res.status(200).json(workoutDoc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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
