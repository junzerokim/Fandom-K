import React from 'react';
import './FavoriteIdolList.css';
import MyFavoriteIdolList from './MyFavoriteIdolList';
import AddFavoriteIdolList from './AddFavoriteIdolList';

function FavoriteIdolList() {
  return (
    <div>
      <section className="section-my-favorite-idol">
        <h1 className="list-title">내가 관심 있는 아이돌</h1>
        <MyFavoriteIdolList />
      </section>
      <section>
        <h1 className="list-title">관심 있는 아이돌을 추가해보세요.</h1>
        <AddFavoriteIdolList />
      </section>
    </div>
  );
}

export default FavoriteIdolList;
