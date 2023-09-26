import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import {
  BiSolidDashboard,
  BiSolidReport,
  BiHistory,
  BiMessageAltDetail,
  BiLogOut,
  BiBadge
} from "react-icons/bi";
import { AiOutlinePlus, AiOutlineTeam } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { RiUserAddFill } from "react-icons/ri";
import { PiQueueFill } from "react-icons/pi";
import { HiUserGroup } from "react-icons/hi";
import { HiMiniBuildingLibrary } from "react-icons/hi2";
import { BsBuildingFillAdd } from "react-icons/bs";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import RateReviewIcon from "@mui/icons-material/RateReview";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import jwt_decode from "jwt-decode";
import { useTranslation } from "react-i18next";
export default function Sidebar(props) {
  const { t } = useTranslation();
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  // const [role, setRole] = useState(localStorage.getItem("role"));
  const handleRowClick = (rowId) => {
    setActiveMenuItem(rowId);
    props.onItemClick(rowId); 
  };
  const token = localStorage.getItem("token");
  var decoded = jwt_decode(token);

  // console.log(decoded.role);
  const role = decoded.role;
  localStorage.setItem("role", role);

  const Navigate = useNavigate();

  const logoutUser = () => {
    localStorage.clear();
    Navigate("/login");
  };
  // localStorage.setItem('role', 'UNIVERSITY');
  return (
    <section id="sidebar" className={props.isSdbropen ? "show" : "hide"}>
      <a href="#" className="brand">
        <i className="bx bxs-smile"></i>
        <span className="text">Aztec</span>
      </a>

      {role == "college_faculty" && (
       <ul className="side-menu top">
      <li className={activeMenuItem === 1 ? 'active' : ''} onClick={() => handleRowClick(1)}>
          <a href="#">
            {/* <i className="bx bxs-dashboard"></i> */}
            <BiSolidDashboard className = "custom-icons"/>
            <span className="text">{props.isSdbropen ? "Dashboard": ''}</span>
          </a>
        </li>
        <li className={activeMenuItem === 2 ? 'active' : ''} onClick={() => handleRowClick(2)}>
          <a href="#">
            {/* <i className="bx bxs-dashboard"></i> */}
            {/* <BiSolidDashboard className = "custom-icons"/> */}
            <AccountCircleIcon className='custom-icons'/>
            <span className="text">{props.isSdbropen ? "User Profile": ''}</span>
          </a>
        </li>
        <li className={activeMenuItem === 3 ? 'active' : ''} onClick={() => handleRowClick(3)}>
          <a href="#">
            {/* <i className="bx bxs-shopping-bag-alt"></i> */}
            {/* <BiSolidReport className = "custom-icons"/> */}
            <FactCheckIcon className = "custom-icons"/>
            <span className="text">{props.isSdbropen ? "Project Approval Panel": ''}</span>
          </a>
        </li>
        <li className={activeMenuItem === 4 ? 'active' : ''} onClick={() =>handleRowClick(4)}>
          <a href="#">
            {/* <i className="bx bxs-shopping-bag-alt"></i> */}
            {/* <BiSolidReport className = "custom-icons"/> */}
            <RateReviewIcon className = "custom-icons"/>
            <span className="text">{props.isSdbropen ? "Projects Review": ''}</span>
          </a>
        </li>
        <li className={activeMenuItem === 8 ? 'active' : ''} onClick={() =>handleRowClick(8)}>
                <a href="#">
                  {/* <i className="bx bxs-shopping-bag-alt"></i> */}
                  {/* <BiSolidReport className = "custom-icons"/> */}
                  <PiQueueFill className = "custom-icons"/>
                  <span className="text">{props.isSdbropen ? "Projects Queue": ''}</span>
                </a>
              </li>
        <li className={activeMenuItem === 5 ? 'active' : ''} onClick={() => handleRowClick(5)}>
          <a href="#">
            {/* <i className="bx bxs-doughnut-chart"></i> */}
            {/* <BiHistory className = "custom-icons"/> */}
            <BackupTableIcon className="custom-icons"/>
            <span className="text">{props.isSdbropen ? "My Projects": ''}</span>
          </a>
        </li>
        <li className={activeMenuItem === 6 ? 'active' : ''} onClick={() => handleRowClick(6)}>
          <a href="#">
            {/* <i className="bx bxs-message-dots"></i> */}
            {/* <BiMessageAltDetail className = "custom-icons"/> */}
            <GroupAddIcon className="custom-icons"/>
            <span className="text">{props.isSdbropen ? "Add Student": ''}</span>
          </a>
        </li>
        
      </ul>
      )}
      {role == "university" && (
        <ul className="side-menu top">
          <li
            className={activeMenuItem === 1 ? "active" : ""}
            onClick={() => handleRowClick(1)}
          >
            <a href="#">
              {/* <i className="bx bxs-dashboard"></i> */}
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
              {/* <i className="bx bxs-dashboard"></i> */}
              {/* <BiSolidDashboard className = "custom-icons"/> */}
              <AccountCircleIcon className="custom-icons" />
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
              {/* <i className="bx bxs-shopping-bag-alt"></i> */}
              {/* <BiSolidReport className = "custom-icons"/> */}
              <FactCheckIcon className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Project Approval Panel" : ""}

              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 4 ? "active" : ""}
            onClick={() => handleRowClick(4)}
          >
            <a href="#">
              {/* <i className="bx bxs-shopping-bag-alt"></i> */}
              {/* <BiSolidReport className = "custom-icons"/> */}
              <RateReviewIcon className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Projects Review" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 8 ? "active" : ""}
            onClick={() => handleRowClick(8)}
          >
            <a href="#">
              {/* <i className="bx bxs-shopping-bag-alt"></i> */}
              {/* <BiSolidReport className = "custom-icons"/> */}
              <PiQueueFill className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Projects Queue" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 5 ? "active" : ""}
            onClick={() => handleRowClick(5)}
          >

          {/* <li className={activeMenuItem === 6 ? "active" : ""}>
            <a href="#">
              {/* <i className="bx bxs-doughnut-chart"></i> */}
              {/* <BiHistory className = "custom-icons"/> */}
              <BackupTableIcon className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "My Projects" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 6 ? "active" : ""}
            onClick={() => handleRowClick(6)}
          >
            <a href="#">
              {/* <i className="bx bxs-message-dots"></i> */}
              {/* <BiMessageAltDetail className = "custom-icons"/> */}
              <GroupAddIcon className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Add Student" : ""}
              </span>
            </a>
          </li>
        </ul>
      )}

      {role == "university" && (
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
              <AccountCircleIcon className="custom-icons" />
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
              <HiMiniBuildingLibrary className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "My Colleges" : ""}
              </span>
            </a>
          </li>
          <li
            className={activeMenuItem === 5 ? "active" : ""}
            onClick={() => handleRowClick(5)}
          >
            <a href="#">
              <BackupTableIcon className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "My Projects" : ""}
              </span>

            </a>
          </li>
          <li
            className={activeMenuItem === 4 ? "active" : ""}
            onClick={() => handleRowClick(4)}
          >
            <a href="#">
              <BsBuildingFillAdd className="custom-icons" />
              <span className="text">
                {props.isSdbropen ? "Add Colleges" : ""}
              </span>
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
      {role == "SPOC" && (
        <>
          <ul className="side-menu top">
            <li
              className={activeMenuItem === 1 ? "active" : ""}
              onClick={() => handleRowClick(1)}
            >
              <a href="#">
                {/* <i className="bx bxs-dashboard"></i> */}
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
                {/* <i className="bx bxs-dashboard"></i> */}
                {/* <BiSolidDashboard className = "custom-icons"/> */}
                <AccountCircleIcon className="custom-icons" />
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
                {/* <i className="bx bxs-shopping-bag-alt"></i> */}
                {/* <BiSolidReport className = "custom-icons"/> */}
                <FactCheckIcon className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? "Project Approval Panel" : ""}
                </span>
              </a>
            </li>
            <li
              className={activeMenuItem === 4 ? "active" : ""}
              onClick={() => handleRowClick(4)}
            >
              <a href="#">
                {/* <i className="bx bxs-shopping-bag-alt"></i> */}
                {/* <BiSolidReport className = "custom-icons"/> */}
                <RateReviewIcon className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? "Projects Review" : ""}
                </span>
              </a>
            </li>
            <li
              className={activeMenuItem === 8 ? "active" : ""}
              onClick={() => handleRowClick(8)}
            >
              <a href="#">
                {/* <i className="bx bxs-shopping-bag-alt"></i> */}
                {/* <BiSolidReport className = "custom-icons"/> */}
                <PiQueueFill className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? "Projects Queue" : ""}
                </span>
              </a>
            </li>
            <li
              className={activeMenuItem === 5 ? "active" : ""}
              onClick={() => handleRowClick(5)}
            >
              <a href="#">
                {/* <i className="bx bxs-doughnut-chart"></i> */}
                {/* <BiHistory className = "custom-icons"/> */}
                <BackupTableIcon className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? "My Projects" : ""}
                </span>
              </a>
            </li>
            <li
              className={activeMenuItem === 6 ? "active" : ""}
              onClick={() => handleRowClick(6)}
            >
              <a href="#">
                {/* <i className="bx bxs-message-dots"></i> */}
                {/* <BiMessageAltDetail className = "custom-icons"/> */}
                <GroupAddIcon className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? "Add Faculty" : ""}
                </span>
              </a>
            </li>
            <li
              className={activeMenuItem === 7 ? "active" : ""}
              onClick={() => handleRowClick(7)}
            >
              <a href="#">
                {/* <i className="bx bxs-message-dots"></i> */}
                {/* <BiMessageAltDetail className = "custom-icons"/> */}
                <RiUserAddFill className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? "Add Student" : ""}
                </span>
              </a>
            </li>
          </ul>
        </>
      )}

      {role == "student" && (
        <>
          <ul className="side-menu top">
            <li
              className={activeMenuItem === 1 ? "active" : ""}
              onClick={() => handleRowClick(1)}
            >
              <a href="#">
                <BiSolidDashboard className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? t("Home") : ""}
                </span>
              </a>
            </li>
            <li
              className={activeMenuItem === 5 ? "active" : ""}
              onClick={() => handleRowClick(5)}
            >
              <a href="#">
                <BiSolidDashboard className="custom-icons" />
                <span className="text">
                  {props.isSdbropen ? t("Single Project") : ""}
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
                  {props.isSdbropen ? t("Profile") : ""}
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
                  {props.isSdbropen ? t("Add Project") : ""}
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
                  {props.isSdbropen ? t("My Projects") : ""}
                </span>
              </a>
            </li>
            {/* <li

            className={activeMenuItem === 5 ? "active" : ""}
            onClick={() => handleRowClick(5)}
          >
            <a href="#">
              <BiHistory className="custom-icons" />
              <span className="text">{props.isSdbropen ? "Discover" : ""}</span>
            </a>
          </li> */}
          </ul>
        </>
      )}


      <ul className="side-menu">
        <li>
          <a href="#">
            <FiSettings className="custom-icons" />
            <span className="text">
              {props.isSdbropen ? t("Settings") : ""}
            </span>
          </a>
        </li>
        <li>
          <a href="#" className="logout" onClick={logoutUser}>
            <BiLogOut className="custom-icons" />
            <span className="text">{props.isSdbropen ? t("Logout") : ""}</span>

          </a>
        </li>
      </ul>
    </section>
  );
}
