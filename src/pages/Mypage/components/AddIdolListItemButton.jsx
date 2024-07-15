import React from 'react';

import './AddIdolListItemButton.css';
import AddIdolListItem from './AddIdolListItem';

function AddIdolListItemButton({ idolChunk, onClick, isSelected }) {
  return (
    <div className="add-favorite-idol-list-wrapper">
      {idolChunk.map((idol, idolIndex) => {
        return (
          <button
            key={idol.id}
            type="button"
            aria-label="Add Favorite Idol"
            onClick={() => onClick(idol.id, idolIndex)}
          >
            <AddIdolListItem isSelected={isSelected[idolIndex]} idolData={idol} />
          </button>
        );
      })}
    </div>
  );
}

export default AddIdolListItemButton;
