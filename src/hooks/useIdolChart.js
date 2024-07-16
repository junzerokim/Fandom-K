import { useState, useEffect } from 'react';
import getIdolChart from '../service/idolApi';

const useIdolChart = (gender) => {
  const [idolRank, setIdolRank] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getIdolChart(gender);
        setIdolRank(response);
        setLoading(false);
      } catch (error) {
        setFetchError(error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [gender]);

  return { idolRank, loading, fetchError };
};

export default useIdolChart;
