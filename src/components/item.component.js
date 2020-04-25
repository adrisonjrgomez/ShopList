import React, {useContext} from 'react';
import {ItemsContext} from '../context/item/item.context';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

let color;

export default ({item: {id, text, ...others}, enableEditing}) => {
  const {setDoneItem} = useContext(ItemsContext);
  color = 'white';
  return (
    <TouchableOpacity
      style={[styles.item]}
      onPress={() => {
        setDoneItem({id, text, ...others});
        color = 'green';
      }}>
      <Text>{text}</Text>
      <TouchableOpacity style={styles.editing}>
        <Icon
          style={styles.icons}
          name="edit"
          size={20}
          color="blue"
          onPress={() => enableEditing()}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: color,
    width: 390,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  editing: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icons: {
    marginRight: 10,
  },
});
