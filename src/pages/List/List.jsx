import React from 'react';
import Header from '../../components/Header';
import DonationsList from './components/DonationList';
import ThisMonthsChart from '../components/ThisMonthsChart';
import MyCredit from '../components/MyCredit';

function List() {
  return (
    <>
      <Header />
      <MyCredit />
      <DonationsList />
      <ThisMonthsChart />
    </>
  );
}

export default List;
