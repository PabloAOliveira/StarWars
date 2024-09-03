import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FilmsScreen = ({ route }) => {
  const { films } = route.params;

  return (
    <View style={styles.container}>
      {films.length > 0 ? (
        <FlatList
          data={films}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>Diretor: {item.director}</Text>
              <Text>Data de Lançamento: {item.release_date}</Text>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FilmsScreen;
