import React from "react";
import "./IdolDetail.css";

function IdolDetail({ idolData, isRadio = false, onRadioChange }) {
  const { id, profilePicture, rank, group, name, totalVotes } = idolData;

  const handleRadioChange = (event) => {
    onRadioChange(event.target.value);
  };

  return (
    <div className="idol-container">
      <div className="idol-info">
        <div className="idol-image">
          <img src={profilePicture} alt="아이돌 이미지" />
        </div>
        <div className="idol-rate">{rank}</div>
        <h3 className="idol-group">{group}</h3>
        <h3 className="idol-name">{name}</h3>
      </div>
      <p className="idol-vote-rate">{totalVotes}표</p>
      {isRadio && (
        <input
          className="idol-radio"
          type="radio"
          name="idol-radio"
          value={id}
          onChange={handleRadioChange}
        />
      )}
    </div>
  );
}

export default IdolDetail;
