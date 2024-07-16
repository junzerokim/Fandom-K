import React from 'react';

import './MyIdolListItem.css';
import deleteButton from '../assets/images/btn_delete.svg';

function MyIdolListItem({ idolData, onClick }) {
  const { id, name, group, profilePicture } = idolData;

  return (
    <div className="idol-list-item-wrapper">
      <div className="idol-list-item my-favorite-idol">
        <button className="delete-button" type="button" aria-label="아이돌 삭제 버튼" onClick={() => onClick(id)}>
          <img className="delete-button-icon" src={deleteButton} alt="delete button" />
        </button>
        <div className="idol-profile-wrapper my-favorite-idol">
          <img className="idol-profile my-favorite-idol" src={profilePicture} alt="Idol profile" />
        </div>
        <h1 className="idol-name">{name}</h1>
        <h2 className="idol-group">{group}</h2>
      </div>
    </div>
  );
}

export default MyIdolListItem;
