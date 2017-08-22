import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList
} from 'react-native';

import { styles } from './styles'

const Faves = () => (
    <View style={styles.container}>
        <Text>This is Faves</Text>
    </View>
)


Faves.propTypes = {}

export default Faves