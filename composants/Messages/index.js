import { View, Text } from 'react-native'
import React from 'react';
import { styleMessage } from './style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { COLORS } from '../../outils/constantes';
dayjs.extend(relativeTime);



const Messages = (props) => {
    const item= props.item;

    const myMessage = item.user.id === 1;
  return (
    <View style={[styleMessage.contenaire, {backgroundColor: myMessage ? COLORS.main : 'white', alignSelf: myMessage ? 'flex-end' : 'flex-start'}]}>
      <Text style={{color: myMessage? 'white': null }}>{item.message}</Text>
      <Text style={{alignSelf: myMessage ? 'flex-end' : null, color: myMessage ? 'black' : COLORS.main, marginTop: 7, fontSize: 11 }}>{dayjs(item.createdAd).fromNow(true)}</Text>
    </View>
  )
}

export default Messages