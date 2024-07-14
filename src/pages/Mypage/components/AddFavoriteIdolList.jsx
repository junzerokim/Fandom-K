import React, { useState } from 'react';

import plusIcon from '../images/ic_plus.svg';
import './AddFavoriteIdolList.css';

import AddIdolListItem from './AddIdolListItem';
import useIdolData from '../hooks/useIdolData';

function AddFavoriteIdolList({ myFavoriteIdolList, setMyFavoriteIdolList }) {
  const idolData = useIdolData(); // 기본 아이돌 데이터

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
    const updatedLocalStorageData = [...existingLocalStorageData, ...selectedIdolList];

    setMyFavoriteIdolList(updatedLocalStorageData);

    setSelectedIdolList([]);
    setIsSelected(new Array(idolData.length).fill(false));
  };

  return (
    <>
      <div className="add-favorite-idol-list-wrapper">
        {idolData.map((idol, index) => {
          return (
            <button
              key={idol.id}
              type="button"
              aria-label="Add Favorite Idol"
              onClick={() => handleSelectIdolButtonClick(idol.id, index)}
            >
              <AddIdolListItem isSelected={isSelected[index]} idolData={idol} />
            </button>
          );
        })}
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
