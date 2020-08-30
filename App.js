import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  View,
  TouchableHighlight,
  Text,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import * as axios from 'axios';

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
const renderItem = (item, onPress) => (
  <Item
    id={item.id}
    name={item.name}
    image={item.image}
    status={item.status}
    species={item.species}
    onPress={onPress}
  />
);
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

  const selectOfId = (selectedId) => {
    alert(`Vamos al item de id: ${selectedId}`);
  };

  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <View>
            <FlatList
              data={characters}
              renderItem={({item}) => renderItem(item, selectOfId)}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.primary,
    height: '100%',
    paddingTop: 20,
  },
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
  statusText: {
    fontSize: 20,
    color: Colors.dark,
  },
  itemInfo: {
    marginLeft: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  sectionContainer: {
    marginTop: 40,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
  },
});

export default App;
