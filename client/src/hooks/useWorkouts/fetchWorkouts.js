const fetchWorkouts = async ({ key }) => {
  const response = await fetch("http://localhost:3000/api/workouts");

  if (!response.ok) {
    throw new Error("GET /api/workouts not ok");
  }

  return response.json();
};

export default fetchWorkouts;
