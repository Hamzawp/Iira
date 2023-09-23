import React, { useState } from "react";
import BadgePopup from "./BadgePopup";
import "./Badge.css";

const Badge = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleBadgeClick = () => {
    // Show the popup when the badge button is clicked
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    // Close the popup when the "Close" button is clicked
    setPopupVisible(false);
  };

  return (
    <>
      <div className="BadgeContainer">
        <div className="BadgeBtnCont">
          <button className="BadgeBtn" onClick={handleBadgeClick}></button>
        </div>
      </div>
      {isPopupVisible && <BadgePopup onClose={handleClosePopup} rank="Silver" />}
    </>
  );
};

export default Badge;
