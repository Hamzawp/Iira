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
import UniversityDashboard from './screens/Dashboard/Dashboard'
import Login from './screens/Login/Login';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <UniversityDashboard />,
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
