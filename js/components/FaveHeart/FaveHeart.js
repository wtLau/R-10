import React from 'react'

import { styles } from './styles'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const FaveHeart = () => (
    <Icon style={styles.icon_heart} name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}/>
)


export default FaveHeart