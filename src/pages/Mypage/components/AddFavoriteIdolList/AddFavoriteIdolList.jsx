import React, { useMemo } from "react";
import Slider from "react-slick";

import plusIcon from "../../assets/images/ic_plus.svg";
import "./AddFavoriteIdolList.css";

import useIdolData from "../../../../hooks/useIdolData";
import useIdolChunks from "../../hooks/useIdolChunks";
import useShowArrow from "../../hooks/useShowArrow";
import useManageIdols from "../../hooks/useManageIdols";

import LoadingBar from "../../../../components/Loadingbar";
import AddIdolListButton from "./AddIdolListButton/AddIdolListButton";

function AddFavoriteIdolList({ myFavoriteIdolList, setMyFavoriteIdolList }) {
  const { idolData, isLoading = true } = useIdolData();
  const idolChunks = useIdolChunks(idolData);
  const showArrow = useShowArrow();
  const { isSelected, handleSelectIdolButtonClick, handleAddIdolButtonClick } =
    useManageIdols(idolData, myFavoriteIdolList, setMyFavoriteIdolList);

  const sliderSettings = useMemo(
    () => ({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      arrows: showArrow,
    }),
    [],
  );

  if (isLoading) {
    return (
      <div className="add-favorite-idol-list-wrapper">
        <LoadingBar />
      </div>
    );
  }

  return (
    <>
      <div className="add-favorite-idol-list-wrapper">
        <Slider
          slidesToShow={sliderSettings.slidesToShow}
          slidesToScroll={sliderSettings.slidesToScroll}
          infinite={sliderSettings.infinite}
          arrows={sliderSettings.arrows}
        >
          {idolChunks.map((idolChunk, idolChunkIndex) => {
            const key = `${idolChunkIndex}-${new Date().getTime()}`;
            return (
              <AddIdolListButton
                key={key}
                idolChunk={idolChunk}
                onClick={handleSelectIdolButtonClick}
                isSelected={isSelected}
              />
            );
          })}
        </Slider>
      </div>
      <button
        className="add-favorite-idol-button"
        type="button"
        aria-label="관심 있는 아이돌 추가 버튼"
        onClick={handleAddIdolButtonClick}
      >
        <img className="button-plus-icon" src={plusIcon} alt="plus icon" />
        추가하기
      </button>
    </>
  );
}

export default AddFavoriteIdolList;
