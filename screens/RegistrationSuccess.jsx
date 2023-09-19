import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RegistrationSuccess = () => (
  <View style={styles.container}>
    <Text style={styles.successText}>Registration Successful!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  successText: {
    fontSize: 24,
    marginBottom: 24,
    color: '#333',
  },
});

export default RegistrationSuccess;
