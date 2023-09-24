import React from "react";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFolderSettingsLine } from "react-icons/ri";
import { PiStudentBold } from "react-icons/pi";
import usericon from "../../assets/usericon.png";
import CsvBtn from "../CsvButton/CsvButton";
import './StudentProfile.css'

export default function StudentProfile() {
  // const facultyData = [
  //   {
  //     name: "Project 1",
  //     department: "MERN",
  //     underReviewProjects: 11,
  //     totalProjects: "✔",
  //   },
  //   {
  //     name: "Project 2",
  //     department: "IoT",
  //     underReviewProjects: 4,
  //     totalProjects: "✔",
  //   },
  //   {
  //     name: "Project 3",
  //     department: "AI&ML",
  //     underReviewProjects: 9,
  //     totalProjects: "✔",
  //   },
  //   {
  //     name: "Project 4",
  //     department: "MERN",
  //     underReviewProjects: 13,
  //     totalProjects: "✔",
  //   },
  //   {
  //     name: "Project 5",
  //     department: "Python",
  //     underReviewProjects: 6,
  //     totalProjects: "✔",
  //   },
  // ];
  // let SPOC = "Student";

  // const facultyDataLength = facultyData.length;

  return (
    <>
      <div class="body-container">
        <div class="dashboard">
          <div class="grid-container">
            <div class="profile grid-area">
              <div class="img">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
                <h3>John Doe</h3>
                <h5 class="online">Thadomal Shahani Engineering College</h5>
                <div class="button">
                  <i class="fas fa-sliders-h"></i>
                </div>
              </div>
              <div class="profile-data">
                <div class="data-details">
                  <h5>Age</h5>
                  <h4>24</h4>
                </div>
                <div class="data-details">
                  <h5>Location</h5>
                  <h4>Mumbai</h4>
                </div>
                <div class="data-details">
                  <h5>Year</h5>
                  <h4>TE</h4>
                </div>
              </div>
              <div class="profile-more">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat porro id eum labore iste nostrum eius est. Quae molestias distinctio magnam voluptatem dicta rem iure.</p>
              </div>
            </div>

            <div class="last-view grid-area">
              <h2>Collaborators</h2>
              <div class="profiles-display">
                <div class="one-profile online">
                  <div class="img">
                    <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                  </div>
                  <h4>Alicia</h4>
                </div>
                <div class="one-profile">
                  <div class="img">
                    <img src="https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
                  </div>
                  <h4>Dan</h4>
                </div>
                <div class="one-profile online">
                  <div class="img">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                  </div>
                  <h4>Lea</h4>
                </div>

                <div class="one-profile">
                  <div class="img">
                    <img src="https://images.unsplash.com/photo-1517935541300-19815e88fa63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                  </div>
                  <h4>John</h4>
                </div>
                <div class="one-profile">
                  <div class="img">
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                  </div>
                  <h4>Christopher</h4>
                </div>
              </div>
            </div>

            <div class="last-like grid-area">
              <h2>Badges</h2>
              <div class="profiles-display">
                <div class="one-profile online">
                  <div class="img">
                    <img src="https://ribbonbadges.in/wp-content/uploads/2021/11/Single-Yellow.png" />
                  </div>
                </div>
                <div class="one-profile">
                  <div class="img">
                    <img src="https://m.media-amazon.com/images/I/415Exprh6CL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />
                  </div>
                </div>
                <div class="one-profile">
                  <div class="img">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/TH/KW/OZ/654971/satin-ribbon-badge.jpg" />
                  </div>
                </div>
                <div class="one-profile">
                  <div class="img">
                    <img src="https://m.media-amazon.com/images/I/312WP1YzbdL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />
                  </div>
                </div>
                <div class="one-profile">
                  <div class="img">
                    <img src="https://m.media-amazon.com/images/I/31j70ahD9rL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />
                  </div>
                </div>
              </div>
              <div>
                <p>Most Recent Badges</p>
                <h3>50 Days Badge 2023</h3>
              </div>
            </div>

            <div class="edit-profile grid-area">
              <div class="header">
                <h1>Edit your profile</h1>
              </div>
              <div class="profile-picture">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
              </div>
              <h1>John Doe</h1>
              <div class="edit-infos">
                <h3>
                  Personal information<i class="fas fa-pen"></i>
                </h3>
                <div class="profile-data">
                  <div class="data-details">
                    <h5>Age</h5>
                    <h4>24</h4>
                  </div>
                  <div class="data-details">
                    <h5>Gender</h5>
                    <h4>Men</h4>
                  </div>
                  <div class="data-details">
                    <h5>Location</h5>
                    <h4>Mumbai</h4>
                  </div>
                </div>
              </div>
              <div class="edit-interest">
                <h3>
                  College Name<i class="fas fa-pen"></i>
                </h3>
                <p class="p-small">Thadomal Shahani Engineering College</p>
              </div>
              <div class="edit-interest">
                <h3>
                  Course Enrolled<i class="fas fa-pen"></i>
                </h3>
                <p class="p-small">50</p>
              </div>
              <div class="edit-interest">
                <h3>
                  Number of Projects Enrolled<i class="fas fa-pen"></i>
                </h3>
                <p class="p-small">25</p>
              </div>
              <div class="edit-interest">
                <h3>
                  Number of Projects Published<i class="fas fa-pen"></i>
                </h3>
                <p class="p-small">22</p>
              </div>
              <div class="edit-interest">
                <h3>
                  Bio<i class="fas fa-pen"></i>
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
              <div class="edit-interest">
                <h3>
                  Your interests <i class="fas fa-pen"></i>
                </h3>
                <p>
                  #traveling #cooking #summer #jazz #friends #art #walk #dogs
                  #design #architecture #photo #nature #fun{" "}
                </p>
              </div>
              {/* <div class="edit-picture">
                <div class="picture">
                  <img src="https://images.unsplash.com/photo-1540218660726-95c6764dd7ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div class="picture">
                  <img src="https://images.unsplash.com/photo-1467020421390-2fb2647a413e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80" />
                </div>
                <div class="picture">
                  <img src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div class="picture-add">
                  <i class="fas fa-plus"></i>
                </div>
              </div> */}
            </div>

            <div class="matchs grid-area">
              <div class="header">
                <h1>Your Matchs</h1>
              </div>
              <div class="display-matchs">
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1517935541300-19815e88fa63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>John, 30</h4>
                      <h5>Last seen 2d ago</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>Alicia, 23</h4>
                      <h5 class="online">Online</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
                    <div class="match-info">
                      <h4>Dan, 49</h4>
                      <h5>Last seen 15h ago</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>Christopher, 27</h4>
                      <h5>Last seen 1w ago</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>Lea, 25</h4>
                      <h5 class="online">Online</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1517935541300-19815e88fa63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>John, 30</h4>
                      <h5>Last seen 2d ago</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>Alicia, 23</h4>
                      <h5 class="online">Online</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1495078065017-564723e7e3e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
                    <div class="match-info">
                      <h4>Dan, 49</h4>
                      <h5>Last seen 15h ago</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>Christopher, 27</h4>
                      <h5>Last seen 1w ago</h5>
                    </div>
                  </div>
                </div>
                <div class="one-match">
                  <div class="one-match-content">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
                    <div class="match-info">
                      <h4>Lea, 25</h4>
                      <h5 class="online">Online</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   <main>
    //     <div className="head-title">
    //       <div className="left">
    //         <h1>Welcome, {SPOC}!</h1>
    //         <ul className="breadcrumb">
    //           <li>
    //             <a href="#">Thadomal Shahani Engineering College</a>
    //           </li>
    //         </ul>
    //       </div>
    //       {/* <a href="#" className="btn-add">

    //         <span className="text">Add Faculty +</span>
    //       </a> */}
    //     </div>

    //     <ul className="box-info">
    //       <li>
    //         {/*<i className="bx bxs-calendar-check"></i> */}
    //         <RiFolderSettingsLine size="3em" style={{ color: "#4B49AC" }} />
    //         <span className="text">
    //           <h3>07</h3>
    //           <p>Verified Projects</p>
    //         </span>
    //       </li>
    //       <li>
    //         {/*<i className="bx bxs-group"></i> */}
    //         <RiFolderSettingsLine size="3em" style={{ color: "#4B49AC" }} />
    //         <span className="text">
    //           <h3>24</h3>
    //           <p>Total Projects</p>
    //         </span>
    //       </li>
    //       <li>
    //         <PiStudentBold size="3em" color="#4B49AC" />
    //         <span className="text">
    //           <h3>73</h3>
    //           <p>Badges</p>
    //         </span>
    //       </li>
    //     </ul>

    //     <div className="table-data">
    //       <div className="order">
    //         <div className="head">
    //           <h3>Faculties</h3>
    //         </div>
    //         <table>
    //           <thead>
    //             <tr>
    //               <th>Project Name</th>
    //               <th>Domain</th>
    //               <th>No of Collaborators</th>
    //               <th>Verified</th>
    //             </tr>
    //           </thead>
    //           <tbody>

    //             {facultyDataLength === 0 ? ( <CsvBtn/>) :
    //               (
    //                 <>
    //                   {facultyData.map((faculty, index) => (
    //                     <tr key={index}>
    //                       <td>
    //                       <RiFolderSettingsLine size="3em" style={{ color: "#4B49AC" }} />
    //                         <p>{faculty.name}</p>
    //                       </td>
    //                       <td>{faculty.department}</td>
    //                       <td>
    //                         <span className="status pending">
    //                           {faculty.underReviewProjects}
    //                         </span>
    //                       </td>
    //                       <td>
    //                         <span className="status process">
    //                           {faculty.totalProjects}
    //                         </span>
    //                       </td>
    //                     </tr>
    //                   ))}
    //                 </>
    //               )
    //             }
    //           </tbody>
    //         </table>
    //       </div>
    //       <div className="todo">
    //         <div className="head">
    //           <h3>Popular Projects</h3>
    //         </div>
    //         <ul className="todo-list">
    //           <li className="completed">
    //             <div className="projListDiv">
    //               <div className="projListLeft">
    //                 <div className="projListIcon">
    //                   <AiOutlineFundProjectionScreen size="1.8em" />
    //                 </div>
    //                 <div className="projListInfo">
    //                   <h2 className="projListHead">BarterX</h2>
    //                   <p className="projListDate">31-08-2023</p>
    //                 </div>
    //               </div>
    //               <div className="projListCollab">
    //                 <img src={usericon} />
    //                 <img src={usericon} />
    //               </div>
    //             </div>
    //           </li>
    //           <li className="completed">
    //             <div className="projListDiv">
    //               <div className="projListLeft">
    //                 <div className="projListIcon">
    //                   <AiOutlineFundProjectionScreen size="1.8em" />
    //                 </div>
    //                 <div className="projListInfo">
    //                   <h2 className="projListHead">BarterX</h2>
    //                   <p className="projListDate">31-08-2023</p>
    //                 </div>
    //               </div>
    //               <div className="projListCollab">
    //                 <img src={usericon} />
    //                 <img src={usericon} />
    //               </div>
    //             </div>
    //           </li>
    //           <li className="completed">
    //             <div className="projListDiv">
    //               <div className="projListLeft">
    //                 <div className="projListIcon">
    //                   <AiOutlineFundProjectionScreen size="1.8em" />
    //                 </div>
    //                 <div className="projListInfo">
    //                   <h2 className="projListHead">BarterX</h2>
    //                   <p className="projListDate">31-08-2023</p>
    //                 </div>
    //               </div>
    //               <div className="projListCollab">
    //                 <img src={usericon} />
    //                 <img src={usericon} />
    //               </div>
    //             </div>
    //           </li>
    //           <li className="completed">
    //             <div className="projListDiv">
    //               <div className="projListLeft">
    //                 <div className="projListIcon">
    //                   <AiOutlineFundProjectionScreen size="1.8em" />
    //                 </div>
    //                 <div className="projListInfo">
    //                   <h2 className="projListHead">BarterX</h2>
    //                   <p className="projListDate">31-08-2023</p>
    //                 </div>
    //               </div>
    //               <div className="projListCollab">
    //                 <img src={usericon} />
    //                 <img src={usericon} />
    //               </div>
    //             </div>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </main>
    // </div>
  );
}
