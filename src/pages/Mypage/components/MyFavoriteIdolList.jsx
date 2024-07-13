import React, { useState, useEffect } from 'react';
import './MyFavoriteIdolList.css';
import MyIdolListItem from './MyIdolListItem';

function MyFavoriteIdolList() {
  const [myFavoriteIdolList, setMyFavoriteIdolList] = useState([]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('my-favorite-idol')) || [];
    setMyFavoriteIdolList(localStorageData);
  }, []);

  const handleDeleteIdolButtonClick = (id) => {
    const updatedIdolList = myFavoriteIdolList.filter((idol) => idol.id !== id);
    setMyFavoriteIdolList(updatedIdolList);
    localStorage.setItem('my-favorite-idol', JSON.stringify(updatedIdolList));
  };

  return myFavoriteIdolList.length === 0 ? (
    <div className="empty-my-favorite-idol-list-message">앗! 아직 관심 있는 아이돌이 없어요</div>
  ) : (
    <div className="my-favorite-idol-list-wrapper">
      {myFavoriteIdolList.map((idol) => {
        return <MyIdolListItem key={idol.id} idolData={idol} onClick={handleDeleteIdolButtonClick} />;
      })}
    </div>
  );
}

export default MyFavoriteIdolList;
