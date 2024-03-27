import { Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Style } from './style';



const ActivityItems = props => {
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
        <TouchableOpacity style={Style.scrollabListItem}>
            <Image source={imageSource} style={Style.icon}/>
            <Text style={Style.mainText}>{item.mainText}</Text>
            <Text style={Style.subText}>{item.subText}</Text>
        </TouchableOpacity>
    )
}

export default ActivityItems