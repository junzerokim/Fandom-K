import React from "react";

import Header from "../../components/Header";
import DonationsList from "./components/DonationList";
import ThisMonthsChart from "./components/ThisMonthsChart/ThisMonthsChart";
import MyCredit from "./components/MyCredit/MyCredit";
import CreditContextProvider from "../../components/CreditContextProvider";

function List() {
  return (
    <>
      <Header />
      <CreditContextProvider>
        <MyCredit />
        <DonationsList />
        <ThisMonthsChart />
      </CreditContextProvider>
    </>
  );
}

export default List;
