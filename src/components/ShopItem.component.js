import React, {useState, useContext} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import EditItem from './edit-item.component';
import Item from './item.component';

import {ItemsContext} from '../context/item/item.context';

const Width = Dimensions.get('screen').width;

export default ({item}) => {
  const {deleteItem} = useContext(ItemsContext);
  const [editing, setEditing] = useState(false);
  const enableEditing = () => setEditing(true);
  const disableEditing = () => setEditing(false);
  const renderLeft = () => {
    return (
      <View style={styles.deleteItem}>
        <Icon name="trash" size={20} color="white" />
      </View>
    );
  };

  return (
    <Swipeable
      onSwipeableLeftOpen={() => {
        deleteItem(item.id);
      }}
      renderLeftActions={renderLeft}
      containerStyle={styles.shopItem}>
      {editing ? (
        <EditItem item={item} onDisable={disableEditing} />
      ) : (
        <Item item={item} enableEditing={enableEditing} />
      )}
    </Swipeable>
  );
};

// TODO: FIX A BUG SwipeContainer is over main container

const styles = StyleSheet.create({
  shopItem: {
    padding: 20,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  deleteItem: {
    backgroundColor: 'red',
    width: Width * 0.25,
    padding: 20,
  },
});
