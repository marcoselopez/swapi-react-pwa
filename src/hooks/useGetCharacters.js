import { useState } from "react"

const useGetCharacters = () => {

  const [loading, setLoading] = useState(true);
  const [characterList, setCharacterList] = useState([]);

  const getCharacters = () => {
    setTimeout(() => {
      setLoading(false)
      setCharacterList([1, 2, 3])
    }, 1500)
  };

  return {
    getCharacters,
    loading,
    characterList
  }
};

export default useGetCharacters;