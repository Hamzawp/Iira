import React, { useEffect, useState } from 'react'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {RiFolderSettingsLine} from 'react-icons/ri'
import {PiStudentBold} from 'react-icons/pi'
import usericon from '../../assets/usericon.png'
import CsvBtn from '../CsvButton/CsvButton'
import './FacultyDashboard.css'

export default function FacultyDashboard() {

  const facultyData = [
  {
    name: "Prof. Rahul Sharma",
    department: "CSE",
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
let SPOC ="SPOC";

const facultyDataLength = facultyData.length;
let [studentList, setStudentList] = useState([
  
]);
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
            <h1>Welcome, {SPOC}!</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Thadomal Shahani Engineering College</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-add">
            {/*<i className="bx bxs-cloud-download"></i> */}
             <span className="text" >
              Add Faculty +
             </span> 
          </a>
        </div>

        <ul className="box-info">
          <li>
            {/*<i className="bx bxs-calendar-check"></i> */}
            <FaChalkboardTeacher size="3em" color="#4B49AC" />
            <span className="text">
              <h3>07</h3>
              <p>Faculties</p>
            </span>
          </li>
          <li>
            {/*<i className="bx bxs-group"></i> */}
            <RiFolderSettingsLine size="3em" style={{"color":"#4B49AC"}} />
            <span className="text">
              <h3>24</h3>
              <p>Projects</p>
            </span>
          </li>
          <li>
            {/*<i className="bx bxs-dollar-circle"></i> */}
            <PiStudentBold size="3em" color="#4B49AC"/>
            <span className="text">
              <h3>73</h3>
              <p>Students</p>
            </span>
          </li>
        </ul>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Faculties</h3>
              {studentList.length == 0 && (
                  <CsvBtn  onDataReceived={getCsvData} />
                  
                ) }
            </div>
           
            <table>
              <thead>
                <tr>
                  <th>Name of Faculty</th>
                  <th>Department</th>
                  <th>Under Review</th>
                  <th>Total Projects</th>
                </tr>
              </thead>
              <tbody>
                {facultyDataLength === 0 ? ( <CsvBtn onDataReceived={getCsvData}/>) : 
               
                facultyData.map((faculty, index) => {
                        return(
                        <tr  key={index}>
                          <td>
                            <img src={usericon} alt="User Icon" />
                            {/* <p>{faculty.name}</p> */}
                            <p>{faculty.name}</p>
                          </td>
                          <td>{faculty.department}</td>
                          {/* <td>{faculty["Faculty Department"]}</td> */}
                          <td>
                            <span className="status pending">
                              {faculty.underReviewProjects}
                              {/* {faculty["Faculty Email"]} */}
                            </span>
                          </td>
                          <td>
                            <span className="status process">
                              {faculty.totalProjects}
                            </span>
                          </td>
                        </tr>
                        );})}
                   
              </tbody>
            </table>
            

           
          </div>
          <div className="todo">
            <div className="head">
              <h3>Ongoing Projects</h3>
            </div>
            <ul className="todo-list">
              <li className="completed">
                <div className="projListDiv">
                  <div className="projListLeft">
                    <div className="projListIcon">
                      <AiOutlineFundProjectionScreen size="1.8em"/>
                    </div>
                    <div className="projListInfo">
                      <h2 className="projListHead">BarterX</h2>
                      <p className="projListDate">31-08-2023</p>
                    </div>
                  </div>
                  <div className="projListCollab">
                    <img src={usericon}/>
                    <img src={usericon}/>
                  </div>
                </div>
              </li>
              <li className="completed">
                <div className="projListDiv">
                    <div className="projListLeft">
                      <div className="projListIcon">
                        <AiOutlineFundProjectionScreen size="1.8em"/>
                      </div>
                      <div className="projListInfo">
                        <h2 className="projListHead">BarterX</h2>
                        <p className="projListDate">31-08-2023</p>
                      </div>
                    </div>
                    <div className="projListCollab">
                      <img src={usericon}/>
                      <img src={usericon}/>
                    </div>
                  </div>
              </li>
              <li className="completed">
                <div className="projListDiv">
                    <div className="projListLeft">
                      <div className="projListIcon">
                        <AiOutlineFundProjectionScreen size="1.8em"/>
                      </div>
                      <div className="projListInfo">
                        <h2 className="projListHead">BarterX</h2>
                        <p className="projListDate">31-08-2023</p>
                      </div>
                    </div>
                    <div className="projListCollab">
                      <img src={usericon}/>
                      <img src={usericon}/>
                    </div>
                  </div>
              </li>
              <li className="completed">
                <div className="projListDiv">
                    <div className="projListLeft">
                      <div className="projListIcon">
                        <AiOutlineFundProjectionScreen size="1.8em"/>
                      </div>
                      <div className="projListInfo">
                        <h2 className="projListHead">BarterX</h2>
                        <p className="projListDate">31-08-2023</p>
                      </div>
                    </div>
                    <div className="projListCollab">
                      <img src={usericon}/>
                      <img src={usericon}/>
                    </div>
                  </div>
              </li>
            </ul>
          </div>
        </div>
        </main>
    </div>
  )
}
