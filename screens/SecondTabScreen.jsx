import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SecondTabScreen = () => (
  <View style={styles.container}>
    <Text style={styles.tabText}>Second Tab</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  tabText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SecondTabScreen;
