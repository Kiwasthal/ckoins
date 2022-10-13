import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAxios = (param, dep = []) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  axios.defaults.baseURL = 'http://localhost:3000/api/';

  const fetchData = async param => {
    try {
      setLoading(true);
      console.log(param);
      const result = await axios(param);

      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, dep);

  return {
    response,
    loading,
    error,
  };
};
