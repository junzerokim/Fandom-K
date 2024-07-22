import { useCallback, useEffect, useState, useMemo } from 'react';
import putDonations from '../api/putApi';

const useDonationHandler = (
  handleCreditUpdate,
  myReceivedDonations,
  localCredit,
  selectedDonation,
  updateProgressbar,
  closeModal,
) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [myCredit, setMyCredit] = useState(localCredit);
  const [receivedDonations, setReceivedDonations] = useState(myReceivedDonations);
  const [isDonationValid, setIsDonationValid] = useState(false);

  useEffect(() => {
    setMyCredit(localCredit);
    setReceivedDonations(myReceivedDonations);
  }, [localCredit, myReceivedDonations]);

  const validateDonation = useCallback(({ isValueExceedsCredit, isDonationExceedsGoal }) => {
    if (!isValueExceedsCredit && !isDonationExceedsGoal) {
      setErrorMessage('');
      setIsDonationValid(true);

      return;
    }
    const message = isValueExceedsCredit
      ? '갖고 있는 크레딧보다 더 많이 후원할 수 없어요'
      : '후원 금액이 목표 금액을 초과합니다';
    setErrorMessage(message);
    setIsDonationValid(false);
  }, []);

  const handleInputChange = useCallback(
    (e) => {
      const inputValue = e.target.value.trim();
      setValue(inputValue);

      if (inputValue === '') {
        setErrorMessage('');
        setIsDonationValid(false);

        return;
      }
      const numericValue = parseInt(inputValue, 10);
      const isValueExceedsCredit = numericValue > myCredit;
      const isDonationExceedsGoal = selectedDonation.receivedDonations + numericValue > selectedDonation.targetDonation;

      validateDonation({ isValueExceedsCredit, isDonationExceedsGoal });
    },
    [myCredit, selectedDonation.receivedDonations, selectedDonation.targetDonation, validateDonation],
  );

  const onClickDonations = useCallback(async () => {
    if (selectedDonation) {
      try {
        const newCredit = myCredit - value;
        handleCreditUpdate(newCredit);
        setMyCredit(newCredit);

        const newReceivedDonations = receivedDonations + value;
        await putDonations(selectedDonation, value);
        setReceivedDonations(newReceivedDonations);
        updateProgressbar();
      } catch (error) {
        console.error('후원하기 중 오류 발생:', error);
      } finally {
        closeModal();
      }
    }
  }, [myCredit, value, receivedDonations, selectedDonation, handleCreditUpdate, updateProgressbar, closeModal]);

  return useMemo(
    () => ({
      value,
      errorMessage,
      isDonationValid,
      handleInputChange,
      onClickDonations,
    }),
    [value, errorMessage, isDonationValid, handleInputChange, onClickDonations],
  );
};

export default useDonationHandler;
