import React, { useState } from "react";
import "./Login.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ForgotPasswordPopup from "./ForgotPasswordPopup";

const options = ["University", "Faculty", "Student"];
const defaultOption = options[0];

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
    // Add your login logic here using 'username' and 'password' states
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
              />
            </div>

            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="Inputdiv">
                {/* <h5>Username</h5> */}
                <input
                  type="text"
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
