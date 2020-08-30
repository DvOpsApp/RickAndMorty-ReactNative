import React from 'react';
import {FlatList} from 'react-native';
import CharacterItem from './CharacterItem';

const CharactersList = ({characters = []}) => {
  const onPress = (id) => alert(`Abrir id: ${id.toString()}`);
  const renderItem = (item) => (
    <CharacterItem
      id={item.id}
      name={item.name}
      image={item.image}
      status={item.status}
      species={item.species}
      onPress={onPress}
    />
  );
  return (
    <FlatList
      data={characters}
      renderItem={({item}) => renderItem(item)}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CharactersList;
