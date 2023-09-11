import React, { useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import usericon from "../../assets/usericon.png";
import CsvBtn from "../CsvButton/CsvButton";
import "./UniversityAddPage.css";

export default function UniversityAddPage() {
  const facultyData = [
    {
      name: "Prof. Rahul Sharma",
      // department: "CSE",
      underReviewProjects: 11,
      totalProjects: 7,
    },
    {
      name: "Prof. Priya Patel",
      department: "IT",
      underReviewProjects: 4,
      totalProjects: 23,
    },
    // {
    //   name: "Prof. Abbas Rizvi",
    //   department: "AI&DS",
    //   underReviewProjects: 9,
    //   totalProjects: 11,
    // },
    // {
    //   name: "Prof. Navjot Singh",
    //   department: "EXTC",
    //   underReviewProjects: 13,
    //   totalProjects: 23,
    // },
    // {
    //   name: "Prof. Priston Blair",
    //   department: "CHEM",
    //   underReviewProjects: 6,
    //   totalProjects: 17,
    // },
  ];
  let SPOC = "SPOC";

  const facultyDataLength = facultyData.length;
  let [studentList, setStudentList] = useState([]);
  let [isFileSelected, setisFileSelected] = useState(true);

  async function getCsvData(data) {
    console.log(data);
    setisFileSelected(!isFileSelected);
    setStudentList(data);
  }

  useEffect(() => {
    // This will log the updated studentList when it changes
    console.log(studentList);
  }, [studentList]);

  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Add SPOC Panel</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">University of Jharkhand</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-adds">
            <div>
              {studentList.length == 0 ? (
                <CsvBtn onDataReceived={getCsvData} />
              ) : (
                <div className="generateCred">
                  <button className="generatePass">
                    Generate Credentials
                  </button>
                </div>
              )}
            </div>
          </a>
        </div>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>College SPOC Preview</h3>
            </div>

            <table>
              <thead>
                <tr>
                  <th style={{ width: "32%",textAlign:"left" }}>College</th>
                  <th style={{ width: "25%",textAlign:"left" }}>Name</th>
                  <th style={{ width: "25%" }}>Email</th>
                  <th style={{ width: "25%",textAlign:"left" }}>DOB</th>
                </tr>
              </thead>
              <tbody>
                {/* {facultyDataLength === 0 ? ( <CsvBtn onDataReceived={getCsvData}/>) :  */}
                {studentList.length > 0 &&
                  studentList.map((faculty, index) => {
                    return (
                      <tr key={faculty["Email"]}>
                        <td style={{ width: "30%" }}>
                          {/* <img src={usericon} alt="User Icon" /> */}
                          {/* <p>{faculty.name}</p> */}
                          <p style={{textAlign:"left",whiteSpace:"nowrap"}}>{faculty["College Name"]}</p>
                        </td>
                        {/* <td>{faculty.department}</td> */}
                        <td style={{ width: "25%",textAlign:"left" }}>
                          {faculty["SPOC"]}
                        </td>
                        <td style={{ width: "25%",display:"flex" }}>
                          <span className="status pending">
                            {faculty["Email"]}
                          </span>
                        </td>
                        <td style={{ width: "25%",textAlign:"left" }}>
                          <span>
                            {/* {faculty.underReviewProjects} */}
                            {faculty["DOB"]}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
