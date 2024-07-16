import React from 'react';
import './MyFavoriteIdolList.css';
import MyIdolListItem from './MyIdolListItem';

function MyFavoriteIdolList({ myFavoriteIdolList, setMyFavoriteIdolList }) {
  const handleDeleteIdolButtonClick = (deleteIdolId) => {
    const updatedIdolList = myFavoriteIdolList.filter((idol) => idol.id !== deleteIdolId);
    setMyFavoriteIdolList(updatedIdolList);
  };

  return (
    <div className="my-favorite-idol-list-wrapper">
      {myFavoriteIdolList.length === 0 ? (
        <div className="empty-message">앗! 아직 관심 있는 아이돌이 없어요</div>
      ) : (
        myFavoriteIdolList.map((idol) => {
          return <MyIdolListItem key={idol.id} idolData={idol} onClick={handleDeleteIdolButtonClick} />;
        })
      )}
    </div>
  );
}

export default MyFavoriteIdolList;
