import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList
} from 'react-native';

import { styles } from './styles'

const Map = ({ data }) => (
    <View style={styles.container}>
        <Text>This is Map</Text>
    </View>
)


Map.propTypes = {}

export default Map