const workouts = require("./workouts.mongo");
const { isIdValid } = require("../utils");

async function getAllWorkouts() {
  return await workouts.find({}).sort({ createdAt: -1 });
}

async function getWorkout(id) {
  if (isIdValid(id)) return { error: true };

  const workout = await workouts.findById(id);
  return { workout, error: false };
}

async function createWorkout(workout) {
  try {
    const workoutDoc = await workouts.create(workout);
    return { workoutDoc };
  } catch (error) {
    return { error };
  }
}

async function deleteWorkout(id) {
  if (isIdValid(id)) return;
}

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
};
