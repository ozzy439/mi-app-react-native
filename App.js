import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Hola</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  box: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 3
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e91e63'  // Rosa
  },
});
