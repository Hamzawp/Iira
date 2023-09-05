import React, { useEffect, useState } from 'react'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {RiFolderSettingsLine} from 'react-icons/ri'
import {PiStudentBold} from 'react-icons/pi'
import usericon from '../../assets/usericon.png'
import CsvBtn from '../CsvButton/CsvButton'
import './FacultyAddPage.css'

export default function FacultyAddPage() {

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
            <h1>Add Faculty Panel</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Thadomal Shahani Engineering College</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-adds">
            {/*<i className="bx bxs-cloud-download"></i> */}
             {/* <span className="texts" >
              Add Faculty +
             </span>  */}
             <div>
             {studentList.length == 0 ? (
                  <CsvBtn  onDataReceived={getCsvData} />
                  
                ) : (
                    <div className="generateCred">
                        <button className="generatePass"> Generate Credentials</button>
                    </div>
                )}
             </div>
             
          </a>
        </div>

        <div className="table-data">
          <div className="order">
            <div className="head">
              <h3>Faculties</h3>
              
            </div>
           
            <table>
              <thead>
                <tr>
                  <th style={{"width":"32%"}}>First Name</th>   
                  <th style={{"width":"25%"}}>Last Name</th>
                  <th style={{"width":"25%"}}>Email</th>
                  <th style={{"width":"25%"}}>DOB</th>
                </tr>
              </thead>
              <tbody>
                {/* {facultyDataLength === 0 ? ( <CsvBtn onDataReceived={getCsvData}/>) :  */}
                {studentList.length > 0 &&
                      studentList.map((faculty, index) => {
                        return(
                        <tr  key={faculty["Faculty First Name"]}>
                          <td style={{"width":"30%"}}>
                            {/* <img src={usericon} alt="User Icon" /> */}
                            {/* <p>{faculty.name}</p> */}
                            <p>{faculty["Faculty First Name"]}</p>
                          </td>
                          {/* <td>{faculty.department}</td> */}
                          <td style={{"width":"25%"}}>{faculty["Faculty Last Name"]}</td>
                          <td  style={{"width":"25%"}}><span className="status pending">{faculty["Faculty Email"]}</span></td>
                          <td style={{"width":"25%"}}>
                            <span >
                              {/* {faculty.underReviewProjects} */}
                              {faculty["Faculty DOB"]}
                            </span>
                          </td>
                        
                        </tr>
                        );})}
                   
              </tbody>
            </table>
            

           
          </div>
          {/* <div className="todo">
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
          </div> */}
        </div>
        </main>
    </div>
  )
}
