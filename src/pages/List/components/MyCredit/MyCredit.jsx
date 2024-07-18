import React, { useEffect, useContext } from "react";

import "./MyCredit.css";
import CreditIcon from "../../../../assets/images/donationCredit.png";
import { CreditContext } from "../../../../components/CreditContextProvider";
import CreditModal from "../CreditModal/CreditModal";

function MyCredit() {
  const { localCredit, isModalOpen, setIsModalOpen } =
    useContext(CreditContext);

  useEffect(() => {
    localStorage.setItem("myCredit", JSON.stringify(localCredit));
  }, [localCredit]);

  return (
    <div className="credit-container">
      <div className="credit-wrapper">
        <div className="credit-balance-wrapper">
          <p className="credit-title">내 크레딧</p>
          <div className="credit-balance">
            <img src={CreditIcon} alt="크레딧 아이콘" />
            <p>{localCredit.toLocaleString()}</p>
          </div>
        </div>
        <div className="credit-recharge-btn-container">
          <button
            className="credit-recharge-btn"
            onClick={() => setIsModalOpen(true)}
          >
            충전하기
          </button>
        </div>
      </div>
      {isModalOpen && <CreditModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}

export default MyCredit;
