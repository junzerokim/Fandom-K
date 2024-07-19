import React, { useState, useContext } from "react";
import "./CreditModal.css";
import { CreditContext } from "../../../../components/CreditContextProvider";

function CreditModal({ onClose }) {
  const { handleRecharge } = useContext(CreditContext);
  const [selectedCredit, setSelectedCredit] = useState(100);

  const creditOptions = [100, 500, 1000];

  return (
    <div className="modal-overlay">
      <div className="modal modal-credit-recharge">
        <div className="modal-header">
          <h4 className="title">크레딧 충전하기</h4>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="삭제 버튼"
          >
            <i className="btn-close" />
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
                <i className="icon-md icon-credit" />
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
          <button
            type="button"
            className="btn-primary"
            onClick={() => handleRecharge(selectedCredit)}
            aria-label="충전하기 버튼"
          >
            <i className="icon-md icon-credit-white" />
            충전하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditModal;
