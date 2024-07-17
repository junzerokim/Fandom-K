import React, { useState } from "react";
import Header from "../../components/Header";
import DonationsList from "./components/DonationList";
import ThisMonthsChart from "../../components/ThisMonthsChart";
import MyCredit from "../../components/MyCredit";

export const CreditContext = React.createContext();

function List() {
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

    console.log(selectedDonation);
  };

  const handleRecharge = (amount) => {
    setLocalCredit(localCredit + amount);
    setIsModalOpen(false);
  };

  return (
    <>
      <CreditContext.Provider
        value={{
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
        }}
      >
        <Header />
        <MyCredit />
        <DonationsList />
        <ThisMonthsChart />
      </CreditContext.Provider>
    </>
  );
}

export default List;
