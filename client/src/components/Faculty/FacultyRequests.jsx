import React, { useState } from 'react'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {FaChalkboardTeacher} from 'react-icons/fa'
import {RiFolderSettingsLine} from 'react-icons/ri'
import {PiStudentBold} from 'react-icons/pi'
import usericon from '../../assets/usericon.png'
import CsvBtn from '../CsvButton/CsvButton'
import './FacultyRequests.css'
export default function FacultyRequests(props) {

  const facultyData = [
  // {
  //   name: "Prof. Rahul Sharma",
  //   department: "CSE",
  //   underReviewProjects: 11,
  //   totalProjects: 7,
  // },
  // {
  //   name: "Prof. Priya Patel",
  //   department: "IT",
  //   underReviewProjects: 4,
  //   totalProjects: 23,
  // },
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
const projects = [
    {
      project_title: "Project A",
      project_domain: "Software Development",
      notification_date: "2023-09-05",
      project_icon: "icon1.png"
    },
    {
      project_title: "Project B",
      project_domain: "Software Development",
      notification_date: "2023-09-10",
      project_icon: "icon2.png"
    },
    {
      project_title: "Project C",
      project_domain: "Software Development",
      notification_date: "2023-09-15",
      project_icon: "icon3.png"
    }
  ];
let SPOC ="SPOC";

const facultyDataLength = facultyData.length;

  return (
    <div>
        <main>
        <div className="head-title">
          <div className="left">
          {(props.selectedrow === 8) ?<h1>Project Claim Panel</h1> : <h1>Project Approve Panel</h1>}
            <ul className="breadcrumb">
              <li>
                <a href="#">Thadomal Shahani Engineering College</a>
              </li>
            </ul>
          </div>
          <a href="#" className="btn-add">
             <span className="text">Approve All ✔</span> 
          </a>
        </div>

        <ul className="box-info-facreq">

        {projects.map((project, index) => (
          <li key={index}>
              <div className="projReqInfo">
                <FaChalkboardTeacher size="3em" color="#4B49AC" />
                <span className="text">
                  <h3>{project.project_title}</h3>
                  <p>{project.project_domain}</p>
                </span>
              </div>
              <div className="domainDiv">
                <h3>{project.notification_date}</h3>
              </div>
            
            <div className="approvalbtns">
            <button className='declinebtn'>
                Decline
            </button>

            <div class="approvebtn-container">
                <a class="btn-content" href="#">
                    {(props.selectedrow === 8) ? <span class="btn-title">Claim</span>: <span class="btn-title">Approve</span>}
                    <span class="icon-arrow">
                    <svg width="56px" height="33px" viewBox="0 0 66 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="arrow" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <path id="arrow-icon-one" d="M40.1543933,3.89485454 L43.9763149,0.139296592 C44.1708311,-0.0518420739 44.4826329,-0.0518571125 44.6771675,0.139262789 L65.6916134,20.7848311 C66.0855801,21.1718824 66.0911863,21.8050225 65.704135,22.1989893 C65.7000188,22.2031791 65.6958657,22.2073326 65.6916762,22.2114492 L44.677098,42.8607841 C44.4825957,43.0519059 44.1708242,43.0519358 43.9762853,42.8608513 L40.1545186,39.1069479 C39.9575152,38.9134427 39.9546793,38.5968729 40.1481845,38.3998695 C40.1502893,38.3977268 40.1524132,38.395603 40.1545562,38.3934985 L56.9937789,21.8567812 C57.1908028,21.6632968 57.193672,21.3467273 57.0001876,21.1497035 C56.9980647,21.1475418 56.9959223,21.1453995 56.9937605,21.1432767 L40.1545208,4.60825197 C39.9574869,4.41477773 39.9546013,4.09820839 40.1480756,3.90117456 C40.1501626,3.89904911 40.1522686,3.89694235 40.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                        <path id="arrow-icon-two" d="M20.1543933,3.89485454 L23.9763149,0.139296592 C24.1708311,-0.0518420739 24.4826329,-0.0518571125 24.6771675,0.139262789 L45.6916134,20.7848311 C46.0855801,21.1718824 46.0911863,21.8050225 45.704135,22.1989893 C45.7000188,22.2031791 45.6958657,22.2073326 45.6916762,22.2114492 L24.677098,42.8607841 C24.4825957,43.0519059 24.1708242,43.0519358 23.9762853,42.8608513 L20.1545186,39.1069479 C19.9575152,38.9134427 19.9546793,38.5968729 20.1481845,38.3998695 C20.1502893,38.3977268 20.1524132,38.395603 20.1545562,38.3934985 L36.9937789,21.8567812 C37.1908028,21.6632968 37.193672,21.3467273 37.0001876,21.1497035 C36.9980647,21.1475418 36.9959223,21.1453995 36.9937605,21.1432767 L20.1545208,4.60825197 C19.9574869,4.41477773 19.9546013,4.09820839 20.1480756,3.90117456 C20.1501626,3.89904911 20.1522686,3.89694235 20.1543933,3.89485454 Z" fill="#FFFFFF"></path>
                        <path id="arrow-icon-three" d="M0.154393339,3.89485454 L3.97631488,0.139296592 C4.17083111,-0.0518420739 4.48263286,-0.0518571125 4.67716753,0.139262789 L25.6916134,20.7848311 C26.0855801,21.1718824 26.0911863,21.8050225 25.704135,22.1989893 C25.7000188,22.2031791 25.6958657,22.2073326 25.6916762,22.2114492 L4.67709797,42.8607841 C4.48259567,43.0519059 4.17082418,43.0519358 3.97628526,42.8608513 L0.154518591,39.1069479 C-0.0424848215,38.9134427 -0.0453206733,38.5968729 0.148184538,38.3998695 C0.150289256,38.3977268 0.152413239,38.395603 0.154556228,38.3934985 L16.9937789,21.8567812 C17.1908028,21.6632968 17.193672,21.3467273 17.0001876,21.1497035 C16.9980647,21.1475418 16.9959223,21.1453995 16.9937605,21.1432767 L0.15452076,4.60825197 C-0.0425130651,4.41477773 -0.0453986756,4.09820839 0.148075568,3.90117456 C0.150162624,3.89904911 0.152268631,3.89694235 0.154393339,3.89485454 Z" fill="#FFFFFF"></path>
                        </g>
                    </svg>
                    </span> 
                </a>
              </div>
            </div>
            
          </li>))}
          {/* <li>
            <RiFolderSettingsLine size="3em" style={{"color":"#4B49AC"}} />
            <span className="text">
              <h3>24</h3>
              <p>Projects</p>
            </span>
          </li>
          <li>
            <PiStudentBold size="3em" color="#4B49AC"/>
            <span className="text">
              <h3>73</h3>
              <p>Students</p>
            </span>
          </li> */}
        </ul>
        </main>
    </div>
  )
}
