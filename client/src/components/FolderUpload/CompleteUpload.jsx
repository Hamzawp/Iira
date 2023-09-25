import React, { useEffect, useState } from 'react'
import './CompleteUpload.css'
import { AiOutlinePlus } from 'react-icons/ai'
import File from './File'

export default function CompleteUpload() {
  return (
<>
      <div className="inp-divs">
          <div className="inp-divs-left">
            <div className="inp-container" style={{"rowGap":"0px"}}>
              <div className="inp-title">Title</div>
              <h4 style={{"color":"var(--secdark)"}}>Project Name</h4>
              <div className="inp-inpanddiv">
              <h1 style={{"paddingLeft":"10px"}}>BarterX</h1>
                {/* <input className="inp-input" name="text" type="text" /> */}
                {/* <p>
                  A repository contains all project files, including the
                  revision history.
                </p> */}
              </div>
            </div>

            <div className="inp-container" style={{"rowGap":"0px"}}>
              <div className="inp-title">Title</div>
              <h4 style={{"color":"var(--secdark)"}}>Collaborators</h4>
              <div className="inp-inpanddiv">
                <div className="collaborators">
                <h3 style={{"paddingLeft":"10px"}}>Om Shete · Sakshi Bhandhari · Abhishek Uphadhyay</h3>
                </div>
              </div>
            </div>

            <div className="inp-container" style={{"rowGap":"0px"}}>
              <div className="inp-title">Title</div>
              <h4 style={{"color":"var(--secdark)"}}>Domain</h4>
              <div className="inp-inpanddiv">
              <h3 style={{"paddingLeft":"10px"}}>E - Commerce</h3>

                {/* <p>
                  A project has one owner and can have multiple collaborators
                </p> */}
              </div>
            </div>

            <div className="inp-container" style={{"rowGap":"0px"}}>
              <div className="inp-title">Title</div>
              <h4>Description</h4>
              <div className="inp-inpanddiv">
                {/* <textarea
                  className="inp-input inp-textarea"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea> */}
                <p style={{"paddingLeft":"10px"}}>
                  BarterX is a very good project it is awesome has lots of features like buy sell and trade. It consists of a reccomendation Machine Learning Model as well as image to text convertor which is used in line with reccomendation of products
                </p>
              </div>
            </div>
          </div>
          <div className="inp-div-right">
            <div className="inp-profile-div">
              <h4 style={{"marginBottom":"20px"}}>Project Report</h4>
              <File style={{"marginTop":"20px"}} type="upload" name="BarterX Report" level={0}/>
            </div>
          </div>
          
        </div>
        <button class="completeBtn"> Upload Project
</button>
</>

  )
}
