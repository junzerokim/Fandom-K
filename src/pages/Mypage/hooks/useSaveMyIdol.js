import { useState, useEffect } from "react";

const useSaveMyIdol = () => {
  const localStorageData =
    JSON.parse(localStorage.getItem("my-favorite-idol")) || [];
  const [myFavoriteIdolList, setMyFavoriteIdolList] =
    useState(localStorageData);

  useEffect(() => {
    localStorage.setItem(
      "my-favorite-idol",
      JSON.stringify(myFavoriteIdolList)
    );
  }, [myFavoriteIdolList]);

  return { myFavoriteIdolList, setMyFavoriteIdolList };
};

export default useSaveMyIdol;
