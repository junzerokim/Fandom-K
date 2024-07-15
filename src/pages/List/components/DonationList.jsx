import React, { useState } from 'react';
import Slider from 'react-slick';

import calculateTime from '../../../utils/deadline';
import formatNumber from '../../../utils/formatNumber';
import Loadingbar from '../../../components/Loadingbar';

import './DonationList.css';

import useDonationList from '../../../hooks/useDonationList';
import DonationsModal from '../../../components/DonationsModal/DonationsModal';

function DonationsList() {
  const { donations, loading } = useDonationList();
  const [showDonationsModal, setShowDonationsModal] = useState(false);
  const [selectedDonation, setSelectedDonation] = useState(null);

  if (loading) {
    return (
      <div className="donation">
        <h3>후원을 기다리는 조공</h3>
        <div className="donation-wrap">
          <Loadingbar />
        </div>
      </div>
    );
  }

  const openDonationsModal = (donation) => {
    setSelectedDonation(donation);
    setShowDonationsModal(true);
  };

  const closeModal = () => {
    setSelectedDonation(null);
    setShowDonationsModal(false);
  };

  const sliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="donation">
      <h3>후원을 기다리는 조공</h3>
      <div className="donation-wrap slider-container">
        <Slider
          slidesToShow={sliderSettings.slidesToShow}
          slidesToScroll={sliderSettings.slidesToScroll}
          infinite={sliderSettings.infinite}
          responsive={sliderSettings.responsive}
          className="donation-list"
        >
          {donations.map((donation) => (
            <div className="donation-card" key={donation.id}>
              <div className="img-wrap">
                <img src={donation.idol.profilePicture} alt={donation.title} />
                <button type="button" onClick={() => openDonationsModal(donation)} aria-label="후원하기 버튼">
                  후원하기
                </button>
              </div>
              <div className="info">
                <span className="place">{donation.subtitle}</span>
                <h4 className="title">{donation.title}</h4>
                <div className="progress">
                  <div className="progress-info">
                    <div className="credit">
                      <i className="icon-credit" />
                      {formatNumber(donation.targetDonation)}
                    </div>
                    <div className="deadline">{calculateTime(donation.deadline)}</div>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="percent"
                      style={{ width: `${(donation.receivedDonations / donation.targetDonation) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {showDonationsModal && (
          <DonationsModal
            profilePicture={selectedDonation.idol.profilePicture}
            subtitle={selectedDonation.subtitle}
            title={selectedDonation.title}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
}

export default DonationsList;
