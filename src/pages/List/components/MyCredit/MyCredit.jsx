import React, { useEffect, useContext } from "react";

import "./MyCredit.css";
import { CreditContext } from "../../../../components/CreditContextProvider";
import CreditModal from "../CreditModal/CreditModal";

function MyCredit() {
  const { localCredit, isModalOpen, setIsModalOpen } =
    useContext(CreditContext);

  useEffect(() => {
    localStorage.setItem("myCredit", JSON.stringify(localCredit));
  }, [localCredit]);

  return (
    <section className="section credit">
      <div className="credit-wrap">
        <div className="credit-balance-group">
          <p className="credit-title">내 크레딧</p>
          <div className="credit-balance">
            <i className="icon-md icon-credit" />
            {localCredit.toLocaleString()}
          </div>
        </div>
        <button
          type="button"
          className="btn-credit-recharge"
          onClick={() => setIsModalOpen(true)}
        >
          충전하기
        </button>
      </div>
      {isModalOpen && <CreditModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default MyCredit;
