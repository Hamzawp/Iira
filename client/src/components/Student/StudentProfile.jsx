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
      <div className="body-container">
        <div className="dashboard">
          <div className="grid-container">
            <div className="profile grid-area">
              <div className="img">
                <img src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" />
                <h3>John Doe</h3>
                <h5 className="online">Thadomal Shahani Engineering College</h5>
                <div className="button">
                  <i className="fas fa-sliders-h"></i>
                </div>
              </div>
              <div className="profile-data">
                <div className="data-details">
                  <h5>Age</h5>
                  <h4>24</h4>
                </div>
                <div className="data-details">
                  <h5>Location</h5>
                  <h4>Mumbai</h4>
                </div>
                <div className="data-details">
                  <h5>Year</h5>
                  <h4>TE</h4>
                </div>
              </div>
              <div className="profile-more">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat porro id eum labore iste nostrum eius est. Quae molestias distinctio magnam voluptatem dicta rem iure.</p>
              </div>
            </div>

            <div className="last-view grid-area">
              <h2>Highly Rated Projects</h2>
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

            <div className="last-like grid-area">
              <h2>Badges</h2>
              <div className="profiles-display">
                <div className="one-profile online">
                  <div className="img">
                    <img src="https://ribbonbadges.in/wp-content/uploads/2021/11/Single-Yellow.png" />
                  </div>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://m.media-amazon.com/images/I/415Exprh6CL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />
                  </div>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://5.imimg.com/data5/SELLER/Default/2022/11/TH/KW/OZ/654971/satin-ribbon-badge.jpg" />
                  </div>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://m.media-amazon.com/images/I/312WP1YzbdL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />
                  </div>
                </div>
                <div className="one-profile">
                  <div className="img">
                    <img src="https://m.media-amazon.com/images/I/31j70ahD9rL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg" />
                  </div>
                </div>
              </div>
              <div>
                <p>Most Recent Badges</p>
                <h3>50 Days Badge 2023</h3>
              </div>
            </div>

            <div className="edit-profile grid-area">
              <div className="header">
                <h1>Edit your profile</h1>
              </div>
              <div className="profile-picture">
                <img src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" />
              </div>
              <h1>John Doe</h1>
              <div className="edit-infos">
                <h3>
                  Personal information<i className="fas fa-pen"></i>
                </h3>
                <div className="profile-data">
                  <div className="data-details">
                    <h5>Age</h5>
                    <h4>24</h4>
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
                <p className="p-small">Thadomal Shahani Engineering College</p>
              </div>
              <div className="edit-interest">
                <h3>
                  Course Enrolled<i className="fas fa-pen"></i>
                </h3>
                <p className="p-small">50</p>
              </div>
              <div className="edit-interest">
                <h3>
                  Number of Projects Enrolled<i className="fas fa-pen"></i>
                </h3>
                <p className="p-small">25</p>
              </div>
              <div className="edit-interest">
                <h3>
                  Number of Projects Published<i className="fas fa-pen"></i>
                </h3>
                <p className="p-small">22</p>
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
              <div className="edit-interest">
                <h3>
                  Your interests <i className="fas fa-pen"></i>
                </h3>
                <p>
                  #traveling #cooking #summer #jazz #friends #art #walk #dogs
                  #design #architecture #photo #nature #fun{" "}
                </p>
              </div>
              {/* <div className="edit-picture">
                <div className="picture">
                  <img src="https://images.unsplash.com/photo-1540218660726-95c6764dd7ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div className="picture">
                  <img src="https://images.unsplash.com/photo-1467020421390-2fb2647a413e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1235&q=80" />
                </div>
                <div className="picture">
                  <img src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                </div>
                <div className="picture-add">
                  <i className="fas fa-plus"></i>
                </div>
              </div> */}
            </div>

            <div className="matchs grid-area">
              <div className="header">
                <h1>Your Peers</h1>
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
