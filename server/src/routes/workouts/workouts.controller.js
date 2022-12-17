const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
} = require("../../models/workouts.model");

// get all workouts
async function httpGetWorkouts(req, res) {
  const workouts = await getAllWorkouts();

  res.status(200).json(workouts);
}

// get a single workout
async function httpGetWorkout(req, res) {
  const { id } = req.params;

  const { workout, error } = await getWorkout(id);

  if (!workout || error) {
    return res.status(404).json({ error: "No such workout exist" });
  }

  res.status(200).json(workout);
}

// create a new workout
async function httpCreateWorkout(req, res) {
  const { title, load, reps } = req.body;
  const { workoutDoc, error } = await createWorkout({ title, load, reps });
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(workoutDoc);
}

// delete a workout

// update a workout

module.exports = {
  httpCreateWorkout,
  httpGetWorkout,
  httpGetWorkouts,
};
