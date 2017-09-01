import React from 'react'
import PropTypes from 'prop-types'

import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient';


const LinearGradientColor = ({ startY, backgroundColor }) => (
    <LinearGradient 
        start={{x: 1.0, y: startY}} 
        end={{x: 0.0, y: 1.0}}
        colors={backgroundColor} 
        style={styles.linearGradient}
        />
)


LinearGradientColor.propTypes = {
    startY: PropTypes.number.isRequired,
    backgroundColor: PropTypes.arrayOf(PropTypes.string).isRequired
  }


export default LinearGradientColor