import { useEffect, useState } from "react";
import getPageSize from "../utils/getPageSize";

const usePageResize = () => {
  const [pageSize, setPageSize] = useState(getPageSize());
  const [displayCount, setDisplayCount] = useState(pageSize);

  useEffect(() => {
    const handleResize = () => {
      const newPageSize = getPageSize();
      setPageSize(newPageSize);
      setDisplayCount(newPageSize);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { pageSize, displayCount, setPageSize, setDisplayCount };
};

export default usePageResize;
