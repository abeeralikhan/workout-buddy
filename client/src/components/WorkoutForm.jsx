import { useState } from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useWorkoutsContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const workoutObj = {
      title: formData.get("title"),
      load: formData.get("load"),
      reps: formData.get("reps"),
    };
    const response = await fetch("http://localhost:3000/api/workouts", {
      method: "POST",
      body: JSON.stringify(workoutObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      return;
    }

    dispatch({ type: "CREATE_WORKOUT", payload: json });
    setError(null);
    // clear form
    e.target.reset();
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>
      <label htmlFor="title">
        Excersize Title
        <input type="text" id="title" name="title" />
      </label>
      <label htmlFor="load">
        Load (in kg):
        <input type="number" id="load" name="load" />
      </label>
      <label htmlFor="reps">
        Reps:
        <input type="number" id="reps" name="reps" />
      </label>
      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
