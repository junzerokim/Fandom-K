const handleBackgroundClick = (e, closeModal) => {
  if (e.target === e.currentTarget) {
    closeModal();
  }
};

export default handleBackgroundClick;
