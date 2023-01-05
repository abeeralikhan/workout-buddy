import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WorkoutsContextProvider } from "./context/WorkoutContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const queryClient = new QueryClient({
  defaultOptions: {
    staleTime: Infinity,
    cacheTime: Infinity,
  },
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <WorkoutsContextProvider>
            <Navbar />
            <div className="pages">
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </div>
          </WorkoutsContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
