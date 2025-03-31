import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./local-image.png')} 
        style={styles.image}
      />
      <Text style={styles.text}>Hola</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
