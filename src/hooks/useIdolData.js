import { useEffect, useState } from "react";
import { getIdols, getCharts } from "../service/getApi";

const useIdolData = (gender = null) => {
  const [idolData, setIdolData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const fetchIdolsData = async () => {
    setIsLoading(true);
    try {
      let response;

      if (gender) response = await getCharts(gender);
      else response = await getIdols();

      setIdolData(response);
      setFetchError(null);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching idol chart:", error);
      setFetchError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchIdolsData();
  }, [gender]);

  return { idolData, isLoading, fetchError, fetchIdolsData };
};

export default useIdolData;
