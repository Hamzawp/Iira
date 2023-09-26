import React from "react";
import "./Badge.css";

const badgeData = [
  {
    rank: "Gold",
    imageSrc:
      "https://img.freepik.com/premium-vector/gold-medal-first-place-trophy-award-prize-winner-isolated-white-background-golden-badge-with-ribbon-achievement-victory-success-vector-cartoon-illustration-flat-design_284092-2624.jpg?w=2000",
    message: "Congratulations on earning the Gold badge!",
  },
  {
    rank: "Silver",
    imageSrc:
      "https://img.freepik.com/premium-vector/gold-medal-first-place-trophy-award-prize-winner-isolated-white-background-golden-badge-with-ribbon-achievement-victory-success-vector-cartoon-illustration-flat-design_284092-2624.jpg?w=2000",
    message: "Congratulations on earning the Silver badge!",
  },
  {
    rank: "Bronze",
    imageSrc:
      "https://img.freepik.com/premium-vector/gold-medal-first-place-trophy-award-prize-winner-isolated-white-background-golden-badge-with-ribbon-achievement-victory-success-vector-cartoon-illustration-flat-design_284092-2624.jpg?w=2000",
    message: "Congratulations on earning the Bronze badge!",
  },
];

const BadgePopup = ({ onClose, rank }) => {
  // Find the badge data corresponding to the provided rank
  const badgeInfo = badgeData.find((badge) => badge.rank === rank);

  if (!badgeInfo) {
    return null; // Handle the case where the rank is not found
  }

  return (
    <div className="BadgePopupContainer" onClick={onClose}>
      <div className="BadgePopupContent">
        <h2>{`You have earned the ${badgeInfo.rank} badge!`}</h2>
        <p>{badgeInfo.message}</p>
        <img src={badgeInfo.imageSrc} alt={`Badge - ${badgeInfo.rank}`} />
      </div>
    </div>
  );
};

export default BadgePopup;
