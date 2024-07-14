import React, { useState, useEffect } from 'react';
import './FavoriteIdolList.css';
import MyFavoriteIdolList from './MyFavoriteIdolList';
import AddFavoriteIdolList from './AddFavoriteIdolList';

function FavoriteIdolList() {
  const [myFavoriteIdolList, setMyFavoriteIdolList] = useState([]);

  // 초기 로컬 스토리지에서 '내가 관심 있는 아이돌' 데이터 불러오기
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('my-favorite-idol')) || [];
    setMyFavoriteIdolList(localStorageData);
  }, []);

  // myFavoriteIdolList 값이 변할 때마다 로컬 스토리지에 저장
  useEffect(() => {
    localStorage.setItem('my-favorite-idol', JSON.stringify(myFavoriteIdolList));
  }, [myFavoriteIdolList]);

  return (
    <div>
      <section className="section-my-favorite-idol">
        <h1 className="list-title">내가 관심 있는 아이돌</h1>
        <MyFavoriteIdolList myFavoriteIdolList={myFavoriteIdolList} setMyFavoriteIdolList={setMyFavoriteIdolList} />
      </section>
      <section>
        <h1 className="list-title">관심 있는 아이돌을 추가해보세요.</h1>
        <AddFavoriteIdolList myFavoriteIdolList={myFavoriteIdolList} setMyFavoriteIdolList={setMyFavoriteIdolList} />
      </section>
    </div>
  );
}

export default FavoriteIdolList;
