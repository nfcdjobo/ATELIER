import React from 'react';
import { View, Text, FlatList, ScrollView, Image } from 'react-native';
import '../Home/style'
import { fakeChats } from '../../FakeDatas/faceChats';
import { Chats } from '../../composants/chats';
import { styleMessage } from './style';
import { dashboardStyle } from '../Home/style';

const Messages = ({navigation}) => {
  return (
    <ScrollView>
      <View style={dashboardStyle.header}>
        <Text style={dashboardStyle.userName}>DJOBO Carêm</Text>
        <Image source={require('../../assets/Font/user.jpg')} style={dashboardStyle.userImage}/>
      </View>

      <FlatList
        style={styleMessage.contenaire}
        data={fakeChats}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={
          ({item})=>{
            return(
              <Chats item={item} navigation={navigation}/>
            )
          }
        }
        
      />
    </ScrollView>
    
    // <Chats item={fakeChats}/>
  )
}

export default Messages