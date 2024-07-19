import { useRef, useEffect } from "react";

const useHorizontalScroll = () => {
  const listWrapperRef = useRef(null);

  useEffect(() => {
    const container = listWrapperRef.current;

    const handleWheel = (e) => {
      const delta = e.deltaY || e.detail || e.wheelDelta;
      container.scrollLeft += delta;
      e.preventDefault();
    };

    container.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return listWrapperRef;
};

export default useHorizontalScroll;
