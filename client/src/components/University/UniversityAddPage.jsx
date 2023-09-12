import React, { useEffect, useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import usericon from "../../assets/usericon.png";
import CsvBtn from "../CsvButton/CsvButton";
import "./UniversityAddPage.css";
import axios from "axios";
import url from "../../../url";

export default function UniversityAddPage() {
  const token = localStorage.getItem("token");
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

  const generateCredentials = async () => {
    const facultyDetails = studentList.map((faculty) => {
      return {
        college_name: faculty["College Name"],
        first_name: faculty["SPOC First Name"],
        last_name: faculty["SPOC Last Name"],
        email: faculty["SPOC Email"],
      };
    });
    console.log("Faculty Details: ", facultyDetails);
    try {
      // Send a POST request to your Express endpoint to generate credentials
      const response = await axios.post(
        `${url}/api/v1/university/addBulk`,
        {
          spocs: facultyDetails,
          role: "SPOC",
        },
        { headers: { authToken: token } }
      );

      // Handle the response as needed, e.g., show a success message
      console.log(response.data.msg);
      if(response.status === 200){
        alert("Email Sent successfully");
        setStudentList([]);
      }
      
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
      alert("Something went wrong");
        setStudentList([]);
    }
  };




  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Add COLLEGE-SPOC Panel</h1>
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
                  <button className="generatePass" onClick={generateCredentials}>
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
                  <th style={{ width: "25%",textAlign:"left" }}>SPOC First Name</th>
                  <th style={{ width: "25%" }}>SPOC Last Name</th>
                  <th style={{ width: "25%",textAlign:"left" }}>SPOC Email</th>
                </tr>
              </thead>
              <tbody>
                {/* {facultyDataLength === 0 ? ( <CsvBtn onDataReceived={getCsvData}/>) :  */}
                {studentList.length > 0 &&
                  studentList.map((faculty, index) => {
                    return (
                      <tr key={faculty["College Name"]}>
                        <td style={{ width: "30%" }}>
                          {/* <img src={usericon} alt="User Icon" /> */}
                          {/* <p>{faculty.name}</p> */}
                          <p style={{textAlign:"left",whiteSpace:"nowrap"}}>{faculty["College Name"]}</p>
                        </td>
                        {/* <td>{faculty.department}</td> */}
                        <td style={{ width: "25%",textAlign:"left" }}>
                          {faculty["SPOC First Name"]}
                        </td>
                        <td style={{ width: "25%",display:"flex" }}>
                          <span >
                            {faculty["SPOC Last Name"]}
                          </span>
                        </td>
                        <td style={{ width: "25%",textAlign:"left" }}>
                          <span className="status pending">
                            {/* {faculty.underReviewProjects} */}
                            {faculty["SPOC Email"]}
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
