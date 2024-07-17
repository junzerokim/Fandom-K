import "./CreditModal.css";
import { useState } from "react";
import CreditIcon from "../assets/images/ico_credit.png";
import CreditWhiteIcon from "../assets/images/ico_credit.svg";
import { CreditContext } from "../pages/List/List";

function CreditModal({ onClose }) {
  const { handleRecharge } = useContext(CreditContext);
  const [selectedCredit, setSelectedCredit] = useState(100);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>크레딧 충전하기</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">
          <label className="radio-label">
            <div className="radio-credit-wrapper">
              <img src={CreditIcon} alt="Credit Icon" />
              100
            </div>
            <input
              type="radio"
              value={100}
              checked={selectedCredit === 100}
              onChange={(e) => setSelectedCredit(Number(e.target.value))}
            />
          </label>
          <label className="radio-label">
            <div className="radio-credit-wrapper">
              <img src={CreditIcon} alt="Credit Icon" />
              500
            </div>
            <input
              type="radio"
              value={500}
              checked={selectedCredit === 500}
              onChange={(e) => setSelectedCredit(Number(e.target.value))}
            />
          </label>
          <label className="radio-label">
            <div className="radio-credit-wrapper">
              <img src={CreditIcon} alt="Credit Icon" />
              1000
            </div>
            <input
              type="radio"
              value={1000}
              checked={selectedCredit === 1000}
              onChange={(e) => setSelectedCredit(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="modal-footer">
          <button onClick={() => handleRecharge(selectedCredit)}>
            <img src={CreditWhiteIcon} />
            충전하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreditModal;
