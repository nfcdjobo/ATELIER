import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react';
import { AsyncStorage } from 'react-native';
import Login from './login';



export default function OpenApp() {
    const [Content, SetContent] = useState('');
    useEffect(()=>{
        checkIfFirstLaunch();
    }, []);

    const checkIfFirstLaunch = async ()=>{
        try {
            const isFirstLaunch = await AsyncStorage.getItem('isFirstLaunch');
            if(isFirstLaunch === null) {
                SetContent(Login());
            } else {
                SetContent(Login());
            }
        } catch (error) {
            
        }
    }
    
  return (
    <View>
      <Text>index</Text>
      {/* <Login /> */}
    </View>
  )
}