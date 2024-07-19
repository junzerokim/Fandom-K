import React from "react";

import "./FavoriteIdolList.css";
import useSaveMyIdol from "../hooks/useSaveMyIdol";

import MyFavoriteIdolList from "./MyFavoriteIdolList/MyFavoriteIdolList";
import AddFavoriteIdolList from "./AddFavoriteIdolList/AddFavoriteIdolList";

function FavoriteIdolList() {
  const { myFavoriteIdolList, setMyFavoriteIdolList } = useSaveMyIdol();

  return (
    <div>
      <section className="section-my-favorite-idol">
        <h3 className="favorite-idol-list-title my-idol">
          내가 관심 있는 아이돌
        </h3>
        <MyFavoriteIdolList
          myFavoriteIdolList={myFavoriteIdolList}
          setMyFavoriteIdolList={setMyFavoriteIdolList}
        />
      </section>
      <section>
        <h3 className="favorite-idol-list-title add-idol">
          관심 있는 아이돌을 추가해보세요.
        </h3>
        <AddFavoriteIdolList
          myFavoriteIdolList={myFavoriteIdolList}
          setMyFavoriteIdolList={setMyFavoriteIdolList}
        />
      </section>
    </div>
  );
}

export default FavoriteIdolList;
