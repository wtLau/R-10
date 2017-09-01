import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import CloseIcon from '../../components/CloseIcon/'
import { goBack } from '../../lib/navigationHelpers'
import LinearGradientColor from '../../components/LinearGradientColor/'
import { colors } from '../../config/styles'

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
                    <LinearGradientColor startY={1.80} backgroundColor={[colors.White, colors.Purple]}/>
                    <Text style={[styles.p, styles.fave_txt]}>Read More on Wikipedia</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
)


Speaker.propTypes = {
    openWeb: PropTypes.func,
    speakerData: PropTypes.shape({
        bio: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        session: PropTypes.string.isRequired,
        speaker_id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,        
        }),
  }
  

export default Speaker