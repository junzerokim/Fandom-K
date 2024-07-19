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
        <main>
          <MyCredit />
          <DonationsList />
          <ThisMonthsChart />
        </main>
      </CreditContextProvider>
    </>
  );
}

export default List;
