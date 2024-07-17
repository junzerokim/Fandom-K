import React, { createContext } from "react";
import Header from "../../components/Header";
import DonationsList from "./components/DonationList";
import ThisMonthsChart from "../../components/ThisMonthsChart";
import MyCredit from "../../components/MyCredit";

export const CreditContext = createContext();

function List() {
  const [selectedDonation, setSelectedDonation] = useState({});
  const [localCredit, setLocalCredit] = useState(initialCredit());
  const [localReceivedDonations, setLocalReceivedDonations] = useState();

  const initialCredit = () => {
    const storedCredit = JSON.parse(localStorage.getItem("myCredit"));
    return storedCredit ? storedCredit : 0;
  };

  const handleCreditUpdate = (newCredit) => {
    setLocalCredit(newCredit);
    localStorage.setItem("myCredit", newCredit.toString());
  };

  const handleRecharge = (amount) => {
    setCredit(localCredit + amount);
    setIsModalOpen(false);
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

  return (
    <>
      <UserContext.Provider
        value={{
          localCredit,
          localReceivedDonations,
          handleCreditUpdate,
          handleReceivedDonationsUpdate,
          handleRecharge,
          selectedDonation,
          setSelectedDonation,
          localReceivedDonations,
          setLocalReceivedDonations,
        }}
      >
        <Header />
        <MyCredit />
        <DonationsList />
        <ThisMonthsChart />
      </UserContext.Provider>
    </>
  );
}

export default List;
