import * as axios from 'axios';

const baseUrl = 'https://rickandmortyapi.com/api';

export const getCharactersRequest = async () =>
  await axios.get(`${baseUrl}/character`);
