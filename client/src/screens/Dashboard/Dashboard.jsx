import React, { useState } from 'react'
import './Dashboard.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import FacultyDashboard from '../../components/Faculty/FacultyDashboard'
import FacultyProfile from '../../components/Faculty/FacultyProfile'
import FacultyRequests from '../../components/Faculty/FacultyRequests'
import FacultyProjectReview from '../../components/Faculty/FacultyProjectReview'
import FacultyAddPage from '../../components/Faculty/FacultyAddPage'

export default function Dashboard() {

  const [selectedRow, setSelectedRow] = useState(1);
  const handleSidebarItemClick = (rowId) => {
    setSelectedRow(rowId); // Update the selectedRow state
  };

  let [isSdbropen,setSdbropen] = useState(true);
  function handleToggle(){
    console.log("yoo");
    setSdbropen(!isSdbropen);
  }

  

  return (
    <div>
    <Sidebar isSdbropen={isSdbropen} onItemClick={handleSidebarItemClick}/>
    <section id="content">
    <Navbar onClick={handleToggle}/>
     {/* MAIN  */}
     {selectedRow === 1 && <> <FacultyDashboard/> </>}
     {selectedRow === 2 && <> <FacultyProfile/> </>}
     {selectedRow === 3 && <> <FacultyRequests/> </>}
     {selectedRow === 4 && <> <FacultyProjectReview/> </>}
     {selectedRow === 6 && <> <FacultyAddPage/> </>}
      
      {/*  MAIN  */}
    </section>
    </div>
  )
}
