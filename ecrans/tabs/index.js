// Importez les bibliothèques nécessaires
import { View, Text } from 'react-native';

import React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Home from '../Home'; // Importez votre écran d'accueil

import Messages from '../messages';

import Settings from '../Settings';

const ButtomTabs = () => {
    // Créez le navigateur de tabulation inférieure
    const Tab = createMaterialBottomTabNavigator();

    return (
        <Tab.Navigator initialRouteName="home"  screenOptions={{ tabBarActiveTintColor: '#e91e63', headerShown: false }} tabBarOptions={{style:{backgroundColor: '#3A3DF9'},}} >
            <Tab.Screen name="home" component={Home}
                options={{
                    tabBarLabel: 'Accueil',
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        );
                    }
                }}
            />

            <Tab.Screen
                name="Notifications"
                component={Messages}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) =>  {
                        return (<MaterialCommunityIcons name="wechat" color={color} size={size} />)
                    },
                    tabBarBadge: 1,
                }}
            />
            <Tab.Screen name="Paramètre" component={Settings} options={{ tabBarLabel: 'Réglage',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cog" color={color} size={size} />
                ) }}
            />
        </Tab.Navigator>
    )
}

export default ButtomTabs