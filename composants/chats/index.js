import { View, Text, Image } from 'react-native'
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { style } from './style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export const Chats = (props) => {
    const item = props.item;
    const navigation = props.navigation;
    return(
        <TouchableOpacity
            style={style.chatsContenaire}
            onPress={()=> navigation.navigate('detailMessage', {item})}
        >
            <Image  source={{ uri:`${item.photo}`}} style={style.chatsImage}/>
            <View style={style.infoChats}>
                <View style={style.date_name}>
                    <Text style={style.name}>{item.fullname}</Text>
                    <Text style={style.date}>{dayjs(item.date).fromNow(true)}</Text>
                </View>
                <Text>{item.lastMessage.length > 25 ? item.lastMessage.slice(0, 25)+'(...)': item.lastMessage}</Text> 
            </View>
            
        </TouchableOpacity>
    )
}