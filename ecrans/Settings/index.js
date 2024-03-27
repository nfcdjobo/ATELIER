import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react';
import { styleSetting } from './style';
import { dashboardStyle } from '../Home/style';




export default function Settings() {
  return (
    <ScrollView>
      {/* Debut de header */}
      <View style={dashboardStyle.header}>
        <Text style={dashboardStyle.userName}>DJOBO Carêm</Text>
        <Image source={require('../../assets/Font/user.jpg')} style={dashboardStyle.userImage}/>
      </View>
      {/* Fin de header */}

      <View>
        <Text></Text>
        <Text>nfcdjobo@gmail.com</Text>
        <Text>+225 05 75 55 44 99</Text>
      </View>

    </ScrollView>

    
  )
}


