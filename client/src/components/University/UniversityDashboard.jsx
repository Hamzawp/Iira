import React, { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import CsvBtn from "../CsvButton/CsvButton";
import './UniversityDashboard.css'
export default function UniversityDashboard(props) {
  let [uniName, setUniName] = useState("University of Jharkhand");
  let [registeredColl, setregisteredColl] = useState(94);
  let [registeredFaculty, setregisteredFaculty] = useState(10);
  let [registeredProjects, setRegisteredProjects] = useState(248);
  let [collegeList, setCollegeList] = useState([
  
  ]);
  let [isFileSelected, setisFileSelected] = useState(true);

  async function getCsvData(data) {
    console.log(data);
    setisFileSelected(!isFileSelected);
    setCollegeList(data);
  }

  useEffect(() => {
    // This will log the updated collegeList when it changes
    console.log(collegeList);
  }, [collegeList]);    
  
  return (
    <div>
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
                {collegeList.length == 0 && (
                  <CsvBtn onDataReceived={getCsvData} />
                )}
                {collegeList.length > 0 &&
                  collegeList.map((college) => {
                    return (
                      <tr key={college["College Name"]}>
                        <td className="tddiv">
                          <p>{college["College Name"]}</p>
                        </td>
                        <td className="spoctd">{college["SPOC"]}</td>
                        <td>
                          <span className="status process">
                            {college["Projects Added"]}
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
    </div>
  );
}
