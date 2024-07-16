import { useEffect, useState } from 'react';
import getIdolChunks from '../utils/getIdolChucks';

const useIdolChunks = (idolData) => {
  const [idolChunks, setIdolChunks] = useState([]);
  const [idolCount, setIdolCount] = useState(16);

  useEffect(() => {
    const updateNumOfIdol = () => {
      const { innerWidth } = window;

      if (innerWidth < 768) setIdolCount(6);
      else if (innerWidth < 1200) setIdolCount(8);
      else setIdolCount(16);
    };

    updateNumOfIdol();
    window.addEventListener('resize', updateNumOfIdol);

    return () => {
      window.removeEventListener('resize', updateNumOfIdol);
    };
  }, []);

  useEffect(() => {
    if (idolData) {
      setIdolChunks(getIdolChunks(idolData, idolCount));
    }
  }, [idolData, idolCount]);

  return idolChunks;
};

export default useIdolChunks;
