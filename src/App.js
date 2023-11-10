import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import LastPage from "./pages/LastPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/first-page",
    element: <FirstPage />,
  },
  {
    path: "/second-page",
    element: <SecondPage />,
  },
  {
    path: "/third-page",
    element: <ThirdPage />,
  },
  {
    path: "/last-page",
    element: <LastPage />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;
