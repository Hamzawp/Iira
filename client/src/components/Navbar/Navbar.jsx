import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {BiMenu} from 'react-icons/bi'
import Avatar from 'react-avatar';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import "@szhsin/react-menu/dist/index.css";
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
          <AiOutlineSearch/>
          </button>
        </div>
      </form>
      <input type="checkbox" onChange={handleSwitch} id="switch-mode" hidden />
      <label for="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        {/* <i className="bx bxs-bell"></i> */}
        <AiOutlineBell size="1.5em" />
        <span className="num">5</span>
      </a>
      <a href="#" className="profile">
      
      <Menu menuButton={<MenuButton style={{"border":"none"}}><Avatar src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" size="30" round={true} /></MenuButton>}>
      <MenuItem>Logout</MenuItem>
    </Menu>
      </a>
    </nav>
    //    NAVBAR
  );
}
