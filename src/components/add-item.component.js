import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ({onAdd}) => {
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
          onAdd(text);
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
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
