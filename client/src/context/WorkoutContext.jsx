import { createContext, useReducer } from "react";

export const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  if (action.type === "SET_WORKOUTS") {
    return {
      workouts: action.payload,
    };
  }

  if (action.type === "CREATE_WORKOUT") {
    return {
      workouts: [action.payload, ...state.workouts],
    };
  }

  return state;
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
