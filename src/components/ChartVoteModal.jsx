import React, { useEffect, useState } from "react";
import "./ChartVoteModal.css";
import IdolDetail from "./IdolDetail";

function ChartVoteModal({ onClose, idolRank, gender }) {
  const [selectedRadio, setSelectedRadio] = useState(null);

  const handleRadioChange = (value) => {
    setSelectedRadio(value);
  };

  useEffect(() => {
    console.log(selectedRadio);
  }, [selectedRadio]);

  return (
    <div className="modal-overlay">
      <div className="chart-modal">
        <div className="modal-header">
          <h2>이달의 {gender === "female" ? "여자" : "남자"} 아이돌</h2>
          <button className="close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-content">
          <div className="ranking-list">
            {idolRank.map((idol) => (
              <IdolDetail
                key={idol.id}
                idolData={idol}
                isRadio={true}
                onRadioChange={handleRadioChange}
              />
            ))}
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-vote-btn">투표하기</button>
          <p>
            투표하는 데 <b>1000 크레딧</b>이 소모됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChartVoteModal;
