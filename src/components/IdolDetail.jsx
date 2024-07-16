import React from 'react';
import './IdolDetail.css';

function IdolDetail({ profilePicture, rank, group, name, totalVotes }) {
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
    </div>
  );
}

export default IdolDetail;
