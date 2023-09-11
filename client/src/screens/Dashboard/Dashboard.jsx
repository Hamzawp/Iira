import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UniversityDashboard from "../../components/University/UniversityDashboard";
import UniversityProfile from "../../components/University/UniversityProfile";
import UniversityAddPage from "../../components/University/UniversityAddPage";
import UniversityMyProjects from "../../components/University/UniversityMyProjects"
import CsvBtn from "../../components/CsvButton/CsvButton";
import UniversityCollegeTab from "../../components/University/UniversityCollegeTab";

// You can now use these icons in your JSX components.

export default function Dashboard() {
  let [isSdbropen, setSdbropen] = useState(true);
  const [selectedRow, setSelectedRow] = useState(1);

  function handleToggle() {
    console.log("yoo");
    setSdbropen(!isSdbropen);
  }

  const handleSidebarItemClick = (rowId) => {
    setSelectedRow(rowId); // Update the selectedRow state
  };

  return (
    <div>
      <Sidebar isSdbropen={isSdbropen} onItemClick={handleSidebarItemClick} />
      <section id="content">
        <Navbar onClick={handleToggle} />
        {selectedRow === 1 && (
          <>
            <UniversityDashboard />
          </>
        )}
        {selectedRow === 2 && (
          <>
            <UniversityProfile />
          </>
        )}
        {selectedRow === 3 && (
          <>
            <UniversityCollegeTab />
          </>
        )}
        {selectedRow === 4 && (
          <>
            <UniversityAddPage />
          </>
        )}  
        {selectedRow === 5 && (
          <>
            <UniversityMyProjects />
          </>
        )}
      </section>
    </div>
  );
}
