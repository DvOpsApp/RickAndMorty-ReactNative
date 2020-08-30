import React from 'react';
import CharactersList from './components/CharactersList';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import useCharacters from './hooks/useCharacters';

const App: () => React$Node = () => {
  const {loading, characters} = useCharacters();

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
