import React, {useEffect, useState} from 'react';
import * as axios from 'axios';
import CharactersList from './src/CharactersList';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StyleSheet, View} from 'react-native';

const App: () => React$Node = () => {
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        'https://rickandmortyapi.com/api/character/',
      );
      setCharacters(response.data.results);
    } catch (error) {}
  };

  useEffect(() => {
    getCharacters();
  }, [characters]);

  return (
    <SafeAreaView>
      <View style={styles.body}>
        <CharactersList characters={characters} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    height: '100%',
    paddingTop: 20,
  },
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
});

export default App;
