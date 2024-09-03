import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';


const CharacterScreen = ({ navigation }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(response => setCharacters(response.data.results.slice(0, 5)))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={characters}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Button
              title="Ver Informações"
              onPress={() => navigation.navigate('CharacterDetail', { character: item })}
            />
          </View>
        )}
      />
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
          <Ionicons name="information-circle-outline" size={30} color="#007bff" />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  button: {
    position: 'absolute',
    top: 700, 
    right: 20, 
    backgroundColor: 'white', 
    borderRadius: 25, 
    padding: 10, 
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.2, 
    shadowRadius: 3, 
  },
});

export default CharacterScreen;
