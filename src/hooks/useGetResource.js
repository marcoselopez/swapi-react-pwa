import { useState } from "react";

const useGetResource = () => {

  const baseURL = 'https://swapi.dev/api/';
  const [fullData, setFullData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchResource = (resource, ignore) => {
    setLoading(true);
    fetch(`${baseURL}${resource}`)
    .then(response => {
      if(!response.ok){
        throw new Error('Failed to fetch!')
      }
      return response.json();
    })
    .then(jsonData => {
      if(!ignore){
        jsonData.results ? setFullData(jsonData.results) : setFullData(jsonData)
        setError(undefined);
      }
    })
    .catch(err => {
      if(!ignore){
        setError(err.message);
        setFullData(null);
      }
    })
    .finally(() => {
      if(!ignore){
        setLoading(false)
      }
    })
  }

  return {
    fetchResource,
    fullData,
    loading,
    error
  }
};

export default useGetResource;