import useWorkouts from "../hooks/useWorkouts/useWorkouts";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

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
      <WorkoutForm />
    </div>
  );
};

export default Home;
