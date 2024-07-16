import React from 'react';
// import donationDelete from '../../assets/images/donationDelete.png';

function CloseButton({ onClick }) {
  return (
    <button onClick={onClick}>
      <i className="icon-btn-close" aria-label="삭제 이미지" />
    </button>
  );
}

export default CloseButton;
