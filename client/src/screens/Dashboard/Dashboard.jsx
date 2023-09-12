import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import FacultyDashboard from "../../components/Faculty/FacultyDashboard";
import FacultyProfile from "../../components/Faculty/FacultyProfile";
import FacultyRequests from "../../components/Faculty/FacultyRequests";
import FacultyProjectReview from "../../components/Faculty/FacultyProjectReview";
import FacultyAddPage from "../../components/Faculty/FacultyAddPage";
import FacultyAddStudentPage from "../../components/Faculty/FacultyAddStudentPage";
import FacultyMyProjects from "../../components/Faculty/FacultyMyProjects";
import UniversityDashboard from "../../components/University/UniversityDashboard";
import UniversityCollegeTab from "../../components/University/UniversityCollegeTab";
import UniversityAddPage from "../../components/University/UniversityAddPage";
import UniversityMyProjects from "../../components/University/UniversityMyProjects";
import UniversityProfile from "../../components/University/UniversityProfile";
import StudentHome from "../../components/Student/StudentHome";
import StudentDashboard from "../../components/Student/StudentDashboard";
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {RiFolderSettingsLine} from 'react-icons/ri'
import {PiStudentBold} from 'react-icons/pi'

export default function Dashboard() {
  const token = localStorage.getItem("token");
  var decoded = jwt_decode(token);
  console.log(decoded.role);
  const roleUser = decoded.role;

  const [selectedRow, setSelectedRow] = useState(1);
  const handleSidebarItemClick = (rowId) => {
    setSelectedRow(rowId);
  };

  let [isSdbropen, setSdbropen] = useState(true);
  function handleToggle() {
    console.log("yoo");
    setSdbropen(!isSdbropen);
  }

  return (
    <div>
      {roleUser === "SPOC" && (
        <>
          <Sidebar
            isSdbropen={isSdbropen}
            onItemClick={handleSidebarItemClick}
          />

          <section id="content">
            <Navbar onClick={handleToggle} />
            {/* MAIN  */}
            {selectedRow === 1 && (
              <>
                {" "}
                <FacultyDashboard role={"SPOC"} />{" "}
              </>
            )}
            {selectedRow === 2 && (
              <>
                {" "}
                <FacultyProfile />{" "}
              </>
            )}
            {selectedRow === 3 && (
              <>
                {" "}
                <FacultyRequests />{" "}
              </>
            )}
            {selectedRow === 4 && (
              <>
                {" "}
                <FacultyProjectReview />{" "}
              </>
            )}
            {selectedRow === 5 && (
              <>
                {" "}
                <FacultyMyProjects />{" "}
              </>
            )}
            {selectedRow === 6 && (
              <>
                {" "}
                <FacultyAddPage />{" "}
              </>
            )}
            {selectedRow === 7 && (
              <>
                {" "}
                <FacultyAddStudentPage />{" "}
              </>
            )}

            {/*  MAIN  */}
          </section>
        </>
      )}

      {roleUser === "university" && (
        <>
          <Sidebar
            isSdbropen={isSdbropen}
            onItemClick={handleSidebarItemClick}
          />
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
        </>
      )}


      {roleUser === "college_faculty" && (
        <>
          <Sidebar
            isSdbropen={isSdbropen}
            onItemClick={handleSidebarItemClick}
          />

          <section id="content">
            <Navbar onClick={handleToggle} />
            {/* MAIN  */}
            {selectedRow === 1 && (
              <>
                {" "}
                <FacultyDashboard role={"Faculty"}/>{" "}
              </>
            )}
            {selectedRow === 2 && (
              <>
                {" "}
                <FacultyProfile />{" "}
              </>
            )}
            {selectedRow === 3 && (
              <>
                {" "}
                <FacultyRequests />{" "}
              </>
            )}
            {selectedRow === 4 && (
              <>
                {" "}
                <FacultyProjectReview />{" "}
              </>
            )}
            {selectedRow === 5 && (
              <>
                {" "}
                <FacultyMyProjects />{" "}
              </>
            )}
            {selectedRow === 6 && (
              <>
                {" "}
                <FacultyAddStudentPage />{" "}
              </>
            )}

            {/*  MAIN  */}
          </section>
        </>
      )}

      {roleUser === "student" && (
        <>
          <Sidebar
            isSdbropen={isSdbropen}
            onItemClick={handleSidebarItemClick}
          />
          <section id="content">
            <Navbar onClick={handleToggle} />
            {selectedRow === 1 && (
              <>
                <StudentHome />
              </>
            )}
            {selectedRow === 2 && (
              <>
                <StudentDashboard />
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
        </>
      )}

    </div>
  );
}
