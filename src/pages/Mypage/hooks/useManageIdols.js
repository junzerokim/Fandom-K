import { useState } from "react";

const useManageIdols = (
  idolData,
  myFavoriteIdolList,
  setMyFavoriteIdolList
) => {
  const [isSelected, setIsSelected] = useState({});
  const [selectedIdolList, setSelectedIdolList] = useState([]);

  const handleSelectIdolButtonClick = (idolId) => {
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
    const existingLocalStorageData = myFavoriteIdolList ?? [];

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
