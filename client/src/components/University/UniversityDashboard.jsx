import React, { useEffect, useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { AiFillProject } from "react-icons/ai";
import CsvBtn from "../CsvButton/CsvButton";
import ProjectCard from "../ProjectCard/ProjectCard";
import './UniversityDashboard.css'
export default function UniversityDashboard(props) {
  let [uniName, setUniName] = useState("University of Jharkhand");
  let [registeredColl, setregisteredColl] = useState(94);
  let [registeredFaculty, setregisteredFaculty] = useState(10);
  let [registeredProjects, setRegisteredProjects] = useState(248);
  let [collegeList, setCollegeList] = useState([
    {
      collegeName:"Thadomal Shahani Engineering College",
      spoc:"Ms Aruna Patil",
      email:"arunapl@tsec.edu"
    },
    {
      collegeName:"DJ Sanghvi",
      spoc:"Mr Shreyas Joshi",
      email:"sjoshi@dj.edu"
    },
    {
      collegeName:"IIT Bombay",
      spoc:"Ms Archana Kulkarni",
      email:"akulkarni@iitb.gov"
    },
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
                {/* {collegeList.length == 0 && (
                  <CsvBtn onDataReceived={getCsvData} />
                  
                )} */}
                {/* {collegeList.length > 0 && */}
                  {collegeList.map((college) => {
                    return (
                      <tr key={college.collegeName}>
                        <td className="tddiv" style={{maxWidth:"15vw",textAlign:"left"}}>
                          <p>{college.collegeName}</p>
                        </td>
                        <td className="spoctd">{college.spoc}</td>
                        <td style={{display:"flex"}}>
                          <span className="status process">
                            {college.email}
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
              <h3 style={{"marginLeft": "20px"}}>Recent Projects</h3>
              {/*<i className="bx bx-plus"></i> */}
              {/*<i className="bx bx-filter"></i> */}
            </div>
            <div className="projectdiv">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            </div>
          </div>
        </div>
      </main>
      {/*  MAIN  */}
    </div>
  );
}
