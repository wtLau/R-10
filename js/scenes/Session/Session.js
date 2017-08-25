import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { goToSession, goToSpeaker } from '../../lib/navigationHelpers'
import  LineSeparator  from '../../components/LineSeparator/'
import { convertTimeHelper } from '../../lib/timeConvertHelper'
import { createFave } from '../../config/models'

import { styles } from './styles'

const Session = ({ sessionData, speakerData }) => (
    <View style={styles.container}>
        <Text style={styles.p_grey}>{sessionData.location}</Text>
        <Text style={styles.h3}>{sessionData.title}</Text>
        <Text style={styles.p_time}>{convertTimeHelper(sessionData.start_time)}</Text>
        <Text style={styles.p}>{sessionData.description}</Text>
        <Text style={styles.p_grey}>Presented by: </Text>

        <TouchableOpacity onPress={() =>goToSpeaker(speakerData)}>
            <Image
                style={styles.image_icon}
                source={{uri: speakerData.image}} />
            <Text style={styles.p}>{speakerData.name}</Text>
        </TouchableOpacity>
        <LineSeparator/>
        <TouchableOpacity onPress={() =>createFave(sessionData.session_id)}>
            <Text>Remove from Faves</Text>
        </TouchableOpacity>
    </View>
)
// description, location, session_id, speaker, start_time, title

Session.propTypes = {}

export default Session