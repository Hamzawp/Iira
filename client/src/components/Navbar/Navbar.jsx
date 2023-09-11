import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineBell, AiOutlineMenu } from "react-icons/ai";
import {BiMenu} from 'react-icons/bi'

export default function Navbar(props) {
  const [turn, setTurn] = useState(false);
  const handleSwitch = () => {
    setTurn(!turn);
    if (turn) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };

  return (
    //  NAVBAR
    <nav>
      {/* <i className="bx bx-menu"></i> */}
      <BiMenu
        onClick={props.onClick}
        className="nav-link"
        id="hammenu"
      />
      {/* <a href="#" className="nav-link">Categories</a>  */}
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </form>
      <input type="checkbox" onChange={handleSwitch} id="switch-mode" hidden />
      <label for="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        {/* <i className="bx bxs-bell"></i> */}
        <AiOutlineBell />
        <span className="num">5</span>
      </a>
      <a href="#" className="profile">
        <img src="img/people.png" />
      </a>
    </nav>
    //    NAVBAR
  );
}
