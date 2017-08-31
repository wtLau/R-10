import React from 'react'

import { styles } from './styles'
import { colors } from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient';


const LinearGradientColor = ({ startY, backgroundColor }) => (
    <LinearGradient 
        start={{x: 1.0, y: startY}} 
        end={{x: 0.0, y: 1.0}}
        colors={backgroundColor} 
        style={styles.linearGradient}
        />
)


export default LinearGradientColor