import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

import EditItem from './edit-item.component';
import Item from './item.component';

export default ({item, onDelete, onEdit}) => {
  const [editing, setEditing] = useState(false);
  const enableEditing = () => setEditing(true);
  const disableEditing = () => setEditing(false);

  return (
    <TouchableOpacity style={styles.shopItem}>
      {editing ? (
        <EditItem
          item={item}
          onDisable={disableEditing}
          onSubmitUpdate={onEdit}
        />
      ) : (
        <Item item={item} enableEditing={enableEditing} onDelete={onDelete} />
      )}
    </TouchableOpacity>
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
});
