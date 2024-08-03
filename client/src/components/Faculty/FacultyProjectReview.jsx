import React, { useState } from "react";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./FacultyProjectReview.css";
import Dropdown from "react-dropdown";
import "./Modal.css";
const options = ["Approve", "Rollback"];
const defaultOption = options[0];

export default function FacultyProjectReview(props) {
  const { uploadBtn } = props;
  const [modal, setModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Approve");
  const [remarks, setRemarks] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setRemarks(e.target.value);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
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
      project_title: "Barter X",
      project_desc:
        "BarterX is an innovative e-commerce platform designed to facilitate the trading and swapping of goods between individuals.",
      plag_report: 7,
    },
    {
      project_title: "MobiStore",
      project_desc:
        "A mobile-based ecommerce platform that allows retailers to create and manage their online store, and customers to shop from a wide range of products anytime, anywhere.",
      plag_report: 26,
    },
    {
      project_title: "HerbGarden",
      project_desc:
        "An online service that offers medicinal and culinary herbs in both seed and plant form. Customers can also get expert advice and support for their herb gardens.",
      plag_report: 80,
    },
    {
      project_title: "Artisan Bistro",
      project_desc:
        "A fine dining restaurant that sources its ingredients from local farmers and artisanal food producers. It also offers cooking classes and events for food lovers.",
      plag_report: 18,
    },
    {
      project_title: "BookLab",
      project_desc:
        "An online platform that provides access to the latest and greatest books from around the world. It offers personalized recommendations and reviews to help users discover new books.",
      plag_report: 35,
    },
  ];
  let SPOC = "SPOC";

  const facultyDataLength = facultyData.length;

  return (
    <div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Approve/ Rollback</h2>
            <Dropdown
              options={options}
              value={defaultOption}
              placeholder="Select an option"
              onChange={(e) => setSelectedOption(e.value)}
            />
            <input
              className="modal-input"
              type="text"
              placeholder="Enter Remarks"
              onChange={handleChange}
            />
            <input
              type="submit"
              className="approval-btn"
              value="Submit"
              j
              onClick={toggleModal}
            />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      <main>
        <div className="head-title">
          <div className="left">
            <h1>Projects Under Review</h1>
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

        <ul className="box-info-projRev">
          {projects.map((project, index) => (
            <li key={index}>
              <div className="card-fac">
                <div className="card__wrapper">
                  <div className="card___wrapper-acounts">
                    <div
                      className="card__score"
                      style={{ zIndex: "-5", background: "none" }}
                    ></div>
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
                    <div>
                      <Menu
                        menuButton={
                          <MenuButton style={{ border: "none" }}>
                            <BsThreeDotsVertical color="#fff" />
                          </MenuButton>
                        }
                      >
                        <MenuItem onClick={() => uploadBtn(10)}>View</MenuItem>
                        <MenuItem onClick={toggleModal}>Rollback</MenuItem>
                        <MenuItem onClick={toggleModal}>Accept</MenuItem>
                        <MenuItem>Decline</MenuItem>
                      </Menu>
                    </div>
                  </div>
                </div>
                <div className="card__title">{project.project_title}</div>
                <div className="card__subtitle">{project.project_desc}</div>
                <div className="card__indicator">
                  <span className="card__indicator-amount"></span> Plagiarised |{" "}
                  <span className="card__indicator-percentage">
                    {project.plag_report}%
                  </span>
                </div>
                <div className="card__progress">
                  <progress value={project.plag_report} max="100"></progress>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
