import React, {useState} from 'react';
import {TextInput, View, StyleSheet, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ({item: {id, text, ...others}, onSubmitUpdate, onDisable}) => {
  const [textUpdate, setText] = useState('');
  const editText = value => {
    console.log(value, text);
    setText(value);
  };
  return (
    <View style={styles.editItem}>
      <TextInput
        value={textUpdate}
        placeholder={text}
        onChangeText={editText}
      />
      <Icon
        name="check"
        color="green"
        size={20}
        onPress={() => {
          console.log({id, textUpdate, ...others});
          if (!!textUpdate) {
            onSubmitUpdate({id, text: textUpdate, ...others});
          } else {
            onSubmitUpdate({id, text, ...others});
          }
          setText('');
          onDisable();
        }}
      />
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
