import React from 'react';
import { useState, useEffect } from 'react';
import donationCredit from '../../../../assets/images/donationCredit.png';
import CloseButton from './CloseButton';
import './DonationsModal.css';
import useEscapeModal from '../../../../hooks/useEscapeModal';

function DonationsModal({ localCredit, onUpdate, profilePicture, subtitle, title, closeModal, isOpen }) {
  const [value, setValue] = useState('');
  const [buttonType, setbuttonType] = useState('inactive');
  const [errorMessage, setErrorMessage] = useState('');
  const [myCredit, setMyCredit] = useState(localCredit);
  const [isDonationValid, setIsDonationValid] = useState(false);

  useEffect(() => {
    setMyCredit(localCredit);
  }, [localCredit]);

  useEscapeModal(closeModal);

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  //내 크레딧 값보다 적으면 활성화된다.
  //input 값에 따라 업로드
  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    setValue(inputValue);

    const ValidDonation = myCredit >= inputValue;
    if (ValidDonation) {
      setbuttonType('active');
      setErrorMessage('');
      setIsDonationValid(true);
    } else {
      setbuttonType('inactive');
      setErrorMessage('갖고 있는 크레딧보다 더 많이 후원할 수 없어요');
    }

    console.log(myCredit);
    console.log(inputValue);
  };

  //클릭하면 조공완료, localstorage 크레딧 줄어든다.//receiveDonation 충전된다.
  const onClickDonations = () => {
    const newCredit = myCredit - value;
    setMyCredit(newCredit);
    onUpdate(newCredit);
    closeModal();
  };

  return (
    <div className="donation-background" onClick={handleBackgroundClick}>
      <div className="donation-wrapper" style={{ height: errorMessage ? '529px' : '509px' }}>
        <div className="donation-header">
          <h2>후원하기</h2>
          <CloseButton onClick={closeModal} />
        </div>
        <img className="profile-picture" src={profilePicture} alt="아이돌 이미지" />
        <div className="subtitle">{subtitle}</div>
        <div className="title">{title}</div>
        <div className="input-wrapper">
          <input
            name="credit"
            type="number"
            value={value}
            placeholder="크레딧 입력"
            onChange={handleInputChange}
            style={{ borderColor: errorMessage ? 'red' : '' }}
          />
          <img src={donationCredit} alt="크레딧 이미지" />
        </div>
        {errorMessage && <p className="donation-input-error">{errorMessage}</p>}
        <button className={`button button_${buttonType}`} onClick={onClickDonations} disabled={!isDonationValid}>
          후원하기
        </button>
      </div>
    </div>
  );
}

export default DonationsModal;
