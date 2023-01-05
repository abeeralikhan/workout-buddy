import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

const useWorkoutsContext = () => {
  // context --> value we provided to the context.provider
  const context = useContext(WorkoutsContext);

  // if context is used outside the context.provider
  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside an WorkoutsContextProvider"
    );
  }

  return context;
};

export default useWorkoutsContext;
