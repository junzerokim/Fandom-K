import React from 'react';
import Header from '../../components/Header';
import DonationsList from './components/DonationList';
import ThisMonthsChart from '../../components/ThisMonthsChart';
function List() {
  return (
    <>
      <Header />
      <DonationsList />
      <ThisMonthsChart />
    </>
  );
}

export default List;
