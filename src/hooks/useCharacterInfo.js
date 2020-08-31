import {useState, useEffect} from 'react';
import {getCharacterDetailsInfo} from '../api/characters';

const useCharacterInfo = (characterId) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);

  const getCharacterInfo = async () => {
    try {
      const response = await getCharacterDetailsInfo(characterId);
      setCharacter(response.data);
    } catch (error) {
      alert('Error al cargar  información del personaje');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCharacterInfo();
  }, []);

  return {character, loading};
};

export default useCharacterInfo;
