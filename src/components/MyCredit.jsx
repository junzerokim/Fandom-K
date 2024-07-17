import React from 'react';
import './MyCredit.css';
import CreditIcon from '../assets/images/donationCredit.png';
import { useState, useEffect } from 'react';
import CreditModal from './CreditModal';

function MyCredit() {
  const initialCredit = () => {
    const storedCredit = localStorage.getItem('myCredit');
    return storedCredit ? JSON.parse(storedCredit) : 0;
  };

  const [credit, setCredit] = useState(initialCredit);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('myCredit', JSON.stringify(credit));
  }, [credit]);

  const handleRecharge = (amount) => {
    setCredit(credit + amount);
    setIsModalOpen(false);
  };

  return (
    <div className="credit-container">
      <div className="credit-wrapper">
        <div className="credit-balance-wrapper">
          <p className="credit-title">내 크레딧</p>
          <div className="credit-balance">
            <img src={CreditIcon} alt="크레딧 아이콘" />
            <p>{credit.toLocaleString()}</p>
          </div>
        </div>
        <div className="credit-recharge-btn-container">
          <button className="credit-recharge-btn" onClick={() => setIsModalOpen(true)}>충전하기</button>
        </div>
      </div>
      {isModalOpen && <CreditModal onClose={() => setIsModalOpen(false)} onRecharge={handleRecharge} />}
    </div>
  );
}

export default MyCredit;