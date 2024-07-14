import React, { useState } from 'react';
import DonationsList from './DonationsList';
import DonationsModal from './DonationsModal';

function ListPage() {
  const [showDonationsModal, setShowDonationsModal] = useState(false);
  const [selectedIdol, setSelectedIdol] = useState(null);

  // 모달 열기
  const openDonationsModal = (idol) => {
    setSelectedIdol(idol);
    setShowDonationsModal(true);
  };

  // 모달 닫기
  const closeModal = () => {
    setSelectedIdol(null);
    setShowDonationsModal(false);
  };

  return (
    <div className="ListPage">
      <DonationsList idols={idols} donations={donations} />
      {showDonationsModal && <DonationsModal idol={selectedIdol} closeModal={closeModal} />}
    </div>
  );
}

export default ListPage;
