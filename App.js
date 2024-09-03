import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CharacterScreen from './screens/InfoApi';
import CharacterDetailScreen from './screens/CharacterDetailScreen';
import ShipsScreen from './screens/Naves';
import FilmsScreen from './screens/Filmes';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagens">
        <Stack.Screen name="Personagens" component={CharacterScreen} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetailScreen} />
        <Stack.Screen name="Ships" component={ShipsScreen} />
        <Stack.Screen name="Films" component={FilmsScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
