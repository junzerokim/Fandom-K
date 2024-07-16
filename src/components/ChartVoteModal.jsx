import React from 'react';
import './ChartVoteModal.css';

function ChartVoteModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="donation-wrapper">
          <div className="donation-header">
            <h3>투표하기</h3>
            <button className="close-modal" onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartVoteModal;
