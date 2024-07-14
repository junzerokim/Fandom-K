import React from 'react';
import './MyFavoriteIdolList.css';
import MyIdolListItem from './MyIdolListItem';

function MyFavoriteIdolList({ myFavoriteIdolList, setMyFavoriteIdolList }) {
  const handleDeleteIdolButtonClick = (deleteIdolId) => {
    const updatedIdolList = myFavoriteIdolList.filter((idol) => idol.id !== deleteIdolId);
    setMyFavoriteIdolList(updatedIdolList);
  };

  return myFavoriteIdolList.length === 0 ? (
    <div className="my-favorite-idol-list-empty-message">앗! 아직 관심 있는 아이돌이 없어요</div>
  ) : (
    <div className="my-favorite-idol-list-wrapper">
      {myFavoriteIdolList.map((idol) => {
        return <MyIdolListItem key={idol.id} idolData={idol} onClick={handleDeleteIdolButtonClick} />;
      })}
    </div>
  );
}

export default MyFavoriteIdolList;
