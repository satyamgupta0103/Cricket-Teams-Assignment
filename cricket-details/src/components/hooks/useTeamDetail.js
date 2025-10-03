import { useState, useEffect } from "react";
import axios from "axios";
import { fetchAPI } from "../API";

const useTeamDetail = (apiURL) => {
  const [teamDetail, setTeamDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelToken;

    const fetchPlayer = async () => {
      try {
        setLoading(true);
        cancelToken = axios.CancelToken.source();

        const response = fetchAPI(apiUrl, cancelToken);

        setTeamDetail(response.data || []);
        setError(null);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchPlayer();

    return () => {
      cancelToken?.cancel();
    };
  }, [apiURL]);

  return { teamDetail, loading, error };
};

export default useTeamDetail;
