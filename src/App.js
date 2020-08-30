import React, {useEffect, useState} from 'react';
import CharactersList from './CharactersList';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import {getCharactersRequest} from './api/characters';

const App: () => React$Node = () => {
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
  return (
    <SafeAreaView>
      <View style={styles.body}>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <CharactersList characters={characters} />
        )}
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
