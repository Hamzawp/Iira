import React, { useState } from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import usericon from "../../assets/usericon.png";
import CsvBtn from "../CsvButton/CsvButton";
import FacultyChart from "./FacultyChart";
import "./FacultyProfile.css";
export default function FacultyProfile() {
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
  let SPOC = "SPOC";

  const facultyDataLength = facultyData.length;

  return (
    <>
      <div className="body-container">
        <div className="dashboard">
          <div className="grid-container grid-container-fac">
            <div className="profile grid-area profile-fac">
              <div className="img">
                <img src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" />
                <h3>Rahul Kumar</h3>
                <h5 className="online">Thadomal Shahani Engineering College</h5>
                <div className="button">
                  <i className="fas fa-sliders-h"></i>
                </div>
              </div>
              <div className="profile-data">
                <div className="data-details">
                  <h5>Faculty ID</h5>
                  <h4>FD34</h4>
                </div>
                <div className="data-details">
                  <h5>Location</h5>
                  <h4>Mumbai</h4>
                </div>
                <div className="data-details">
                  <h5>Branch</h5>
                  <h4>Computer</h4>
                </div>
              </div>
              <div className="profile-more">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Placeat porro id eum labore iste nostrum eius est. Quae
                  molestias distinctio magnam voluptatem dicta rem iure.
                </p>
              </div>
            </div>

            <div className="last-like grid-area last-like-fac">
              <h2>Projects Review Pending</h2>
              <div className="profiles-display">
                <div className="one-profile">
                  <div className="img">
                    <img src="https://images-platform.99static.com//MqY7pA4_33g4coyi5eokv0RspIo=/300x191:875x766/fit-in/500x500/99designs-contests-attachments/4/4330/attachment_4330512" />
                  </div>
                  <h4>Project 1</h4>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://aemi.ie/wp-content/uploads/2021/10/Project-Arts-Centre-Logo-Black-1-scaled.jpg" />
                  </div>
                  <h4>Project 2</h4>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://img.freepik.com/free-vector/project-management-design-concept-symbolizing-analysis-solving-problems-isometric-vector-illustration_1284-77122.jpg" />
                  </div>
                  <h4>Project 3</h4>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://img.freepik.com/free-vector/teem-discussing-project-kanban-board_1262-19963.jpg" />
                  </div>
                  <h4>Project 4</h4>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://img.freepik.com/free-vector/creative-project-management-concept-flat-style_23-2147792531.jpg" />
                  </div>
                  <h4>Project 5</h4>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://cdn-cashy-static-assets.lucidchart.com/marketing/blog/2017Q3/phases-project-management-lifecycle/phases-project-management-lifecycle-header.png" />
                  </div>
                  <h4>Project 6</h4>
                </div>
              </div>
            </div>

            <div className="last-view grid-area">
              <h2>Projects Review Done</h2>
              <FacultyChart />
            </div>

            <div className="edit-profile grid-area">
              <div className="header">
                <h1>Edit your profile</h1>
              </div>
              <div className="profile-picture">
                <img src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg" />
              </div>
              <h1>Rahul Kumar</h1>
              <div className="edit-infos">
                <h3>
                  Personal information<i className="fas fa-pen"></i>
                </h3>
                <div className="profile-data">
                  <div className="data-details">
                    <h5>Faculty ID</h5>
                    <h4>FD34</h4>
                  </div>
                  <div className="data-details">
                    <h5>Gender</h5>
                    <h4>M</h4>
                  </div>
                  <div className="data-details">
                    <h5>Location</h5>
                    <h4>Mumbai</h4>
                  </div>
                </div>
              </div>
              <div className="edit-interest">
                <h3>
                  College Name<i className="fas fa-pen"></i>
                </h3>
                <p className="p-small ">Thadomal Shahani Engineering College</p>
              </div>
              <div className="edit-interest">
                <h3>
                  Contact Details<i className="fas fa-pen"></i>
                </h3>
                <p className="p-small p-email">
                  <strong>Email:</strong> rahul34@tsecedu.org
                </p>
                <p className="">
                  <strong>Phone:</strong> 89632 58963
                </p>
              </div>
              <div className="edit-interest">
                <h3>
                  Professional Experience<i className="fas fa-pen"></i>
                </h3>
                <p className="p-small p-email">
                  <strong>Current position:</strong> H.O.D
                </p>
                <p className="">
                  <strong>Years of teaching:</strong> 15
                </p>
              </div>
              <div className="edit-interest">
                <h3>
                  Bio<i className="fas fa-pen"></i>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  aliquam leo eu sapien tristique, eu efficitur mi ornare.
                  Aliquam erat volutpat. Pellentesque rhoncus volutpat
                  laoreet.Aliquam erat volutpat. Pellentesque rhoncus volutpat
                  laoreet.Aliquam erat volutpat. Pellentesque rhoncus volutpat
                  laoreet.
                </p>
              </div>
            </div>

            <div className="matchs grid-area">
              <div className="header">
                <h1>Faculty Members</h1>
              </div>
              <div className="display-matchs">
                <div className="one-match">
                  <div className="one-match-content">
                    <img src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png" />
                    <div className="match-info">
                      <h4>Ajay Sharma</h4>
                      <h5>Last seen 2d ago</h5>
                    </div>
                  </div>
                </div>
                <div className="one-match">
                  <div className="one-match-content">
                    <img src="https://t3.ftcdn.net/jpg/05/17/79/88/360_F_517798849_WuXhHTpg2djTbfNf0FQAjzFEoluHpnct.jpg" />
                    <div className="match-info">
                      <h4>Mansi Varma</h4>
                      <h5 className="online">Online</h5>
                    </div>
                  </div>
                </div>
                <div className="one-match">
                  <div className="one-match-content">
                    <img src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" />
                    <div className="match-info">
                      <h4>Vaibhav Shinde</h4>
                      <h5>Last seen 15h ago</h5>
                    </div>
                  </div>
                </div>
                <div className="one-match">
                  <div className="one-match-content">
                    <img src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png" />
                    <div className="match-info">
                      <h4>Jay Pandey</h4>
                      <h5 className="online">Online</h5>
                    </div>
                  </div>
                </div>
                <div className="one-match">
                  <div className="one-match-content">
                    <img src="https://www.pngkit.com/png/detail/281-2812821_user-account-management-logo-user-icon-png.png" />
                    <div className="match-info">
                      <h4>Harsh Mehta</h4>
                      <h5 className="online">Online</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
