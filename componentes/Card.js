import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ data }) => {
  return (
    <View style={styles.card}>
      {Object.entries(data).map(([key, value], index) => (
        <Text key={index} style={styles.cardText}>
          {key}: {value}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    marginVertical: 2,
  },
});

export default Card;
