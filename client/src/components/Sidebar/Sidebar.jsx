import React, { useState } from "react";
import "./Sidebar.css";
import {
  BiSolidDashboard,
  BiSolidReport,
  BiHistory,
  BiMessageAltDetail,
  BiLogOut,
} from "react-icons/bi";
import { AiOutlineTeam } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";

export default function Sidebar(props) {
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [role, setRole] = useState(localStorage.getItem("role"));
  const handleRowClick = (rowId) => {
    setActiveMenuItem(rowId);
    props.onItemClick(rowId); // Pass the rowId to the parent
  };

  return (
    // {isSdbropen?}
    <section id="sidebar" className={props.isSdbropen ? "show" : "hide"}>
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">Aztec</span>
      </a>
      {role == "SPOC" && (
        <ul className="side-menu top">
          <li
            className={activeMenuItem === 1 ? "active" : ""}
            onClick={() => handleRowClick(1)}
          >
            <a href="#">
              <BiSolidDashboard className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Dashboard" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 2 ? "active" : ""}
            onClick={() => handleRowClick(2)}
          >
            <a href="#">
              <BiSolidDashboard className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "User Profile" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 3 ? "active" : ""}
            onClick={() => handleRowClick(3)}
          >
            <a href="#">
              <BiSolidReport className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "New Requests" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 4 ? "active" : ""}
            onClick={() => handleRowClick(4)}
          >
            <a href="#">
              <BiSolidReport className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Projects Review" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 5 ? "active" : ""}
            onClick={() => handleRowClick(5)}
          >
            <a href="#">
              <BiHistory className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "My Projects" : ""}
              </span>
            </a>
          </li>
          <li className={activeMenuItem === 6 ? "active" : ""}>
            <a href="#">
              <BiMessageAltDetail className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Add Faculty" : ""}
              </span>
            </a>
          </li>
        </ul>
      )}
      {/* <ul className="side-menu top">
        <li
          className={activeMenuItem === 1 ? "active" : ""}
          onClick={() => handleRowClick(1)}
        >
          <a href="#">
            <BiSolidDashboard className="custom-icons" />
            <span className="text">{props.isSdbropen ? "Dashboard" : ""}</span>
          </a>
        </li>
        <li
          className={activeMenuItem === 2 ? "active" : ""}
          onClick={() => handleRowClick(2)}
        >
          <a href="#">
            <BiSolidDashboard className="custom-icons" />
            <span className="text">
              {props.isSdbropen ? "User Profile" : ""}
            </span>
          </a>
        </li>
        <li
          className={activeMenuItem === 3 ? "active" : ""}
          onClick={() => handleRowClick(3)}
        >
          <a href="#">
            <BiSolidReport className="custom-icons" />
            <span className="text">
              {props.isSdbropen ? "New Requests" : ""}
            </span>
          </a>
        </li>
        <li
          className={activeMenuItem === 4 ? "active" : ""}
          onClick={() => handleRowClick(4)}
        >
          <a href="#">
            <BiSolidReport className="custom-icons" />
            <span className="text">
              {props.isSdbropen ? "Projects Review" : ""}
            </span>
          </a>
        </li>
        <li
          className={activeMenuItem === 5 ? "active" : ""}
          onClick={() => handleRowClick(5)}
        >
          <a href="#">
            <BiHistory className="custom-icons" />
            <span className="text">
              {props.isSdbropen ? "My Projects" : ""}
            </span>
          </a>
        </li>
        <li className={activeMenuItem === 6 ? "active" : ""}>
          <a href="#">
            <BiMessageAltDetail className="custom-icons" />
            <span className="text">
              {props.isSdbropen ? "Add Faculty" : ""}
            </span>
          </a>
        </li>
      </ul> */}
      {role == "UNIVERSITY" && (
        <ul className="side-menu top">
          <li
            className={activeMenuItem === 1 ? "active" : ""}
            onClick={() => handleRowClick(1)}
          >
            <a href="#">
              <BiSolidDashboard className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Dashboard" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 2 ? "active" : ""}
            onClick={() => handleRowClick(2)}
          >
            <a href="#">
              <BiSolidDashboard className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "University Profile" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 3 ? "active" : ""}
            onClick={() => handleRowClick(3)}
          >
            <a href="#">
              <BiSolidReport className="custom-icons" />
              <span className="text">{props.isSdbropen ? "Colleges" : ""}</span>
            </a>
          </li>
          <li
            className={activeMenuItem === 4 ? "active" : ""}
            onClick={() => handleRowClick(4)}
          >
            <a href="#">
              <BiSolidReport className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Add Colleges" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 5 ? "active" : ""}
            onClick={() => handleRowClick(5)}
          >
            <a href="#">
              <BiHistory className="custom-icons" />
              <span className="text">{props.isSdbropen ? "Projects" : ""}</span>
            </a>
          </li>
          {/* <li className={activeMenuItem === 6 ? "active" : ""}>
            <a href="#">
              <BiMessageAltDetail className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Add Faculty" : ""}
              </span>
            </a>
          </li> */}
        </ul>
      )}
      <ul className="side-menu">
        <li>
          <a href="#">
            <FiSettings className="custom-icons" />
            <span className="text">{props.isSdbropen ? "Settings" : ""}</span>
          </a>
        </li>
        <li>
          <a href="#" className="logout">
            <BiLogOut className="custom-icons" />
            <span className="text">{props.isSdbropen ? "Logout" : ""}</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
