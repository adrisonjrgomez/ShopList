import React, {useContext} from 'react';
import {FlatList, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ItemsContext} from '../context/item/item.context';

const Done = () => {
  const {doneItem} = useContext(ItemsContext);

  const renderItems = ({item: {text}}) => {
    return (
      <TouchableOpacity style={styles.item}>
        <Text style={styles.itemText}>{text}</Text>
      </TouchableOpacity>
    );
  };
  return <FlatList data={doneItem} renderItem={renderItems} />;
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: 'lightgreen',
  },
  itemText: {
    fontSize: 15,
    fontWeight: '700',
  },
});
export default Done;
