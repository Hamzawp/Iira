import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Dashboard from "./screens/Dashboard/Dashboard";

import Login from "./screens/Login/Login";
import Reset from "./screens/Reset/Reset";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
  {
    path: "/registration/:id",

    element: <Reset />,
  },
]);

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;

// to do: for Student Dashboard

// home page -> Discover Projects (to do: to add relevant projects)
// profile page -> reminder to close the sidebar
// add project page -> reminder to set the file structure same as in frontend
// upload project -> on click upload an simple loader (to do: to add the loader) and redirect to the simple project page
// add relevant projects to my projects page

// to do: for SPOC Dashboard
// 1. project claim page
// 2. project review  - make sure to change the pagarism score
