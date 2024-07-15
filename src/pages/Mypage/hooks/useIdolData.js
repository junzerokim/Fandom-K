import { useEffect, useState } from 'react';
import getIdolData from '../utils/api';

const useIdolData = () => {
  const [idolData, setIdolData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIdolData = async () => {
    const data = await getIdolData();
    setIdolData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchIdolData();
  }, []);

  return { idolData, isLoading };
};

export default useIdolData;
