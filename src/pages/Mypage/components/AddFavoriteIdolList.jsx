import React, { useState } from 'react';
import Slider from 'react-slick';
import useIdolData from '../hooks/useIdolData';

import plusIcon from '../assets/images/ic_plus.svg';
import './AddFavoriteIdolList.css';

import LoadingBar from '../../../components/Loadingbar';
// import AddIdolListItem from './AddIdolListItem';
import AddIdolListItemButton from './AddIdolListItemButton';

function AddFavoriteIdolList({ myFavoriteIdolList, setMyFavoriteIdolList }) {
  const { idolData, isLoading = true } = useIdolData(); // 기본 아이돌 데이터

  // 해당 인덱스의 아이돌이 선택되었는지 여부를 저장
  const [isSelected, setIsSelected] = useState(new Array(idolData.length).fill(false));
  // 선택된 아이돌 리스트 -> add 버튼이 눌리면 로컬 스토리지에 추가하고, 해당 리스트는 초기화
  const [selectedIdolList, setSelectedIdolList] = useState([]);

  const handleSelectIdolButtonClick = (id, index) => {
    const updatedSelection = [...isSelected];
    updatedSelection[index] = !updatedSelection[index];

    setIsSelected(updatedSelection);

    const updatedIdolList = updatedSelection[index]
      ? [...selectedIdolList, idolData.find((idol) => idol.id === id)]
      : selectedIdolList.filter((idol) => idol.id !== id);

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

    setSelectedIdolList([]);
    setIsSelected(new Array(idolData.length).fill(false));
  };

  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 8,
    //       slidesToScroll: 8,
    //     },
    //   },
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 6,
    //       slidesToScroll: 6,
    //     },
    //   },
    // ],
    prevArrow: <button className="slick-prev" aria-label="Previous slide" />,
    nextArrow: <button className="slick-next" aria-label="Next slide" />,
  };

  if (isLoading) {
    return (
      <div className="add-favorite-idol-list-wrapper">
        <LoadingBar />
      </div>
    );
  }

  // 아이돌 데이터를 n개씩 그룹화하는 함수
  const idolChunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const idolChunks = idolChunkArray(idolData, 16);

  return (
    <>
      <div className="my-page">
        <Slider
          slidesToShow={sliderSettings.slidesToShow}
          slidesToScroll={sliderSettings.slidesToScroll}
          infinite={sliderSettings.infinite}
          responsive={sliderSettings.responsive}
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
        aria-label="Add Favorite Idol Button"
        onClick={handleAddIdolButtonClick}
      >
        <img className="button-plus-icon" src={plusIcon} alt="plus icon" />
        추가하기
      </button>
    </>
  );
}

export default AddFavoriteIdolList;
