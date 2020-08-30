import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const CharacterItem = ({
  id = '',
  name = '',
  status = 'Alive',
  image = '',
  species = '',
  onPress = () => alert('pressed'),
}) => {
  return (
    <TouchableHighlight underlayColor="#DDDDDD" onPress={() => onPress(id)}>
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.info}>
          <Text style={styles.sectionTitle}>{name}</Text>
          <Text style={styles.secondaryText}>{`Estado: ${status}`}</Text>
          <Text style={styles.secondaryText}>{`Raza: ${species}`}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 4,
    margin: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  info: {
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
  secondaryText: {
    fontSize: 16,
    color: Colors.dark,
  },
});

export default CharacterItem;
