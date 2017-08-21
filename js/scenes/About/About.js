import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native';

import { styles } from './styles'

const About = () => (
    <View style={styles.container}>
        <Text style={styles.welcome}>
            Welcome to React Native!
        </Text>
  </View>

)


About.propTypes = {}

export default About