import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Item = ({
  id = '',
  name = '',
  status = 'Alive',
  image = '',
  species = '',
  onPress = () => alert('pressed'),
}) => {
  return (
    <TouchableHighlight
      activeOpacity={0.6}
      underlayColor="#DDDDDD"
      onPress={() => onPress(id)}>
      <View style={styles.item}>
        <Image style={styles.image} source={{uri: image}} />
        <View style={styles.itemInfo}>
          <Text style={styles.sectionTitle}>{name}</Text>
          <Text style={styles.statusText}>{`Estado: ${status}`}</Text>
          <Text style={styles.statusText}>{`Raza: ${species}`}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 4,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  itemInfo: {
    marginLeft: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
  statusText: {
    fontSize: 20,
    color: Colors.dark,
  },
});

export default Item;
