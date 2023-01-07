const {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../../models/workouts/workouts.model");

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
  const emptyFields = [];

  if (!title) emptyFields.push("title");
  if (!load) emptyFields.push("load");
  if (!reps) emptyFields.push("reps");

  if (emptyFields.length) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  const { workout, error } = await createWorkout({ title, load, reps });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json(workout);
}

// delete a workout
async function httpDeleteWorkout(req, res) {
  const { id } = req.params;
  const { workout, error } = await deleteWorkout(id);

  if (!workout || error) {
    return res.status(404).json({ error: "No such workout exist" });
  }

  res.status(200).json(workout);
}

// update a workout
async function httpUpdateWorkout(req, res) {
  const { id } = req.params;
  const { workout, error } = await updateWorkout(id, req.body);

  if (!workout || error) {
    return res.status(404).json({ error: "No such workout exist" });
  }

  res.status(200).json(workout);
}

module.exports = {
  httpCreateWorkout,
  httpGetWorkout,
  httpGetWorkouts,
  httpDeleteWorkout,
  httpUpdateWorkout,
};
