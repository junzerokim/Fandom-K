import { useState, useEffect } from "react";
import { getDonations } from "../service/getApi";

const useDonationList = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await getDonations();
      setDonations(response.list);
      setLoading(false);
    } catch (error) {
      console.error("후원 목록 불러오기 중 오류 발생:", error);
      setFetchError(error);
      setLoading(false);
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { donations, loading, fetchError, fetchData };
};

export default useDonationList;
