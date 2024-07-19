import React, { useState, useEffect, useContext } from "react";
import donationCredit from "../../../../assets/images/donationCredit.png";
import "./DonationsModal.css";
import CloseButton from "./CloseButton";
import useEscapeModal from "../../../../hooks/useEscapeModal";
import { CreditContext } from "../../../../components/CreditContextProvider";

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
  const [buttonType, setbuttonType] = useState("inactive");
  const [errorMessage, setErrorMessage] = useState("");
  const [myCredit, setMyCredit] = useState(localCredit);
  const [receivedDonations, setReceivedDonations] = useState(
    localReceivedDonations
  );
  const [isDonationValid, setIsDonationValid] = useState(false);

  useEffect(() => {
    setMyCredit(localCredit);
    setReceivedDonations(localReceivedDonations);

    console.log("업데이트 된 localReceived 받은 값:", receivedDonations);
  }, [localCredit, localReceivedDonations]);

  // 내 크레딧 값보다 적으면 활성화된다.
  // input 값에 따라 업로드
  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    setValue(inputValue);

    const ValidDonation = myCredit >= inputValue;
    if (ValidDonation) {
      setbuttonType("active");
      setErrorMessage("");
      setbuttonType("active");
      setErrorMessage("");
      setIsDonationValid(true);
    } else {
      setbuttonType("inactive");
      setErrorMessage("갖고 있는 크레딧보다 더 많이 후원할 수 없어요");
      setIsDonationValid(false);
    }
    console.log(receivedDonations); // localReceivedDonations 값
  };

  //클릭하면 조공완료, localstorage 크레딧 줄어든다.//receiveDonation 충전된다.
  const onClickDonations = async () => {
    if (selectedDonation) {
      try {
        const newCredit = myCredit - value;
        handleCreditUpdate(newCredit);
        setMyCredit(newCredit);

        updateProgressbar();

        const newReceivedDonations = receivedDonations + value;

        await handleReceivedDonationsUpdate(newReceivedDonations); //localReceivedDonations를 newReceivedDonations로 업데이트
        sendPutRequest(selectedDonation, value); //서버에 put 요청

        setReceivedDonations(newReceivedDonations);
      } catch (error) {
        console.error("Failed to donate:", error);
      } finally {
        closeModal();
      }
    }
  };

  // const onClickDonations = () => {
  //   const newCredit = myCredit - value;
  //   setMyCredit(newCredit);
  //   handleCreditUpdate(newCredit);

  //   const newReceivedDonations = receivedDonations + value;

  //   setReceivedDonations(newReceivedDonations);
  //   console.log(receivedDonations);

  //   setTimeout(() => {
  //     handleReceivedDonationsUpdate(newReceivedDonations);
  //   }, 500);

  //   console.log(`${receivedDonations} + ${value}`);

  //   closeModal();
  // };

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEscapeModal();

  if (!isOpen) return null;

  return (
    <div className="donation-background" onClick={handleBackgroundClick}>
      <div
        className="donation-modal"
        style={{ height: errorMessage ? "529px" : "509px" }}
      >
        <div className="donation-header">
          <h2>후원하기</h2>
          <CloseButton onClick={closeModal} />
        </div>
        <img
          className="profile-picture"
          src={profilePicture}
          alt="아이돌 이미지"
        />
        <div className="subtitle">{subtitle}</div>
        <div className="title">{title}</div>
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
        {errorMessage && <p className="donation-input-error">{errorMessage}</p>}
        <button
          className={`button button_${buttonType}`}
          onClick={onClickDonations}
          disabled={!isDonationValid}
          aria-label="후원하기 버튼"
        >
          후원하기
        </button>
      </div>
    </div>
  );
}

export default DonationsModal;
