import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchWorkouts from "./fetchWorkouts";
import useWorkoutsContext from "../useWorkoutsContext";

const useWorkouts = () => {
  const results = useQuery([], fetchWorkouts);
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    if (results.status === "success") {
      dispatch({ type: "SET_WORKOUTS", payload: results?.data ?? [] });
    }
  }, [results.data]);

  return [workouts ?? [], results.status];
};

export default useWorkouts;
