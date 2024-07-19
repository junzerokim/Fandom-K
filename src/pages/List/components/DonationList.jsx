import React, { useState, useMemo, useEffect, useContext } from "react";
import Slider from "react-slick";

import calculateTime from "../../../utils/calculateTime";
import formatNumber from "../../../utils/formatNumber";
import LoadingBar from "../../../components/Loadingbar";

import "./DonationList.css";

import useDonationList from "../../../hooks/useDonationList";
import DonationsModal from "./DonationsModal/DonationsModal";
import LackOfCreditModal from "./LackOfCreditModal/LackOfCreditModal";
import { CreditContext } from "../../../components/CreditContextProvider";

function DonationsList() {
  const {
    selectedDonation,
    setSelectedDonation,
    localCredit,
    localReceivedDonations,
    setLocalReceivedDonations,
  } = useContext(CreditContext);
  const { donations, loading, fetchData } = useDonationList();
  const [showDonationsModal, setShowDonationsModal] = useState(false);
  const [showLackOfCreditModal, setShowLackOfCreditModal] = useState(false);

  const openLackOfCreditModal = () => setShowLackOfCreditModal(true);

  const openDonationsModal = (donation) => {
    setSelectedDonation(donation);
    setShowDonationsModal(true);
    console.log(localReceivedDonations);
  };

  useEffect(() => {
    if (selectedDonation) {
      setLocalReceivedDonations(selectedDonation.receivedDonations);
      console.log(selectedDonation);
    }
    console.log("값:", selectedDonation);
  }, [selectedDonation.id, localReceivedDonations, selectedDonation]); // selectedDonation이 있으면 바꿔줌 selectedDonation이 바뀔때마다

  const openModal = (donation) => {
    if (localCredit <= 0) {
      openLackOfCreditModal();
      console.log("크레딧 없음");
    } else if (donation.receivedDonations >= donation.targetDonation) {
      console.log("목표 후원이 이미 달성되었습니다.");
    } else {
      openDonationsModal(donation);

      console.log("모달 열림 선택된 후원:", selectedDonation);
      console.log("receivedDonation 값:", localReceivedDonations);
      console.log("테스트");
    }
  };

  const updateProgressbar = () => {
    fetchData(true);
  };

  const closeModal = () => {
    if (showDonationsModal) {
      setShowDonationsModal(false);

      console.log(selectedDonation);
      console.log("newReceivedDonations 값:", localReceivedDonations);
    }
    setShowLackOfCreditModal(false);
  };

  const sliderSettings = useMemo(
    () => ({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 1,
          },
        },
      ],
    }),
    []
  );

  if (loading) {
    return (
      <div className="donation">
        <h3>후원을 기다리는 조공</h3>
        <div className="donation-wrap">
          <LoadingBar />
        </div>
      </div>
    );
  }

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
                <button
                  type="button"
                  onClick={() => {
                    openModal(donation);
                  }}
                  disabled={
                    donation.receivedDonations >= donation.targetDonation
                  }
                >
                  후원하기
                </button>
              </div>
              <div className="info">
                <span className="place">{donation.subtitle}</span>
                <h4 className="title">{donation.title}</h4>
                <div className="progress">
                  <div className="progress-info">
                    <div className="credit">
                      <i className="icon icon-credit" />
                      {formatNumber(donation.targetDonation)}
                    </div>
                    <div className="deadline">
                      {calculateTime(donation.deadline)}
                    </div>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="percent"
                      style={{
                        width: `${(donation.receivedDonations / donation.targetDonation) * 100}%`,
                      }}
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
            isOpen={showDonationsModal}
            updateProgressbar={updateProgressbar}
          />
        )}
        {showLackOfCreditModal && <LackOfCreditModal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default DonationsList;
