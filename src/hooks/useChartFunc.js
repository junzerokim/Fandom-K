import { useState } from "react";
import useIdolData from "./useIdolData";

const useChartFunc = (localCredit, getPageSize) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false);
  const [activeTab, setActiveTab] = useState("female");
  const [pageSize, setPageSize] = useState(getPageSize());
  const [displayCount, setDisplayCount] = useState(pageSize);
  const { fetchIdolsData } = useIdolData(activeTab);

  const tab = (gender) => {
    setActiveTab(gender);
    setDisplayCount(pageSize);
  };

  const openModal = () => {
    if (localCredit < 1000) setShowLackOfCreditModal(true);
    else setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowLackOfCreditModal(false);
  };

  const updateIdolRank = () => {
    fetchIdolsData(true);
  };

  const loadMore = () => {
    setDisplayCount((prevCount) => prevCount + pageSize);
  };

  return {
    isModalOpen,
    showLackOfCreditModal,
    activeTab,
    displayCount,
    setPageSize,
    setDisplayCount,
    tab,
    openModal,
    closeModal,
    updateIdolRank,
    loadMore,
  };
};

export default useChartFunc;
