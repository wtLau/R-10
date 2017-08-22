import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList
} from 'react-native';

import { styles } from './styles'

const Speaker = () => (
    <View style={styles.container}>
        <Text> This is Speaker Page</Text>
    </View>
)


Speaker.propTypes = {}

export default Speaker