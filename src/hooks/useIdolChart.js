import { useState, useEffect } from 'react';
import getIdolChart from '../service/idolApi';

const useIdolChart = () => {
  const [idolLank, setIdolLank] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getIdolChart();
        console.log(response);
        setIdolLank(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching donations:', error);
        setFetchError(error);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { idolLank, loading, fetchError };
};

export default useIdolChart;
