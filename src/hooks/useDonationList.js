import { useState, useEffect } from "react";
import { getDonations } from "../service/getApi";

const useDonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDonations();
        setDonations(response.list);
        setLoading(false);
      } catch (error) {
        setFetchError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { donations, loading, fetchError };
};

export default useDonationList;
