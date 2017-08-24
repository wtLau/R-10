import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    WebView,
    TouchableOpacity
} from 'react-native';

import { styles } from './styles'

const Speaker = ({speakerData}) => (
    <View style={styles.container}>
        <Image
            style={styles.image_icon}
            source={{uri: speakerData.image}} />
        <Text style={styles.p}>{speakerData.name}</Text>
        <Text> {speakerData.bio}</Text>

        <TouchableOpacity onPress={() => openWeb(speakerData.url)}>
            <Text>Read More on Wikipedia</Text>
        </TouchableOpacity>
    </View>
)

const openWeb = (params) => {
    <WebView
        source={{uri: params}}
        style={{marginTop: 20}}
        />
}

Speaker.propTypes = {}

export default Speaker