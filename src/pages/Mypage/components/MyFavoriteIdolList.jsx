import React, { useEffect, useRef } from 'react';
import './MyFavoriteIdolList.css';
import MyIdolListItem from './MyIdolListItem';

function MyFavoriteIdolList({ myFavoriteIdolList, setMyFavoriteIdolList }) {
  const handleDeleteIdolButtonClick = (deleteIdolId) => {
    const updatedIdolList = myFavoriteIdolList.filter(
      (idol) => idol.id !== deleteIdolId,
    );
    setMyFavoriteIdolList(updatedIdolList);
  };

  const listWrapperRef = useRef(null);

  useEffect(() => {
    const container = listWrapperRef.current;

    const handleWheel = (e) => {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      container.scrollLeft += delta;
      e.preventDefault();
    };

    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="my-favorite-idol-list-wrapper" ref={listWrapperRef}>
      {myFavoriteIdolList.length === 0 ? (
        <div className="empty-message">앗! 아직 관심 있는 아이돌이 없어요</div>
      ) : (
        myFavoriteIdolList.map((idol) => {
          return (
            <MyIdolListItem
              key={idol.id}
              idolData={idol}
              onClick={handleDeleteIdolButtonClick}
            />
          );
        })
      )}
    </div>
  );
}

export default MyFavoriteIdolList;
