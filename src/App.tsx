import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./views/Home";
import Question from "./views/Questions";
import Result from "./views/Result";
import NoMatch from "./views/NoMatch";
import { AppContext } from "./context/context";
import { useCallback, useEffect, useState } from "react";
import { answerProp, answerPropAdv } from "./types/types";

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
  const [answer, setAnswer] = useState<answerPropAdv[]>([]);
  const updateAnswer = useCallback(
    (newAnswer: answerPropAdv) => {
      console.log("newAnswer newAnswer", newAnswer);
      console.log("newAnswer", Object.values(newAnswer)[0]);
      setAnswer([...answer, newAnswer]);
    },
    [answer]
  );
  useEffect(() => {
    console.log("answer", answer);
  }, [answer]);

  const value = {
    answer,
    updateAnswer
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <AppContext.Provider value={value}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  );
}

export default App;
