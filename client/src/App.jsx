import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Login from './Screens/Login/Login';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
