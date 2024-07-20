import React, { useState, useEffect } from "react";
import "./ChartVoteModal.css";
import IdolDetail from "../IdolDetail";

function ChartVoteModal({ closeModal, idolRank, gender }) {
  const [selectedIdolId, setSelectedIdolId] = useState(null);

  useEffect(() => {
    if (idolRank.length > 0) {
      setSelectedIdolId(idolRank[0].id);
    }
  }, [idolRank, gender]);

  const handleIdolRadioClick = (idolId) => {
    setSelectedIdolId(idolId);
  };

  const handleVoteButtonClick = async () => {
    if (selectedIdolId) {
      console.log(`Voted for idol with id: ${selectedIdolId}`);
      // Handle vote logic here
    }
    console.log("Voted!");
  };

  return (
    <div className="modal-overlay">
      <div className="chart-modal">
        <div className="modal-header">
          <h2>이달의 {gender === "female" ? "여자" : "남자"} 아이돌</h2>
          <button
            className="close-btn"
            onClick={closeModal}
            aria-label="모달 닫기 버튼"
          >
            <i className="icon-btn-close" />
          </button>
        </div>
        <div className="modal-content">
          {idolRank.map((idol) => (
            <IdolDetail
              key={idol.id}
              idolData={idol}
              isNeedRadio
              isSelected={selectedIdolId === idol.id}
              onRadioChange={() => handleIdolRadioClick(idol.id)}
            />
          ))}
        </div>
        <div className="modal-footer">
          <button className="modal-vote-btn" onClick={handleVoteButtonClick}>
            투표하기
          </button>
          <p>
            투표하는 데 <b>1000 크레딧</b>이 소모됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChartVoteModal;
