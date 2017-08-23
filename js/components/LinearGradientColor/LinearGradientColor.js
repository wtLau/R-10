import React from 'react'

import { styles } from './styles'
import { colors } from '../../config/styles'
import LinearGradient from 'react-native-linear-gradient';


const LinearGradientColor = () => (
    <LinearGradient 
        start={{x: 1.0, y: 0.25}} 
        end={{x: 0.0, y: 1.0}}
        colors={[colors.Purple, colors.Red]} 
        style={styles.linearGradient}
        />
)


export default LinearGradientColor