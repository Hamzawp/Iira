import React, { useState } from "react";
import "./UniversityDashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";

// You can now use these icons in your JSX components.

export default function UniversityDashboard() {
  let [isSdbropen, setSdbropen] = useState(true);
  let [uniName, setUniName] = useState("University of Jharkhand");
  let [registeredColl, setregisteredColl] = useState(94);
  let [registeredFaculty, setregisteredFaculty] = useState(10);
  let [registeredProjects, setRegisteredProjects] = useState(248);
  let [collegeList, setCollegeList] = useState([
    {
      name: "Thadomal Shahani Engineering College",
      spoc: "Ms Tasneem Mirza",
      projectsAdded: 42,
    },
    {
      name: "DJ Sanghvi",
      spoc: "Ms Archana Patil",
      projectsAdded: 78,
    },
  ]);

  function handleToggle() {
    console.log("yoo");
    setSdbropen(!isSdbropen);
  }

  return (
    <div>
      <Sidebar isSdbropen={isSdbropen} />
      <section id="content">
        <Navbar onClick={handleToggle} />
        {/* MAIN  */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>{uniName}</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                {/* <li> <BxChevronRight /> </li> */}
                <li>
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              {/*<i className="bx bxs-cloud-download"></i> */}
              <span className="text">Download PDF</span>
            </a>
          </div>

          <ul className="box-info">
            <li>
              {/*<i className="bx bxs-calendar-check"></i> */}
              <FaUniversity className="bx bxs-calendar-check" />
              <span className="text infodiv">
                <h3>{registeredColl}</h3>
                <p>Colleges Registered</p>
              </span>
            </li>
            <li>
              {/*<i className="bx bxs-group"></i> */}
              <GiTeacher className="bx bxs-group" />
              <span className="text infodiv">
                <h3>{registeredFaculty}</h3>
                <p>Faculty added</p>
              </span>
            </li>
            <li>
              {/*<i className="bx bxs-dollar-circle"></i> */}
              <AiFillProject className="bx bxs-dollar-circle" />
              <span className="text infodiv">
                <h3>{registeredProjects}</h3>
                <p>Projects Published</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Colleges Registered</h3>
                {/*<i className="bx bx-search"></i> */}
                {/*<i className="bx bx-filter"></i> */}
              </div>
              <table>
                <thead>
                  <tr>
                    <th>College Name</th>
                    <th>SPOC</th>
                    <th>Projects Added</th>
                  </tr>
                </thead>
                <tbody>
                  {!collegeList? "Upload csv file" :collegeList.map((college) => {
                    return (
                      <tr>
                        <td>
                          <p>{college.name}</p>
                        </td>
                        <td>{college.spoc}</td>
                        <td>
                          <span className="status process">
                            {college.projectsAdded}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  {/*<tr>
                  <td>
                     <img src="img/people.png" /> 
                    <p>Thadomal Shahani Engineering College</p>
                  </td>
                  <td>Ms Tasneem Mirza</td>
                  <td><span className="status process">42</span></td>
                </tr> */}
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                {/*<i className="bx bx-plus"></i> */}
                {/*<i className="bx bx-filter"></i> */}
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Todo List</p>
                  {/*<i className="bx bx-dots-vertical-rounded"></i> */}
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  {/*<i className="bx bx-dots-vertical-rounded"></i> */}
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  {/*<i className="bx bx-dots-vertical-rounded"></i> */}
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  {/*<i className="bx bx-dots-vertical-rounded"></i> */}
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  {/*<i className="bx bx-dots-vertical-rounded"></i> */}
                </li>
              </ul>
            </div>
          </div>
        </main>
        {/*  MAIN  */}
      </section>
    </div>
  );
}
