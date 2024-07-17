import React from 'react';
import './ChartVoteModal.css';

function ChartVoteModal({ onClose, idolRank, gender }) {
  return (
    <div className="modal-overlay">
      <div className="chart-modal">
        <div className="modal-header">
          <h2>이달의 {gender === 'female' ? '여자' : '남자'} 아이돌</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">
          {idolRank.map((idol) => (
            <div key={idol.id} className="modal-idol-rank">
              <div className="idol-info">
                <div className="idol-image">
                  <img src={idol.profilePicture} alt="Profile" />
                </div>
                <div className="idol-rate">1</div>
                <div className="idol-group">{idol.group}</div>
                <div className="idol-name">{idol.name}</div>
                <div className="idol-votes">{idol.totalVotes}표</div>
                <input type="radio" name="idol-radio" className="idol-radio" />
              </div>
            </div>
          ))}
        </div>
        <div className="modal-footer">
          <button className="modal-vote-btn">투표하기</button>
          <p>
            투표하는 데 <b>1000 크레딧</b>이 소모됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChartVoteModal;
