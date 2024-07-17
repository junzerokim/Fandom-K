import './CreditModal.css';
import { useState } from 'react';
import CreditIcon from '../assets/images/donations_credit.svg';
import CreditWhiteIcon from '../assets/images/ico_credit.svg';
function CreditModal({ onClose, onRecharge }) {
  const [selectedCredit, setSelectedCredit] = useState(100);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>크레딧 충전하기</h2>
          <button className="close-btn" onClick={onClose}>X</button>
        </div>
        <div className="modal-content">
          <label className="radio-label">
            <div className="radio-credit-wrapper">
              <img src={CreditIcon} alt="Credit Icon" /> {/* alt 속성 추가 */}
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
              <img src={CreditIcon} alt="Credit Icon" /> {/* alt 속성 추가 */}
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
              <img src={CreditIcon} alt="Credit Icon" /> {/* alt 속성 추가 */}
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
          <button onClick={() => onRecharge(selectedCredit)}>
            <img src={CreditWhiteIcon} />
            충전하기
            </button>
        </div>
      </div>
    </div>
  );
}

export default CreditModal;
