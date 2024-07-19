import { useState, useEffect } from "react";
import postVotes from "../service/postApi";

const useChartVoteHandler = (
  closeModal,
  idolRank,
  updateIdolRank,
  handleCreditUpdate,
  localCredit,
) => {
  const [selectedIdolId, setSelectedIdolId] = useState(null);
  const [myCredit, setMyCredit] = useState(localCredit);

  useEffect(() => {
    setMyCredit(localCredit);

    if (idolRank.length > 0) {
      setSelectedIdolId(idolRank[0].id);
    }
  }, [idolRank, localCredit]);

  const handleIdolRadioClick = (idolId) => {
    setSelectedIdolId(idolId);
  };

  const handleVoteButtonClick = async () => {
    if (selectedIdolId) {
      try {
        await postVotes(selectedIdolId);
        updateIdolRank();

        const newCredit = myCredit - 1000;
        handleCreditUpdate(newCredit);
        setMyCredit(newCredit);
      } catch (error) {
        console.error("차트 투표하기 중 오류 발생:", error);
      } finally {
        closeModal();
      }
    }
  };

  return { selectedIdolId, handleIdolRadioClick, handleVoteButtonClick };
};

export default useChartVoteHandler;
