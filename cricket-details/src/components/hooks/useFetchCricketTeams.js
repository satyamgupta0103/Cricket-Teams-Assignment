import { useState, useEffect } from "react";
import axios from "axios";
import { fetchAPI } from "../API";

const useCricketTeams = (apiUrl) => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelToken;

    const fetchTeams = async () => {
      try {
        setLoading(true);
        cancelToken = axios.CancelToken.source();

        const response = await fetchAPI(apiUrl, cancelToken);

        setTeams(response.data.data || []);
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

    fetchTeams();

    return () => {
      cancelToken?.cancel();
      // cancelToken = Safety mechanism to cancel API calls when they are no longer needed.
    };
  }, [apiUrl]);

  return { teams, loading, error };
};

export default useCricketTeams;
