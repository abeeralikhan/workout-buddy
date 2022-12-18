import WorkoutDetails from "../components/WorkoutDetails";
import useWorkouts from "../hooks/useWorkouts/useWorkouts";

const Home = () => {
  const [workouts, status] = useWorkouts();

  if (status !== "success") {
    return (
      <div className="workouts">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
    </div>
  );
};

export default Home;
