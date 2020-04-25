import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default ({title, changeScreen}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          changeScreen('pending');
        }}>
        <Text style={styles.tabText}>Pending</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => {
          changeScreen('done');
        }}>
        <Text style={styles.tabText}>Done</Text>
      </TouchableOpacity>
    </View>
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
    fontWeight: '700',
    textAlign: 'center',
  },
  tabBar: {
    marginTop: 10,
    flexDirection: 'row',
  },
  tab: {
    height: 20,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
    fontWeight: '600',
  },
});
