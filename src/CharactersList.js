import React from 'react';
import {FlatList} from 'react-native';
import Character from './Character';

const CharactersList = ({characters = []}) => {
  const onPress = (id) => alert(`Abrir id: ${id.toString()}`);
  const renderItem = (item) => (
    <Character
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
