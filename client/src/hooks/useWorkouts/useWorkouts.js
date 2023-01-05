import { useQuery } from "@tanstack/react-query";
import fetchWorkouts from "./fetchWorkouts";

//
const useWorkouts = () => {
  const results = useQuery([], fetchWorkouts);

  return [results?.data ?? [], results.status, results.refetch];
};

export default useWorkouts;
