import { useState, useEffect } from 'react';
import getDonation from '../service/api';

const useDonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null); // 'error' -> 'fetchError'로 수정

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDonation();
        setDonations(response.list);
        setLoading(false);
      } catch (error) {
        setFetchError(error); // 'error' -> 'fetchError'로 수정
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { donations, loading, fetchError };
};

export default useDonationList;
