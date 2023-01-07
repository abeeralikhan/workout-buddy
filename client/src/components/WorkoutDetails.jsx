import useWorkoutsContext from "../hooks/useWorkoutsContext";

const WorkoutDetails = ({ workout }) => {
  const { title, load, reps, createdAt, _id } = workout;
  const { dispatch } = useWorkoutsContext();

  const handleClick = async (e) => {
    const response = await fetch(`http://localhost:3000/api/workouts/${_id}`, {
      method: "DELETE",
    });
    const json = await response.json();

    if (!response.ok) return;

    dispatch({ type: "DELETE_WORKOUT", payload: json });
  };

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong>Load (kg): </strong>
        {load}
      </p>
      <p>
        <strong>Reps: </strong>
        {reps}
      </p>
      <p>{createdAt}</p>
      <span onClick={handleClick}>DELETE</span>
    </div>
  );
};

export default WorkoutDetails;
