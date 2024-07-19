import { useEffect, useState } from "react";
import putDonations from "../service/putApi";

const useDonationHandler = (
  handleCreditUpdate,
  handleReceivedDonationsUpdate,
  localReceivedDonations,
  localCredit,
  selectedDonation,
  updateProgressbar,
  closeModal
) => {
  const [value, setValue] = useState("");
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
      setErrorMessage("");
      setIsDonationValid(false);
    } else {
      const numericValue = parseInt(inputValue, 10);
      const isValueExceedsCredit = numericValue > myCredit;
      const isDonationExceedsGoal =
        selectedDonation.receivedDonations + numericValue >
        selectedDonation.targetDonation;

      if (isValueExceedsCredit) {
        setErrorMessage("갖고 있는 크레딧보다 더 많이 후원할 수 없어요");
        setIsDonationValid(false);
      } else if (isDonationExceedsGoal) {
        setErrorMessage("후원 금액이 목표 금액을 초과합니다");
        setIsDonationValid(false);
      } else {
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
        console.error("후원하기 중 오류 발생:", error);
      } finally {
        closeModal();
      }
    }
  };

  return {
    value,
    errorMessage,
    isDonationValid,
    handleInputChange,
    onClickDonations,
  };
};

export default useDonationHandler;
