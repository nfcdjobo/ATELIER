//import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//createNativeStackNavigator est un composant qui crée des piles de navigation native pour gérer les transitions entre les écrans
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../ecrans/Home';
// Ici on fait appel à la tabulation
import ButtomTabs from '../ecrans/tabs';
import DetailMessages from '../ecrans/DetailMessages';
import Settings from '../ecrans/Settings';
import OpenApp from '../ecrans/OpenApp';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    // Ici on encapsule l'ensemble de notre aplication grace la composante NavigationContainer
    <NavigationContainer>
        {/* Grâce à la propriété  screenOptions on display none le header en mettant le headerShown à false*/}
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={ButtomTabs}/>
        <Stack.Screen name='detailMessage' component={DetailMessages} options={{headerShown:true}}/>
        <Stack.Screen name='setting' component={Settings} options={{headerShown: true}}/>
        <Stack.Screen name='welcom' component={OpenApp}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes