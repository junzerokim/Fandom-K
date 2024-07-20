import React, { useContext } from "react";

import donationCredit from "../../../../assets/images/ico_credit_non_gradation.png";

import "./DonationsModal.css";
import useEscapeModal from "../../../../hooks/useEscapeModal";
import useDonationHandler from "../../../../hooks/useDonationHandler";
import handleBackgroundClick from "../../../../utils/handleBackgroundClick";

import { CreditContext } from "../../../../components/CreditContextProvider";
import CloseButton from "./CloseButton";

function DonationsModal({
  localCredit,
  localReceivedDonation,
  onUpdateCredit,
  onUpdateReceivedDonation,
  profilePicture,
  subtitle,
  title,
  closeModal,
  isOpen,
  updateProgressbar,
}) {
  const {
    handleCreditUpdate,
    handleReceivedDonationsUpdate,
    localReceivedDonations,
    localCredit,
    selectedDonation,
  } = useContext(CreditContext);

  const {
    value,
    errorMessage,
    isDonationValid,
    handleInputChange,
    onClickDonations,
  } = useDonationHandler(
    handleCreditUpdate,
    handleReceivedDonationsUpdate,
    localReceivedDonations,
    localCredit,
    selectedDonation,
    updateProgressbar,
    closeModal
  );

  useEscapeModal(closeModal);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay"
      onClick={(e) => handleBackgroundClick(e, closeModal)}
    >
      <div className="modal modal-donation">
        <div className="modal-header">
          <h4 className="title">후원하기</h4>
          <CloseButton onClick={closeModal} />
        </div>
        <div className="modal-content">
          <div className="idol-info">
            <img
              className="profile-picture"
              src={profilePicture}
              alt="아이돌 이미지"
            />
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
              style={{ borderColor: errorMessage ? "red" : "" }}
            />
            <img src={donationCredit} alt="크레딧 이미지" />
          </div>
          {errorMessage && (
            <p className="donation-input-error">{errorMessage}</p>
          )}
        </div>
        <div className="modal-footer">
          <button
            className="btn-primary"
            onClick={onClickDonations}
            disabled={!isDonationValid}
            aria-label="후원하기 버튼"
          >
            후원하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonationsModal;
