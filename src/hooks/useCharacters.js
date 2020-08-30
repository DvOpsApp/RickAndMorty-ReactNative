import {useState, useEffect} from 'react';
import {getCharactersRequest} from '../api/characters';

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCharacters = async () => {
    try {
      const response = await getCharactersRequest();
      setCharacters(response.data.results);
    } catch (error) {
      alert('Error al cargar los personajes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [characters]);

  return {characters, loading};
};

export default useCharacters;
