import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CardMovies = ({ titulo, imagem, popularity, knownFor, gender }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: imagem }} style={styles.image} />
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.text}>Popularidade: {popularity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 10,
    width: 150,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  text: {
    color: 'white',
    fontSize: 14,
    marginTop: 5,
  },
});

export default CardMovies;
