import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UniversityDashboard from './screens/UniversityDashboard/UniversityDashboard'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <UniversityDashboard />
    </>
  )
}

export default App
