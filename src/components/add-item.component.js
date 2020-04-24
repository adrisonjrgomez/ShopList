import React, {useState, useContext} from 'react';
import {ItemsContext} from '../context/item/item.context';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default () => {
  const {addItem} = useContext(ItemsContext);
  const [text, setText] = useState('');
  const onChange = value => setText(value);
  return (
    <View style={styles.addContainer}>
      <TextInput
        placeholder="Type shop item to the list..."
        value={text}
        onChangeText={onChange}
      />
      <TouchableOpacity
        onPress={() => {
          addItem(text);
          setText('');
        }}
        style={styles.buttonContainer}>
        <Text>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addContainer: {
    padding: 10,
    fontSize: 18,
  },
  buttonContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: '#c2bad8',
    alignItems: 'center',
  },
  btnText: {
    color: 'blue',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
