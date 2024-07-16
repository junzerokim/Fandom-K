import React, { useState } from 'react';
import './ThisMonthsChart.css';
import IdolDetail from './IdolDetail';
// import ChartVoteModal from './ChartVoteModal';
import useIdolChart from '../hooks/useIdolChart';

function ThisMonthsChart() {
  const [activeTab, setActiveTab] = useState('female');
  const { idolRank, loading, fetchError } = useIdolChart(activeTab);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const openGenderVoteModal = () => {
    // setIsModalOpen(true);
  };

  // const closeModal = () => {
  // setIsModalOpen(false);
  // };

  const tab = (gender) => {
    setActiveTab(gender);
  };

  return (
    <div className="chart">
      <div className="chart-header">
        <h3>이달의 차트</h3>
        <button type="button" aria-label="차트 투표하기" className="btn-modal-open" onClick={openGenderVoteModal}>
          <i className="icon-chart" />
          차트 투표하기
        </button>
      </div>
      <div className="chart-tab">
        <button
          type="button"
          className={`chart-tab-button ${activeTab === 'female' ? 'active' : ''}`}
          onClick={() => tab('female')}
        >
          이달의 여자 아이돌
        </button>
        <button
          type="button"
          className={`chart-tab-button ${activeTab === 'male' ? 'active' : ''}`}
          onClick={() => tab('male')}
        >
          이달의 남자 아이돌
        </button>
      </div>
      <ul className="ranking-list">
        {loading && <div>Loading...</div>}
        {fetchError && <div>Error loading data</div>}
        {idolRank.map((idol) => (
          <IdolDetail
            key={idol.id}
            profilePicture={idol.profilePicture}
            rank={idol.rank}
            group={idol.group}
            name={idol.name}
            totalVotes={idol.totalVotes}
          />
        ))}
      </ul>
      <button className="btn-more" type="button" aria-label="더보기 버튼">
        더 보기
      </button>
      {/* {isModalOpen && <ChartVoteModal closeModal={closeModal} />} */}
    </div>
  );
}

export default ThisMonthsChart;
