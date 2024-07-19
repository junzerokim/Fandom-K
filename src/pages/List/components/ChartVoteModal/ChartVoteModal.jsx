import React, { useContext } from "react";

import "./ChartVoteModal.css";
import useChartVoteHandler from "../../../../hooks/useChartVoteHandler";
import useEscapeModal from "../../../../hooks/useEscapeModal";

import { CreditContext } from "../../../../components/CreditContextProvider";
import IdolDetail from "../IdolDetail";

function ChartVoteModal({ closeModal, idolRank, gender, updateIdolRank }) {
  const { handleCreditUpdate, localCredit } = useContext(CreditContext);
  const { selectedIdolId, handleIdolRadioClick, handleVoteButtonClick } =
    useChartVoteHandler(
      closeModal,
      idolRank,
      updateIdolRank,
      handleCreditUpdate,
      localCredit
    );
  useEscapeModal(closeModal);

  return (
    <div className="modal-overlay">
      <div className="modal modal-chart">
        <div className="modal-header">
          <h4 className="title">
            이달의 {gender === "female" ? "여자" : "남자"} 아이돌
          </h4>
          <button
            type="button"
            className="btn-close"
            onClick={closeModal}
            aria-label="모달 닫기 버튼"
          >
            <i className="btn-md icon-btn-close" />
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
          <button
            type="button"
            className="btn-primary"
            onClick={handleVoteButtonClick}
            aria-label="투표하기 버튼"
          >
            투표하기
          </button>
          <p>
            투표하는 데 <span>1000 크레딧</span>이 소모됩니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChartVoteModal;
