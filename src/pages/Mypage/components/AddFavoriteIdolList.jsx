import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';

import plusIcon from '../assets/images/ic_plus.svg';
import './AddFavoriteIdolList.css';

import useIdolData from '../hooks/useIdolData';
import useIdolChunks from '../hooks/useIdolChunks';

import LoadingBar from '../../../components/Loadingbar';
import AddIdolListItemButton from './AddIdolListItemButton';

function AddFavoriteIdolList({ myFavoriteIdolList, setMyFavoriteIdolList }) {
  const { idolData, isLoading = true } = useIdolData();
  const idolChunks = useIdolChunks(idolData);

  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    const handleWindowResize = () => {
      setShowArrow(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: showArrow,
  };

  // 특정 아이돌이 선택되었는지 여부를 { 아이디 : 선택 여부 }로 이루어진 객체로 저장
  const [isSelected, setIsSelected] = useState({});
  const [selectedIdolList, setSelectedIdolList] = useState([]);

  const handleSelectIdolButtonClick = (idolId) => {
    // 새로 선택된 아이돌의 선택 여부를 -> 이전 선택 여부의 반대로 만듦
    setIsSelected((prevSelected) => ({
      ...prevSelected,
      [idolId]: !prevSelected[idolId],
    }));

    const selected = !isSelected[idolId];

    const updatedIdolList = selected
      ? [...selectedIdolList, idolData.find((idol) => idol.id === idolId)]
      : selectedIdolList.filter((idol) => idol.id !== idolId);

    setSelectedIdolList(updatedIdolList);
  };

  const handleAddIdolButtonClick = () => {
    const existingLocalStorageData = myFavoriteIdolList || [];
    // 리스트에 이미 존재하는 아이돌 제거하기 -> 선택한 아이돌 중에서, 이미 존재하는 아이돌의 아이디와 다른 아이돌만 반환
    const filteredSelectedIdolList = selectedIdolList.filter(
      (idol) => !existingLocalStorageData.some((existingIdol) => existingIdol.id === idol.id),
    );
    const updatedLocalStorageData = [...existingLocalStorageData, ...filteredSelectedIdolList];

    setMyFavoriteIdolList(updatedLocalStorageData);

    setIsSelected({});
    setSelectedIdolList([]);
  };

  if (isLoading) {
    return (
      <div className="add-favorite-idol-list-wrapper">
        <LoadingBar />
      </div>
    );
  }

  return (
    <>
      <div className="add-favorite-idol-list-wrapper">
        <Slider
          slidesToShow={sliderSettings.slidesToShow}
          slidesToScroll={sliderSettings.slidesToScroll}
          infinite={sliderSettings.infinite}
          arrows={sliderSettings.arrows}
        >
          {idolChunks.map((idolChunk, idolChunkIndex) => {
            return (
              <AddIdolListItemButton
                key={idolChunkIndex}
                idolChunk={idolChunk}
                onClick={handleSelectIdolButtonClick}
                isSelected={isSelected}
              />
            );
          })}
        </Slider>
      </div>
      <button
        className="add-favorite-idol-button"
        type="button"
        aria-label="관심 있는 아이돌 추가 버튼"
        onClick={handleAddIdolButtonClick}
      >
        <img className="button-plus-icon" src={plusIcon} alt="plus icon" />
        추가하기
      </button>
    </>
  );
}

export default AddFavoriteIdolList;
