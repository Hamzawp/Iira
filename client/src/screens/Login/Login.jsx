import React, { useState } from "react";

import {useNavigate} from "react-router-dom";
import axios from 'axios';

import "./Login.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ForgotPasswordPopup from "./ForgotPasswordPopup";

import url from '../../../url';
import jwt_decode from "jwt-decode";

const options = ["University", "Faculty", "Student"];
const defaultOption = options[0];

const Login = () => {

  const Navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedOption, setSelectedOption] = useState('');

  const [showForgotPasswordPopup, setShowForgotPasswordPopup] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPasswordPopup(true);
  };

  const handleClosePopup = () => {
    setShowForgotPasswordPopup(false);
  };
  const handleFocus = (e) => {
    e.target.parentNode.classList.add("focus");
  };

  const handleBlur = (e) => {
    const parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const sendData = async () => {
     let endpoint = '';
      try{
        console.log(selectedOption.value)
        // console.log(selectedOption);
        // console.log(selectedOption)
        switch (selectedOption.value) {
          case 'University':
             endpoint = "/api/v1/university/login";
            break;
          case 'Faculty':
             endpoint = "/api/v1/college/college_faculty/login";
            break;
          case 'Student':
             endpoint = "/api/v1/college/student/login";
            break;
          default:
             endpoint = "/api/v1/";
            break;
        }
        console.log(endpoint);
        console.log('Sending request to:', `${url}${endpoint}`);
        console.log('Sending data:', { email: username, password: password });

        const response = await axios.post(`${url}${endpoint}`, {email: username, password: password});
        // /api/v1/university/login
        // /api/v1/college/college_faculty/login
        // /api/v1/college/student/login
        console.log(response);
        localStorage.setItem('token', response.data.token);
        Navigate('/');
      }
      catch (error){
        console.log(error);
      }
    }

    sendData();
  };

  const handleDropdownChange = (selectedValue) => {
    setSelectedOption(selectedValue);
    // console.log(selectedOption)
  };

  return (
    <>
      <img
        className="Loginwave"
        src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/wave.png"
      />
      <div className="loginContainer">

        <div className="img">
          <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/bg.svg" />
        </div>

        <div className="login-content">
          <form onSubmit={handleSubmit}>
            <img src="https://raw.githubusercontent.com/sefyudem/Responsive-Login-Form/master/img/avatar.svg" />
            <h2 className="title">Welcome</h2>

            <div className="dropDownDiv">
              <Dropdown
                options={options}
                value={defaultOption}
                placeholder="Select an option"

                onChange={(selectedValue) => handleDropdownChange(selectedValue)}

              />
            </div>

            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="Inputdiv">
                {/* <h5>Username</h5> */}
                <input

                  type="email"

                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                />
              </div>
            </div>

            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="Inputdiv">
                {/* <h5>Password</h5> */}
                <input
                  type="password"
                  className="input"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </div>
            </div>

            <a href="#" onClick={handleForgotPasswordClick}>Forgot Password?</a>

            <input type="submit" className="btn" value="Login" />

          </form>
        </div>
      </div>
      {showForgotPasswordPopup && (
        <ForgotPasswordPopup onClose={handleClosePopup} />
      )}
    </>
  );
};

export default Login;
