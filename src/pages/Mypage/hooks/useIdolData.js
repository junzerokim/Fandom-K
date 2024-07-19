import { useEffect, useState } from "react";
import { getIdols } from "../../../service/getApi";

const useIdolData = () => {
  const [idolData, setIdolData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchIdolData = async () => {
    const data = await getIdols();
    setIdolData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchIdolData();
  }, []);

  return { idolData, isLoading };
};

export default useIdolData;
