import React, { useState } from 'react';
import donationCredit from '../../assets/images/donationCredit.png';
import DeleteButton from './DeleteButton';
import Button from './Button';
import './DonationsModal.css';
import '../../assets/styles/global.css';

function DonationsModal({ profilePicture, closeModal }) {
  const [credit, setCredit] = useState();
  const [buttonType, setbuttonType] = useState('inactive');
  const [isDonationValid, setIsDonationValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 에러메세지
  // input 스타일 변경
  const validateDonation = () => {
    if (!isDonationValid) {
      setbuttonType('active');
      setErrorMessage('');
    } else {
      setbuttonType('inactive');
      setErrorMessage('갖고 있는 크레딧보다 더 많이 후원할 수 없어요.');
    }
  };

  const handleInputChange = (e) => setCredit(e.target.value);

  // 내 크레딧 값보다 적으면 활성화되지 않는다.(내 크레딧<크레딧)
  // cost isDonationValid

  // 클릭하면 조공완료, localstorage 크레딧 줄어든다.
  // const onClickDonations

  return (
    <div className="donation-wrapper">
      <div className="donation-header">
        <h2>후원하기</h2>
        <DeleteButton onClick={closeModal} />
      </div>
      <img className="profile-picture" src={profilePicture} alt="아이돌 이미지" />
      <div className="subtitle">subtitle</div>
      <div className="title">title</div>
      <div className="input-wrapper">
        <input name="credit" type="number" value={credit} placeholder="크레딧 입력" onChange={handleInputChange} />
        <img src={donationCredit} alt="크레딧 이미지" />
      </div>
      {errorMessage && <p className="donation-error">{errorMessage}</p>}
      <Button text="후원하기" type={buttonType} />
    </div>
  );
}

export default DonationsModal;
