import React, { useState, useEffect, useContext } from "react";
import donationCredit from "../../../../assets/images/donationCredit.png";
import "./DonationsModal.css";
import useEscapeModal from "../../../../hooks/useEscapeModal";
import putDonations from "../../../../service/putApi";
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

  const [value, setValue] = useState("");
  const [buttonType, setButtonType] = useState("inactive");
  const [errorMessage, setErrorMessage] = useState("");
  const [myCredit, setMyCredit] = useState(localCredit);
  const [receivedDonations, setReceivedDonations] = useState(
    localReceivedDonations
  );
  const [isDonationValid, setIsDonationValid] = useState(false);

  useEffect(() => {
    setMyCredit(localCredit);
    setReceivedDonations(localReceivedDonations);
  }, [localCredit, localReceivedDonations]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value.trim();
    setValue(inputValue);

    if (inputValue === "") {
      setButtonType("inactive");
      setErrorMessage("");
      setIsDonationValid(false);
    } else {
      const numericValue = parseInt(inputValue, 10);

      if (numericValue > myCredit) {
        setButtonType("inactive");
        setErrorMessage("갖고 있는 크레딧보다 더 많이 후원할 수 없어요");
        setIsDonationValid(false);
      } else if (
        selectedDonation.receivedDonations + numericValue >
        selectedDonation.targetDonation
      ) {
        setButtonType("inactive");
        setErrorMessage("후원 금액이 목표 금액을 초과합니다");
        setIsDonationValid(false);
      } else {
        setButtonType("active");
        setErrorMessage("");
        setIsDonationValid(true);
      }
    }
  };

  const onClickDonations = async () => {
    if (selectedDonation) {
      try {
        const newCredit = myCredit - value;
        handleCreditUpdate(newCredit);
        setMyCredit(newCredit);

        updateProgressbar();

        const newReceivedDonations = receivedDonations + value;
        await handleReceivedDonationsUpdate(newReceivedDonations);
        putDonations(selectedDonation, value);
        setReceivedDonations(newReceivedDonations);
      } catch (error) {
        console.error("Failed to donate:", error);
      } finally {
        closeModal();
      }
    }
  };

  useEscapeModal();

  if (!isOpen) return null;

  return (
    <div
      className="donation-background"
      onClick={(e) => handleBackgroundClick(e, closeModal)}
    >
      <div
        className="donation-modal"
        style={{ height: errorMessage ? "529px" : "509px" }}
      >
        <div className="donation-header">
          <h2>후원하기</h2>
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
