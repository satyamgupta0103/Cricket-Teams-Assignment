import axios from "axios";

// This is Satyam's pr(error)oject
// This is xyz  a bug (fetch API hook) fix
export const fetchAPI = async (apiUrl, cancelToken) => {
  const response = await axios.get(apiUrl, {
    cancelToken: cancelToken?.token,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  });

  return response;
};
