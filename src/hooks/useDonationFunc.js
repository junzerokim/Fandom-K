import { useState, useEffect } from "react";

const useDonationFunc = (
  selectedDonation,
  setSelectedDonation,
  localCredit,
  setLocalReceivedDonations,
  fetchData,
) => {
  const [showDonationsModal, setShowDonationsModal] = useState(false);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false);

  const openLackOfCreditModal = () => setShowLackOfCreditModal(true);

  const openDonationsModal = (donation) => {
    setSelectedDonation(donation);
    setShowDonationsModal(true);
  };

  useEffect(() => {
    if (selectedDonation)
      setLocalReceivedDonations(selectedDonation.receivedDonations);
  }, [selectedDonation.id]);

  const openModal = (donation) => {
    if (localCredit <= 0) openLackOfCreditModal();
    else openDonationsModal(donation);
  };

  const closeModal = () => {
    if (showDonationsModal) setShowDonationsModal(false);
    setShowLackOfCreditModal(false);
  };

  const updateProgressbar = () => {
    fetchData(true);
  };

  return {
    showDonationsModal,
    showLackOfCreditModal,
    openModal,
    closeModal,
    updateProgressbar,
  };
};

export default useDonationFunc;
