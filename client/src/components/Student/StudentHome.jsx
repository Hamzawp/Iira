import React, { useEffect, useState } from "react";
import "./StudentHome.css";
import { AiOutlinePlus } from "react-icons/ai";
import {BsFilter} from 'react-icons/bs'
import SecondaryProjectCard from '../SecondaryProjectCard/SecondaryProjectCard'
export default function StudentHome() {
  return (
    <div>
      <div className="heading">
        <h1>Home</h1>
        <p>
          Explore,research and take inspiration from quality projects around the
          world.
        </p>
        <div className="upload-btn">
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
        </div>
      </div>

      <div className="searchinputdiv">
        <div className="searchbar">
          <div className="searchbar-wrapper">
            <div className="searchbar-left">
              <div className="search-icon-wrapper">
                <span className="search-icon searchbar-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="searchbar-center">
              <div className="searchbar-input-spacer"></div>

              <input
                type="text"
                className="searchbar-input"
                maxlength="2048"
                name="q"
                autocapitalize="off"
                autocomplete="off"
                title="Search"
                role="combobox"
                placeholder="Search GradFolio"
              />
            </div>

            <div className="searchbar-right">
              <BsFilter />
            </div>
          </div>
        </div>
      </div>

      <div className="secprojectdiv">
      <SecondaryProjectCard />
      <SecondaryProjectCard />
      <SecondaryProjectCard />
      <SecondaryProjectCard />
      <SecondaryProjectCard />
      <SecondaryProjectCard />
      </div>
    </div>
  );
}
