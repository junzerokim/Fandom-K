import React, { useState, useMemo } from "react";

export const CreditContext = React.createContext();

function CreditContextProvider({ children }) {
  const initialCredit = () => {
    const storedCredit = JSON.parse(localStorage.getItem("myCredit"));
    return storedCredit ? storedCredit : 0;
  };

  const [selectedDonation, setSelectedDonation] = useState({});
  const [localCredit, setLocalCredit] = useState(initialCredit());
  const [localReceivedDonations, setLocalReceivedDonations] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreditUpdate = (newCredit) => {
    setLocalCredit(newCredit);
    localStorage.setItem("myCredit", newCredit.toString());
  };

  const handleReceivedDonationsUpdate = (newReceivedDonations) => {
    setLocalReceivedDonations(newReceivedDonations);
    //객체의 속성 업데이트
    setSelectedDonation((prevSelectedDonation) => ({
      ...prevSelectedDonation,
      receivedDonations: newReceivedDonations,
    }));
    localStorage.setItem("selectedDonation", JSON.stringify(selectedDonation));
  };

  const handleRecharge = (amount) => {
    setLocalCredit(localCredit + amount);
    setIsModalOpen(false);
  };

  const contextValue = useMemo(() => {
    return {
      localCredit,
      localReceivedDonations,
      setLocalReceivedDonations,
      handleCreditUpdate,
      handleReceivedDonationsUpdate,
      handleRecharge,
      selectedDonation,
      setSelectedDonation,
      isModalOpen,
      setIsModalOpen,
    };
  }, [localCredit, localReceivedDonations, selectedDonation, isModalOpen]);

  return (
    <>
      <CreditContext.Provider value={contextValue}>
        {children}
      </CreditContext.Provider>
    </>
  );
}

export default CreditContextProvider;
