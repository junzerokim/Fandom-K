import React from 'react';
import './Mypage.css';
import FavoriteIdolList from './components/FavoriteIdolList';
import Header from '../../components/Header';

function Mypage() {
  return (
    <>
      <Header />
      <div className="favorite-idol-list">
        <FavoriteIdolList />
      </div>
    </>
  );
}

export default Mypage;
