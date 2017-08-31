import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    WebView,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CloseIcon from '../../components/CloseIcon/'
import { goBack } from '../../lib/navigationHelpers'

import { styles } from './styles'

const Speaker = ({speakerData, openWeb}) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => goBack()} style={styles.close_icon}>
                <CloseIcon/>
            </TouchableOpacity>
            <Text style={styles.p_white}>About the Speaker</Text>
        </View>
        <ScrollView style={styles.scroll}>
            <View style={styles.wrapper}>
                <Image
                    style={styles.image_icon}
                    source={{uri: speakerData.image}} />
                <Text style={styles.h3}>{speakerData.name}</Text>
                <Text style={styles.bio}> {speakerData.bio}</Text>
                <TouchableOpacity style={styles.fave_btn} onPress={() => openWeb(speakerData.url)}>
                    <Text style={[styles.p, styles.fave_txt]}>Read More on Wikipedia</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
)

Speaker.propTypes = {}

export default Speaker