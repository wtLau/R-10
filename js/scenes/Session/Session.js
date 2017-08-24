import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { goToSession } from '../../lib/navigationHelpers'
import  LineSeparator  from '../../components/LineSeparator/'
import { convertTimeHelper } from '../../lib/timeConvertHelper'

import { styles } from './styles'

const Session = ({ data }) => (
    <View style={styles.container}>
        <Text style={styles.p_grey}>{data.location}</Text>
        <Text style={styles.h3}>{data.title}</Text>
        <Text style={styles.p_time}>{convertTimeHelper(data.start_time)}</Text>
        <Text style={styles.p}>{data.description}</Text>
        <Text style={styles.p_grey}>Presented by: </Text>
        <Text style={styles.p}>{data.speaker}</Text>
        <LineSeparator/>
        <TouchableOpacity onPress={() =>goToSession('schedule', data)}>
            <Text>Remove from Faves</Text>
        </TouchableOpacity>
    </View>
)
// description, location, session_id, speaker, start_time, title

Session.propTypes = {}

export default Session