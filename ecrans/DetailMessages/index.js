import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react';
import { FakeConversation } from '../../FakeDatas/fakeConversation';
import Messages from '../../composants/Messages';
import MessageItem from '../../composants/MessageInput';



const DetailMessages = ({route, navigation}) => {
    const {item, title} = route.params;
    useEffect(()=>{
        navigation.setOptions({title: item.fullname})
    })
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={FakeConversation}
                keyExtractor={item=>item.id}
                renderItem={({item})=>{
                    return(
                        <Messages item={item}/>
                    )
                }}
            />
            <MessageItem />
        </View>
    )
}

export default DetailMessages