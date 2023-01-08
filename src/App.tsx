import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Question from "./views/Questions";
import Result from "./views/Result";
import NoMatch from "./views/NoMatch";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/question",
      element: <Question />
    },
    {
      path: "/result",
      element: <Result />
    },
    {
      path: "*",
      element: <NoMatch />
    }
  ]);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
