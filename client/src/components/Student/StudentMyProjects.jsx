import React, { useState } from "react";
import "./StudentMyProjects";
import jwt_decode from "jwt-decode";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
// import usericon from '../../assets/usericon.png'
// import CsvBtn from '../CsvButton/CsvButton'
export default function StudentMyProjects() {
    const token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  console.log(decoded);
  const facultyData = [];
  const projects = [
    {
      project_title: "Project A",
      project_desc: "Lorem ipsum uinm jhtuh jywnm fgretf unm ipsum uinm jhtuh",
    },
    {
      project_title: "Project B",
      project_desc: "Lorem ipsum uinm jhtuh jywnm fgretf unm ipsum uinm jhtuh",
    },
    {
      project_title: "Project C",
      project_desc: "Lorem ipsum uinm jhtuh jywnm fgretf unm ipsum uinm jhtuh",
    },
    {
      project_title: "Project D",
      project_desc: "Lorem ipsum uinm jhtuh jywnm fgretf unm ipsum uinm jhtuh",
    },
    {
      project_title: "Project E",
      project_desc: "Lorem ipsum uinm jhtuh jywnm fgretf unm ipsum uinm jhtuh",
    },
    {
      project_title: "Project F",
      project_desc: "Lorem ipsum uinm jhtuh jywnm fgretf unm ipsum uinm jhtuh",
    },
  ];
  let SPOC = "SPOC";

  const facultyDataLength = facultyData.length;

  return (
    <div>
      <main>
        <div className="head-title">
          <div className="left">
            <h1>My Projects</h1>
            <ul className="breadcrumb">
              <li>
                <a href="#">Parth Puranik</a>
              </li>
            </ul>
          </div>
          {/* <a href="#" className="btn-add">
               <span className="text">Approve All ✔</span> 
            </a> */}
        </div>

        <ul className="box-info-projRev">
          {projects.map((project, index) => (
            <li key={index}>
              <div className="card-fac">
                <div className="card__wrapper">
                  <div className="card___wrapper-acounts">
                    <div className="card__score">+3</div>
                    <div className="card__acounts">
                      <svg
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                    </div>
                    <div className="card__acounts">
                      <svg
                        viewBox="0 0 128 128"
                        xmlns="http://www.w3.org/2000/svg"
                      ></svg>
                    </div>
                  </div>
                  <div className="card__menu">
                    <svg
                      fill="none"
                      height="20"
                      viewBox="0 0 4 20"
                      width="4"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </div>
                </div>
                <div className="card__title">{project.project_title}</div>
                <div className="card__subtitle">{project.project_desc}</div>
                <div className="card__indicator">
                  <span className="card__indicator-amount"></span> Read | {""}
                  <span className="card__indicator-percentage">75k</span>
                </div>
                <div className="card__progress">
                  <progress value="75" max="100"></progress>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
