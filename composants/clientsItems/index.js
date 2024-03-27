import { View, Text, Image } from 'react-native'
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styleClients from './style';


const ClientsItems = props => {
    const item = props.item;
    let imageSource;
    if (item.id % 3 === 0) {
        imageSource = require('../../assets/svg/job.png');
    } else if (item.id % 5 === 0) {
        imageSource = require('../../assets/svg/coiffure.png');
    } else {
        imageSource = require('../../assets/svg/Shopping.png');
    }

    return (
        <TouchableOpacity>
            <View style={styleClients.item}>
                <Image source={imageSource} style={styleClients.itemImage}/>
                <Text style={styleClients.text}>{item.mainText}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ClientsItems;