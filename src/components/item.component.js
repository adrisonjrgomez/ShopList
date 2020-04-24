import React, {useContext} from 'react';
import {ItemsContext} from '../context/item/item.context';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ({item: {id, text}, enableEditing}) => {
  const {deleteItem} = useContext(ItemsContext);
  return (
    <View style={styles.item}>
      <Text>{text}</Text>
      <View style={styles.editing}>
        <Icon
          style={styles.icons}
          name="edit"
          size={20}
          color="blue"
          onPress={() => enableEditing()}
        />
        <Icon
          name="remove"
          color="firebrick"
          size={20}
          onPress={() => deleteItem(id)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
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
