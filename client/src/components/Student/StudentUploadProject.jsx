import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./StudentUploadProject.css";



export default function StudentUploadProject() {

  return (
    <div className="stu-pro-container">
      <div className="stu-pro-heading">
        <h1>Create a new Project Repository</h1>
        <p>
          A repository contains all project files, including the revision
          history.
        </p>
        {/* <div className="upload-btn">
          <button className="upload">
            {" "}
            <span
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "8px",
                height: "20px",
              }}
            >
              <AiOutlinePlus /> New Project
            </span>
          </button>
          <button className="myprojbtn">Your Projects</button>
        </div> */}
      </div>

      <div className="inp-divs">
        <div className="inp-container">
          <div className="inp-title">Title</div>
          <h4>Project Name</h4>
          <div className="inp-inpanddiv">
            <input className="inp-input" name="text" type="text" />
            <p>
              A repository contains all project files, including the revision
              history.
            </p>
          </div>
        </div>

        <div className="inp-container">
          <div className="inp-title">Title</div>
          <h4>Owner</h4>
          <div className="inp-inpanddiv">
            <div className="collaborators">
              <input className="inp-input" name="text" type="text" />
              <input className="inp-input" name="text" type="text" />
              <AiOutlinePlus style={{ cursor: "pointer" }} />
              <div className="inp-profile-div">
             <input type="file" className="inp-profile" />
             <p>Upload the Project Report</p></div>
            </div>
            <p>A project has one owner and can have multiple collaborators</p>
          </div>
        </div>

        <div className="inp-container">
          <div className="inp-title">Title</div>
          <h4>Domain</h4>
          <div className="inp-inpanddiv">
            <input className="inp-input" name="text" type="text" />
            <p>A project has one owner and can have multiple collaborators</p>
          </div>
        </div>

        <div className="inp-container">
          <div className="inp-title">Title</div>
          <h4>Description</h4>
          <div className="inp-inpanddiv">
            <textarea
              className="inp-input inp-textarea"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <p>A project has one owner and can have multiple collaborators</p>
          </div>
        </div>
      </div>
    </div>
  );
}
