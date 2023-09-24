import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./StudentUploadProject.css";
import FolderPage from "../FolderUpload/FolderPage";

export default function StudentUploadProject() {
  const [stage, setStage] = useState(1);

  function handleStage(stage){
    setStage(stage+1);
  }

  return (
    <div className="stu-pro-container">
      <div className="stu-pro-heading">
        <h1>Create a new Project Repository</h1>
        <p>
          A repository contains all project files, including the revision
          history.
        </p>
      </div>

      {/* stage 1 of upload */}
      {stage == 1 && (
        <div className="inp-divs">
          <div className="inp-divs-left">
            <div className="inp-container">
              <div className="inp-title">Title</div>
              <h4>Project Name</h4>
              <div className="inp-inpanddiv">
                <input className="inp-input" name="text" type="text" />
                <p>
                  A repository contains all project files, including the
                  revision history.
                </p>
              </div>
            </div>

            <div className="inp-container">
              <div className="inp-title">Title</div>
              <h4>Collaborators</h4>
              <div className="inp-inpanddiv">
                <div className="collaborators">
                  <input className="inp-input" name="text" type="text" />
                  <input className="inp-input" name="text" type="text" />
                  <AiOutlinePlus style={{ cursor: "pointer" }} />
                  {/* <div className="inp-profile-div">
             <input type="file" className="inp-profile" />
             <p>Upload the Project Report</p></div> */}
                </div>
                <p>
                  A project has one owner and can have multiple collaborators
                </p>
              </div>
            </div>

            <div className="inp-container">
              <div className="inp-title">Title</div>
              <h4>Domain</h4>
              <div className="inp-inpanddiv">
                <input className="inp-input" name="text" type="text" />
                <p>
                  A project has one owner and can have multiple collaborators
                </p>
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
                <p>
                  A project has one owner and can have multiple collaborators
                </p>
              </div>
            </div>
          </div>
          <div className="inp-div-right">
            <div className="inp-profile-div">
              <h4>Project Report</h4>
              <input type="file" className="inp-profile" />
              <p style={{ color: "grey" }}>Upload the Project Report</p>
            </div>
          </div>
        </div>
      )}

      {/* stage 2 of upload */}
      {stage == 2 && (
        <FolderPage />
      )}


      {/* buttons for all stages */}
      {stage == 1 && (
        <button onClick={() => handleStage(1)} class="continue-application">
          <div>
            <div class="pencil"></div>
            <div class="folder">
              <div class="top">
                <svg viewBox="0 0 24 27">
                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
              </div>
              <div class="paper"></div>
            </div>
          </div>
          Next
        </button>
      )}
      {stage == 2 && (
        <button class="continue-application">
          <div>
            <div class="pencil"></div>
            <div class="folder">
              <div class="top">
                <svg viewBox="0 0 24 27">
                  <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
                </svg>
              </div>
              <div class="paper"></div>
            </div>
          </div>
          Complete Upload
        </button>
      )}
    </div>
  );
}
