import React, { useState, useContext } from "react";

import "./CreditModal.css";
import CreditIcon from "../../../../assets/images/ico_credit_gradation.png";
import CreditWhiteIcon from "../../../../assets/images/ico_credit_white.svg";

import { CreditContext } from "../../../../components/CreditContextProvider";

function CreditModal({ onClose }) {
  const { handleRecharge } = useContext(CreditContext);
  const [selectedCredit, setSelectedCredit] = useState(100);

  const creditOptions = [100, 500, 1000];

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>크레딧 충전하기</h2>
          <button className="close-btn" onClick={onClose}>
            <i className="button-close" aria-label="삭제 이미지" />
          </button>
        </div>
        <div className="modal-content">
          {creditOptions.map((credit) => (
            <label
              key={credit}
              className={`radio-label ${selectedCredit === credit ? "selected" : ""}`} // 선택된 라디오 버튼에 클래스 추가
              htmlFor={`credit-${credit}`}
            >
              <div className="radio-credit-wrapper">
                <img src={CreditIcon} alt="Credit Icon" />
                {credit}
              </div>
              <input
                type="radio"
                id={`credit-${credit}`}
                value={credit}
                checked={selectedCredit === credit}
                onChange={(e) => setSelectedCredit(Number(e.target.value))}
              />
            </label>
          ))}
        </div>
        <div className="modal-footer">
          <button onClick={() => handleRecharge(selectedCredit)}>
            <img src={CreditWhiteIcon} alt="Credit Icon" />
            충전하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditModal;
