import './MyCredit.css';
import CreditIcon from '../assets/images/donations_credit.svg';
function MyCredit() {

  return (
  <div className="credit-container">
    <div className="credit-wrapper">
      <div className="credit-balance-wrapper">
        <p className="credit-title">내 크레딧</p>
        <div className="credit-balance">
          <img src={CreditIcon} alt="크레딧 아이콘" />
          <p>36,000</p>
          </div>
      </div>
    
    
    <div className="credit-recharge-btn-conainer">
      <button>
      충전하기
      </button>
    </div>
    </div>
  </div>
  );
}

export default MyCredit;