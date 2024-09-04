import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

const CharacterDetailScreen = ({ route, navigation }) => {
  const { character } = route.params;
  const [ships, setShips] = useState([]);
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const detalhesApi = async () => {
      try {
        setLoading(true);
        const shipRequests = character.starships.map((url) => axios.get(url));
        const filmRequests = character.films.map((url) => axios.get(url));

        const shipResponses = await Promise.all(shipRequests);
        const filmResponses = await Promise.all(filmRequests);

        setShips(shipResponses.map((response) => response.data));
        setFilms(filmResponses.map((response) => response.data));
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    detalhesApi();
  }, [character]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <Text>Altura: {character.height} cm</Text>
      <Text>Peso: {character.mass} kg</Text>
      <Text>Cor Cabelo: {character.hair_color}</Text>
      <Text>Cor: {character.skin_color}</Text>
      <Text>Cor Olhos: {character.eye_color}</Text>
      <Text>Gênero: {character.gender}</Text>
      {loading ? ( //terneiro
        <ActivityIndicator />
      ) : (
        <>
          <Button
            title="Ver Naves"
            onPress={() => navigation.navigate("Ships", { ships })}
          />
          <Button
            title="Ver Filmes"
            onPress={() => navigation.navigate("Films", { films })}
          />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
});

export default CharacterDetailScreen;
