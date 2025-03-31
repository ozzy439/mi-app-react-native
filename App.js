import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3f2fd',  // Azul claro
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a237e',  // Azul oscuro
    borderWidth: 2,
    borderColor: '#2196f3',
    padding: 10
  },
});
