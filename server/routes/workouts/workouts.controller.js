const mongoose = require("mongoose");

const workouts = require("../../models/workouts.mongo");

// get all workouts
async function httpGetWorkouts(req, res) {
  const allWorkouts = await workouts.find({}).sort({ createdAt: -1 });

  res.status(200).json(allWorkouts);
}

// get a single workout
async function httpGetWorkout(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such workout exist" });
  }

  const singleWorkout = await workouts.findById(id);

  if (!singleWorkout) {
    return res.status(404).json({ error: "No such workout exist" });
  }

  res.status(200).json(singleWorkout);
}

// create a new workout
async function httpCreateWorkout(req, res) {
  const { title, load, reps } = req.body;
  try {
    const workoutDoc = await workouts.create({ title, load, reps });
    res.status(200).json(workoutDoc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// delete a workout

// update a workout

module.exports = {
  httpCreateWorkout,
  httpGetWorkout,
  httpGetWorkouts,
};
