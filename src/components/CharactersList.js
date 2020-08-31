import React from 'react';
import {FlatList} from 'react-native';
import CharacterItem from './CharacterItem';

const CharactersList = ({characters = [], onCharacterSelection}) => {
  const renderItem = (item) => (
    <CharacterItem
      id={item.id}
      name={item.name}
      image={item.image}
      status={item.status}
      species={item.species}
      onPress={onCharacterSelection}
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
