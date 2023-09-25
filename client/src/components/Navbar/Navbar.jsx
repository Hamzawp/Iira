import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineBell, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { FormControl, InputLabel, Select } from "@mui/material";
import MaterialMenuItem from "@mui/material/MenuItem";
import i18next from "i18next";

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

  const [age, setAge] = React.useState("en");

  const handleChange = (event) => {
    i18next.changeLanguage(event.target.value);
    setAge(event.target.value);
  };

  return (
    //  NAVBAR
    <nav>
      {/* <i className="bx bx-menu"></i> */}
      <BiMenu onClick={props.onClick} className="nav-link" id="hammenu" />
      {/* <a href="#" className="nav-link">Categories</a>  */}
      <form action="#">
        <div className="form-input">
          <input type="search" placeholder="Search..." />
          <button type="submit" className="search-btn">
            <AiOutlineSearch />
          </button>
        </div>
      </form>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Lang</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Lang"
        >
          <MaterialMenuItem value={"en"}>English</MaterialMenuItem>
          <MaterialMenuItem value={"hi"}>Hindi</MaterialMenuItem>
          <MaterialMenuItem value={"ta"}>Tamil</MaterialMenuItem>
          <MaterialMenuItem value={"te"}>Telugu</MaterialMenuItem>
          <MaterialMenuItem value={"kn"}>Kannada</MaterialMenuItem>
          <MaterialMenuItem value={"ml"}>Malayalam</MaterialMenuItem>
          <MaterialMenuItem value={"mr"}>Marathi</MaterialMenuItem>
          <MaterialMenuItem value={"gu"}>Gujarati</MaterialMenuItem>
          <MaterialMenuItem value={"bn"}>Bengali</MaterialMenuItem>
          <MaterialMenuItem value={"pa"}>Punjabi</MaterialMenuItem>
          <MaterialMenuItem value={"or"}>Odia</MaterialMenuItem>
        </Select>
      </FormControl>
      <input type="checkbox" onChange={handleSwitch} id="switch-mode" hidden />
      <label for="switch-mode" className="switch-mode"></label>
      <a href="#" className="notification">
        {/* <i className="bx bxs-bell"></i> */}
        <AiOutlineBell size="1.5em" />
        <span className="num">5</span>
      </a>
      <a href="#" className="profile">
        <Menu
          menuButton={<MenuButton style={{ border: "none" }}>hello</MenuButton>}
        >
          <MenuItem>Logout</MenuItem>
        </Menu>
      </a>
    </nav>
    //    NAVBAR
  );
}
