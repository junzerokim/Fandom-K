import React from "react";

function CloseButton({ onClick }) {
  return (
    <button
      type="button"
      className="btn-close"
      onClick={onClick}
      aria-label="삭제 버튼"
    >
      <i className="btn-md icon-btn-close" />
    </button>
  );
}

export default CloseButton;
