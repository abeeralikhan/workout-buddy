const workouts = require("./workouts.mongo");
const { isIdValid } = require("../../utils");

async function getAllWorkouts() {
  return await workouts.find({}).sort({ createdAt: -1 });
}

async function getWorkout(id) {
  if (!isIdValid(id)) return { error: true };

  const workout = await workouts.findById(id);
  return { workout };
}

async function createWorkout(workoutObj) {
  try {
    const workout = await workouts.create(workoutObj);
    return { workout };
  } catch (error) {
    return { error };
  }
}

async function deleteWorkout(id) {
  if (!isIdValid(id)) return { error: true };

  const workout = await workouts.findByIdAndDelete(id);
  return { workout };
}

async function updateWorkout(id, workoutObj) {
  if (!isIdValid(id)) return { error: true };

  const workout = await workouts.findByIdAndUpdate(id, { ...workoutObj });
  return { workout };
}

module.exports = {
  getAllWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
