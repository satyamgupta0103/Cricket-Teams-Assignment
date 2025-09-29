import axios from "axios";

export const fetchAPI = async (apiUrl, cancelToken) => {
  const response = await axios.get(apiUrl, {
    cancelToken: cancelToken?.token,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });

  return response;
};
