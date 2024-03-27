import { View, TouchableOpacity} from 'react-native'
import React from 'react';
import { TextInput } from 'react-native';
import { StyleInput } from './styleInput';
import MaterialComminityIcon from 'react-native-vector-icons/MaterialCommunityIcons';





const MessageItem = () => {
  return (
    <View style={StyleInput.container}>
      <TextInput  style={StyleInput.input} placeholder='Message ici ...'/>
      <TouchableOpacity>
        <MaterialComminityIcon name='send' style={StyleInput.send} size={25}/>
      </TouchableOpacity>
      
    </View>
  )
}

export default MessageItem