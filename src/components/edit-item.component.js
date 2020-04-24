
import React, {useState, useContext} from 'react';
import {ItemsContext} from '../context/item/item.context/';

import {TextInput, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ({item: {id, text, ...others}, onDisable}) => {
  const [textUpdate, setText] = useState('');
  const {editItem} = useContext(ItemsContext);

  const editText = value => setText(value);

  const onSubmit = () => {
    if (textUpdate) {
      editItem({id, text: textUpdate, ...others});
    } else {
      editItem({id, text, ...others});
    }
    setText('');
    onDisable();
  };

  return (
    <View style={styles.editItem}>
      <TextInput
        value={textUpdate}
        placeholder={text}
        onChangeText={editText}
      />
      <Icon name="check" color="green" size={20} onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  editItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 380,
  },
});
