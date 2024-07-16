import { useEffect, useState } from 'react';

const useShowArrow = () => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      setShowArrow(window.innerWidth > 767);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return showArrow;
};

export default useShowArrow;
