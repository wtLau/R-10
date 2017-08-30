import React from 'react'

import { styles } from './styles'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const CloseIcon = () => (
    <Icon style={styles.icon_close} name={Platform.OS === 'ios' ? 'ios-close' : 'md-close'}/>    
)


export default CloseIcon