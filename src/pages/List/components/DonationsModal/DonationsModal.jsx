import React, { useContext } from 'react';
import useDonationHandler from '../../../../hooks/useDonationHandler';
import { CreditContext } from '../../../../context/CreditContextProvider';
import Modal from '../../../../components/Modal';
import './DonationsModal.css';

function DonationsModal({
  profilePicture,
  subtitle,
  title,
  closeModal,
  isOpen,
  updateProgressbar,
  localReceivedDonations,
}) {
  const { handleCreditUpdate, localCredit, selectedDonation } = useContext(CreditContext);

  const { value, errorMessage, isDonationValid, handleInputChange, onClickDonations } = useDonationHandler(
    handleCreditUpdate,
    localReceivedDonations,
    localCredit,
    selectedDonation,
    updateProgressbar,
    closeModal,
  );

  if (!isOpen) return null;

  const footer = (
    <button className="btn-primary" onClick={onClickDonations} disabled={!isDonationValid} aria-label="후원하기 버튼">
      후원하기
    </button>
  );

  return (
    <Modal title="후원하기" closeModal={closeModal} footer={footer} className="modal-donation">
      <div className="idol-info">
        <img className="profile-picture" src={profilePicture} alt="아이돌 이미지" />
        <div className="subtitle">{subtitle}</div>
        <div className="title">{title}</div>
      </div>
      <div className="input-wrapper">
        <input
          name="credit"
          type="number"
          value={value}
          placeholder="크레딧 입력"
          onChange={handleInputChange}
          style={{ borderColor: errorMessage ? 'red' : '' }}
        />
      </div>
      {errorMessage && <p className="donation-input-error">{errorMessage}</p>}
    </Modal>
  );
}

export default DonationsModal;
