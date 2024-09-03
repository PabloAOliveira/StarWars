import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const ShipsScreen = ({ route }) => {
  const { ships } = route.params;

  return (
    <View style={styles.container}>
      {ships.length > 0 ? (
        <FlatList
          data={ships}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.name}>{item.name}</Text>
              <Text>Modelo: {item.model}</Text>
              <Text>Passageiros: {item.passengers}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Nenhuma Nave disponivel.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShipsScreen;
