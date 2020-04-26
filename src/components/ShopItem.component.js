import React, {useState, useContext} from 'react';
import {Animated, StyleSheet} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import EditItem from './edit-item.component';
import Item from './item.component';

import {ItemsContext} from '../context/item/item.context';

// const Width = Dimensions.get('screen').width;

export default ({item}) => {
  const {deleteItem} = useContext(ItemsContext);
  const [editing, setEditing] = useState(false);

  const enableEditing = () => setEditing(true);
  const disableEditing = () => setEditing(false);

  const renderLeft = (progress, dragX) => {

    return (
      <Animated.View style={styles.deleteItem}>
        <Icon name="trash" size={20} color="white" />
      </Animated.View>
    );
  };

  return (
    <Swipeable
      onSwipeableLeftOpen={() => {
        deleteItem(item.id);
      }}
      renderLeftActions={renderLeft}
      childrenContainerStyle={styles.shopItem}>
      {editing ? (
        <EditItem item={item} onDisable={disableEditing} />
      ) : (
        <Item item={item} enableEditing={enableEditing} />
      )}
    </Swipeable>
  );
};


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
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    marginBottom: 10,
  },
});
