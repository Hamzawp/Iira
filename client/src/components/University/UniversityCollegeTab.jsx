import React, { useEffect, useState } from "react";
import "./UniversityCollegeTab.css";
import { RxCross2 } from "react-icons/rx";
import { BiLinkExternal } from "react-icons/bi";
import ProjectCard from "../ProjectCard/ProjectCard";
import axios from "axios";
import url from "../../../url";
// import {tsec} from '../../assets/tsec.webp'
export default function UniversityCollegeTab() {
  let [collegeList, setCollegeList] = useState([]);

// Get all the colleges name and spocs 
  useEffect(() => {
    const fetchData = async () => {
      try{
      const response = await axios.get(`${url}/api/v1/auth/getOne/${id}`);
      if(response){
        console.log(response.data);
        // setEmail(response.data.email);
        // setFirstName(response.data.first_name);
        // setLastName(response.data.last_name);
      }
    }catch(error){
      console.error(error);
    }

  }
  fetchData();
  }, [])
  let [rightBar, setRightBar] = useState(false);
  const [uni_name, setUni_name] = useState("University of Jharkhand");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const config = {
          headers: {
            authtoken: localStorage.getItem("token"),
          },
        };
        const response = await axios.get(
          `${url}/api/v1/university/allColleges`,
          config
        );
        console.log("response.data", response.data);
        setCollegeList(response.data.colleges);
        setUni_name(response.data.uni_name);
      } catch (err) {
        console.log(err);
        alert("Something went wrong");
      }
    };
    fetchData();
  }, []);

  console.log(collegeList, "collegeList");
  console.log(uni_name, "uni_name");

  function handleRightBar() {
    let table = document.getElementById("collegeTable");
    let rightTab = document.getElementById("right-tab");
    setRightBar(true);
    rightTab.classList.add("right-tab-clicked");
    table.style.width = "65%";
  }

  function closeRightBar() {
    let table = document.getElementById("collegeTable");
    let rightTab = document.getElementById("right-tab");
    rightTab.classList.remove("right-tab-clicked");
    setRightBar(!rightBar);
    table.style.width = "100%";
  }
  return (
    <div>
      <div className="table-data-pg">
        <div className="order">
          <div className="head-title">
            <div className="left">
              <h1>Colleges Registered</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">{uni_name}</a>
                </li>
              </ul>
            </div>
          </div>
          <table id="collegeTable">
            <thead>
              <tr>
                <th>College Name</th>
                <th>SPOC</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {/* {collegeList.length == 0 && (
                  <CsvBtn onDataReceived={getCsvData} />
                  
                )} */}
              {/* {collegeList.length > 0 && */}
              {collegeList.map((college) => {
                return (
                  <tr
                    key={college.college_id}
                    style={{ borderRadius: "10px" }}
                    onClick={handleRightBar}
                  >
                    <td
                      className="tddiv"
                      style={{ maxWidth: "15vw", textAlign: "left" }}
                    >
                      <p style={{ padding: "15px", whiteSpace: "nowrap" }}>
                        {college.college_name}
                      </p>
                    </td>
                    <td className="spoctd">{`${college.spoc.first_name} ${college.spoc.last_name}`}</td>
                    <td style={{ display: "flex" }}>
                      <span className="status process">
                        {college.spoc.email}
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
      </div>

      <div className="right-tab" id="right-tab">
        {rightBar && (
          <>
            <div className="collegeName">
              <h2>Thadomal Shahani Engineering College</h2>
              <RxCross2
                style={{ fontSize: "25px", cursor: "pointer" }}
                className="crossSvg"
                onClick={closeRightBar}
              />
            </div>
            <div className="container-scroll">
              <img
                className="collegeImg"
                src="https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
              <div className="collegeDetails">
                <div className="collegeFaculty">
                  <h3 className="spoc">SPOC: Ms Aruna Patil</h3>
                  <div className="faculty">
                    <span>Ms Tasneem Mirza</span>,<span>Mr Rakesh Khanna</span>
                  </div>
                </div>
                <div>
                  <BiLinkExternal className="visitCollege" />
                </div>
              </div>
              <hr className="custom-hr" />
              <div className="todo">
                <div className="head">
                  <h3 style={{ textAlign: "left", marginLeft: "8px" }}>
                    Recent Projects
                  </h3>
                  {/*<i className="bx bx-plus"></i> */}
                  {/*<i className="bx bx-filter"></i> */}
                </div>
                <div className="projectdiv-college">
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
