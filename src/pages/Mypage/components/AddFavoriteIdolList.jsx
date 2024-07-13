import React, { useState } from 'react';

import plusIcon from '../images/ic_plus.svg';
import './AddFavoriteIdolList.css';

import AddIdolListItem from './AddIdolListItem';
import useIdolData from '../hooks/useIdolData';

function AddFavoriteIdolList() {
  const idolData = useIdolData();

  const [isSelected, setIsSelected] = useState(new Array(idolData.length).fill(false));
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
    localStorage.setItem('my-favorite-idol', JSON.stringify(selectedIdolList));
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
