import { useState } from "react";

const useGetResource = () => {

  const baseURL = 'https://swapi.dev/api/';
  const [fullData, setFullData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState('');

  const fetchResource = async (resource) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseURL}${resource}`);
      const data = await response.json();
      data.results ? setFullData(data.results) : setFullData(data);
      setLoading(false);
    } catch (error) {
      setErrors(error)
    }
  };

  return {
    fetchResource,
    fullData,
    loading,
    errors
  }
};

export default useGetResource;