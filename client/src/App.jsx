import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Link,
} from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Dashboard from './screens/Dashboard/Dashboard'
import Reset from './Screens/Reset/Reset';
import Login from './screens/Login/Login';

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
]);

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <div className="app">
      <RouterProvider router={router} />
    </div>
    
    </>
  )
}

export default App
