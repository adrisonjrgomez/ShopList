import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({title}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    height: 80,
    padding: 15,
    backgroundColor: 'darkslateblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});
