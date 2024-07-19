import { useState } from "react";
import useIdolData from "./useIdolData";
import usePageResize from "./usePageResize";

const useChartFunc = (localCredit) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false);
  const [activeTab, setActiveTab] = useState("female");

  const { fetchIdolsData } = useIdolData(activeTab);
  const { pageSize, displayCount, setDisplayCount } = usePageResize();

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
    tab,
    openModal,
    closeModal,
    updateIdolRank,
    loadMore,
  };
};

export default useChartFunc;
