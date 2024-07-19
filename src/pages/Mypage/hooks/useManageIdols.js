import { useState } from "react";

const useManageIdols = (
  idolData,
  myFavoriteIdolList,
  setMyFavoriteIdolList
) => {
  // 특정 아이돌이 선택되었는지 여부를 { 아이디 : 선택 여부 }로 이루어진 객체로 저장
  const [isSelected, setIsSelected] = useState({});
  const [selectedIdolList, setSelectedIdolList] = useState([]);

  const handleSelectIdolButtonClick = (idolId) => {
    // 새로 선택된 아이돌의 선택 여부를 -> 이전 선택 여부의 반대로 만듦
    setIsSelected((prevSelected) => ({
      ...prevSelected,
      [idolId]: !prevSelected[idolId],
    }));

    const selected = !isSelected[idolId];

    const updatedIdolList = selected
      ? [...selectedIdolList, idolData.find((idol) => idol.id === idolId)]
      : selectedIdolList.filter((idol) => idol.id !== idolId);

    setSelectedIdolList(updatedIdolList);
  };

  const handleAddIdolButtonClick = () => {
    const existingLocalStorageData = myFavoriteIdolList || [];
    // 리스트에 이미 존재하는 아이돌 제거하기 -> 선택한 아이돌 중에서, 이미 존재하는 아이돌의 아이디와 다른 아이돌만 반환
    const filteredSelectedIdolList = selectedIdolList.filter(
      (idol) =>
        !existingLocalStorageData.some(
          (existingIdol) => existingIdol.id === idol.id
        )
    );
    const updatedLocalStorageData = [
      ...existingLocalStorageData,
      ...filteredSelectedIdolList,
    ];

    setMyFavoriteIdolList(updatedLocalStorageData);

    setIsSelected({});
    setSelectedIdolList([]);
  };

  return { isSelected, handleSelectIdolButtonClick, handleAddIdolButtonClick };
};

export default useManageIdols;
