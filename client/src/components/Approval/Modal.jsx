import React, { useEffect, useState } from "react";
import "./Modal.css";
import Dropdown from "react-dropdown";
const options = ["Approve", "Rollback"];
const defaultOption = options[0];

export default function Modal() {
  const [modal, setModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Approve");
  const [remarks, setRemarks] = useState("");

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    setRemarks(e.target.value);
  };

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Approve/ Rollback</h2>
            <Dropdown
              options={options}
              value={defaultOption}
              placeholder="Select an option"
              onChange={(e) => setSelectedOption(e.value)}
            />
            <input className="modal-input" type="text" placeholder="Enter Remarks" onChange={handleChange} />
            <input type="submit" className="login-btn" value="Submit" />
            <button className="close-modal" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam excepturi corrupti doloremque accusantium id ratione ipsa veniam eum magnam soluta molestias accusamus, maiores tenetur quae temporibus aperiam, sint expedita illum, libero error deserunt maxime omnis vero. Quis, iste. Dignissimos quidem repellat architecto expedita atque, nam fuga nihil maxime ducimus dolorem magnam in quae cum animi exercitationem et velit? Est vitae repellat, ratione, necessitatibus facilis veritatis, saepe tempore accusamus magni deleniti itaque aliquid rem! Ea laborum soluta et minima animi maiores unde aliquid modi quod quasi minus quae exercitationem earum pariatur iste, quisquam dolores </p>
    </>
  );
}