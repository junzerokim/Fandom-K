import React from "react";
import "./IdolDetail.css";
import checkIcon from "../../Mypage/assets/images/ic_check.svg";

function IdolDetail({
  idolData,
  isNeedRadio = false,
  isSelected,
  onRadioChange,
}) {
  const { id, profilePicture, rank, group, name, totalVotes } = idolData;

  // const handleRadioChange = () => {
  //   onRadioChange(id);
  //   console.log(isSelected);
  // };

  return (
    <div className="idol-container">
      <div className="idol-info">
        <div className="idol-image">
          {isSelected ? (
            <div className="selected-idol-wrapper">
              <div className="selected-idol-color" />
              <img
                className="selected-idol-check"
                src={checkIcon}
                alt="Selected check icon"
              />
              <img src={profilePicture} alt="아이돌 이미지" />
            </div>
          ) : (
            <img src={profilePicture} alt="아이돌 이미지" />
          )}
        </div>
        <div className="idol-rate">{rank}</div>
        <h3 className="idol-group">{group}</h3>
        <h3 className="idol-name">{name}</h3>
      </div>
      <p className="idol-vote-rate">{totalVotes}표</p>
      {isNeedRadio && (
        <input
          className="idol-radio"
          type="radio"
          name="idol-radio"
          value={id}
          onInput={() => onRadioChange(id)}
        />
      )}
    </div>
  );
}

export default IdolDetail;
