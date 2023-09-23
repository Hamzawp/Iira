import React, { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import usericon from "../../assets/usericon.png";
import CsvBtn from "../CsvButton/CsvButton";
// import './FacultyDashboard.css'
export default function StudentProfile() {
  const facultyData = [
    {
      name: "Project 1",
      department: "MERN",
      underReviewProjects: 11,
      totalProjects: "✔",
    },
    {
      name: "Project 2",
      department: "IoT",
      underReviewProjects: 4,
      totalProjects: "✔",
    },
    {
      name: "Project 3",
      department: "AI&ML",
      underReviewProjects: 9,
      totalProjects: "✔",
    },
    {
      name: "Project 4",
      department: "MERN",
      underReviewProjects: 13,
      totalProjects: "✔",
    },
    {
      name: "Project 5",
      department: "Python",
      underReviewProjects: 6,
      totalProjects: "✔",
    },
  ];
  let SPOC = "Student";

  const facultyDataLength = facultyData.length;

  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Welcome, {SPOC}!</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Thadomal Shahani Engineering College</a>
              </li>
            </ul>
          </div>
          {/* <a href="#" className="btn-add">
          
            <span className="text">Add Faculty +</span>
          </a> */}
        </div>

        <ul className="box-info">
          <li>
            {/*<i className="bx bxs-calendar-check"></i> */}
            <RiFolderSettingsLine size="3em" style={{ color: "#4B49AC" }} />
            <span className="text">
              <h3>07</h3>
              <p>Verified Projects</p>
            </span>
          </li>
          <li>
            {/*<i className="bx bxs-group"></i> */}
            <RiFolderSettingsLine size="3em" style={{ color: "#4B49AC" }} />
            <span className="text">
              <h3>24</h3>
              <p>Total Projects</p>
            </span>
          </li>
          <li>
            <PiStudentBold size="3em" color="#4B49AC" />
            <span className="text">
              <h3>73</h3>
              <p>Badges</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Faculties</h3>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Domain</th>
                  <th>No of Collaborators</th>
                  <th>Verified</th>
                </tr>
              </thead>
              <tbody>
                
                {facultyDataLength === 0 ? ( <CsvBtn/>) : 
                  (
                    <>
                      {facultyData.map((faculty, index) => (
                        <tr key={index}>
                          <td>
                          <RiFolderSettingsLine size="3em" style={{ color: "#4B49AC" }} />
                            <p>{faculty.name}</p>
                          </td>
                          <td>{faculty.department}</td>
                          <td>
                            <span className="status pending">
                              {faculty.underReviewProjects}
                            </span>
                          </td>
                          <td>
                            <span className="status process">
                              {faculty.totalProjects}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </>
                  )
                }
              </tbody>
            </table>
          </div>
          <div className="todo">
            <div className="head">
              <h3>Popular Projects</h3>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <div className="projListDiv">
                  <div className="projListLeft">
                    <div className="projListIcon">
                      <AiOutlineFundProjectionScreen size="1.8em" />
                    </div>
                    <div className="projListInfo">
                      <h2 className="projListHead">BarterX</h2>
                      <p className="projListDate">31-08-2023</p>
                    </div>
                  </div>
                  <div className="projListCollab">
                    <img src={usericon} />
                    <img src={usericon} />
                  </div>
                </div>
              </li>
              <li className="completed">
                <div className="projListDiv">
                  <div className="projListLeft">
                    <div className="projListIcon">
                      <AiOutlineFundProjectionScreen size="1.8em" />
                    </div>
                    <div className="projListInfo">
                      <h2 className="projListHead">BarterX</h2>
                      <p className="projListDate">31-08-2023</p>
                    </div>
                  </div>
                  <div className="projListCollab">
                    <img src={usericon} />
                    <img src={usericon} />
                  </div>
                </div>
              </li>
              <li className="completed">
                <div className="projListDiv">
                  <div className="projListLeft">
                    <div className="projListIcon">
                      <AiOutlineFundProjectionScreen size="1.8em" />
                    </div>
                    <div className="projListInfo">
                      <h2 className="projListHead">BarterX</h2>
                      <p className="projListDate">31-08-2023</p>
                    </div>
                  </div>
                  <div className="projListCollab">
                    <img src={usericon} />
                    <img src={usericon} />
                  </div>
                </div>
              </li>
              <li className="completed">
                <div className="projListDiv">
                  <div className="projListLeft">
                    <div className="projListIcon">
                      <AiOutlineFundProjectionScreen size="1.8em" />
                    </div>
                    <div className="projListInfo">
                      <h2 className="projListHead">BarterX</h2>
                      <p className="projListDate">31-08-2023</p>
                    </div>
                  </div>
                  <div className="projListCollab">
                    <img src={usericon} />
                    <img src={usericon} />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
