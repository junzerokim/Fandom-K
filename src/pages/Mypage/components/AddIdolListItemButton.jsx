import React from 'react';

import './AddIdolListItemButton.css';
import AddIdolListItem from './AddIdolListItem';

function AddIdolListItemButton({ idolChunk, onClick, isSelected }) {
  return (
    <div className="add-favorite-idol-list">
      {idolChunk.map((idol) => {
        return (
          <button
            key={idol.id}
            type="button"
            aria-label="관심 있는 아이돌 선택 버튼"
            onClick={() => onClick(idol.id)}
          >
            <AddIdolListItem isSelected={isSelected[idol.id]} idolData={idol} />
          </button>
        );
      })}
    </div>
  );
}

export default AddIdolListItemButton;
