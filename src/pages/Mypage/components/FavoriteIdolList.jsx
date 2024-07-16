import React, { useState, useEffect } from 'react';

import './FavoriteIdolList.css';

import MyFavoriteIdolList from './MyFavoriteIdolList';
import AddFavoriteIdolList from './AddFavoriteIdolList';

function FavoriteIdolList() {
  const localStorageData = JSON.parse(localStorage.getItem('my-favorite-idol')) || [];
  const [myFavoriteIdolList, setMyFavoriteIdolList] = useState(localStorageData);

  useEffect(() => {
    localStorage.setItem('my-favorite-idol', JSON.stringify(myFavoriteIdolList));
  }, [myFavoriteIdolList]);

  return (
    <div>
      <section className="section-my-favorite-idol">
        <h3 className="favorite-idol-list-title my-idol">내가 관심 있는 아이돌</h3>
        <MyFavoriteIdolList myFavoriteIdolList={myFavoriteIdolList} setMyFavoriteIdolList={setMyFavoriteIdolList} />
      </section>
      <section>
        <h3 className="favorite-idol-list-title add-idol">관심 있는 아이돌을 추가해보세요.</h3>
        <AddFavoriteIdolList myFavoriteIdolList={myFavoriteIdolList} setMyFavoriteIdolList={setMyFavoriteIdolList} />
      </section>
    </div>
  );
}

export default FavoriteIdolList;
