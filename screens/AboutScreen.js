import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre esse App</Text>
      <Text>Projeto Mobile Acadêmico - StarWars </Text>
      <Text>Developer: Pablo Oliveira & Gabriela Lenz</Text>
      <Text>RA: 1134335 & 1134940</Text>
      <Text>Email: 1134335@atitus.edu.br & 1134940@atitus.edu.br</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default AboutScreen;
