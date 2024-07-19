const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 1200) return 5;
  return 10;
};

export default getPageSize;
