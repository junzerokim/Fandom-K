import React from "react";
import "./AddIdolListItem.css";
import checkIcon from "../../../assets/images/ic_check.svg";

function AddIdolListItem({ isSelected, idolData }) {
  const { name, group, profilePicture } = idolData;

  return (
    <div className="idol-list-item-wrapper">
      <div className="idol-list-item add-favorite-idol">
        <div className="idol-profile-wrapper add-favorite-idol">
          {isSelected ? (
            <div className="selected-idol-wrapper">
              <div className="selected-idol-color" />
              <img
                className="selected-idol-check"
                src={checkIcon}
                alt="Selected check icon"
              />
              <img
                className="idol-profile add-favorite-idol"
                src={profilePicture}
                alt="Idol profile"
              />
            </div>
          ) : (
            <img
              className="idol-profile add-favorite-idol"
              src={profilePicture}
              alt="Idol profile"
            />
          )}
        </div>
        <h4 className="idol-name">{name}</h4>
        <h5 className="idol-group">{group}</h5>
      </div>
    </div>
  );
}

export default AddIdolListItem;
