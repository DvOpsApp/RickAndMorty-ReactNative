import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import useCharacterInfo from '../../hooks/useCharacterInfo';

const DetailsScreen = ({route}) => {
  const {characterId = ''} = route.params;
  const {character, loading} = useCharacterInfo(characterId);
  return (
    <SafeAreaView>
      <View style={styles.body}>
        {loading ? (
          <ActivityIndicator size="large" color={Colors.white} />
        ) : (
          <View style={styles.info}>
            <Image style={styles.image} source={{uri: character.image}} />
            <Text style={styles.title}>{character.name}</Text>
            <Text
              style={
                styles.secondaryText
              }>{`Estado: ${character.status}`}</Text>
            <Text
              style={styles.secondaryText}>{`Raza: ${character.species}`}</Text>
            <Text
              style={
                styles.secondaryText
              }>{`Genero: ${character.gender}`}</Text>
          </View>
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
    display: 'flex',
    alignItems: 'center',
  },
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  info: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: Colors.white,
    fontWeight: 'bold',
  },
  secondaryText: {
    fontSize: 20,
    color: Colors.light,
    fontWeight: 'bold',
  },
});

export default DetailsScreen;
