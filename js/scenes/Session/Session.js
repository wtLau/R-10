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
        <Text>{data.location}</Text>
        <Text>{data.title}</Text>
        <Text>{convertTimeHelper(data.start_time)}</Text>
        <Text>{data.description}</Text>
        <Text>Presented by: {data.speaker}</Text>
        <LineSeparator/>
        <TouchableOpacity onPress={() =>goToSession('schedule', data)}>
        </TouchableOpacity>

    </View>
)
// description, location, session_id, speaker, start_time, title

Session.propTypes = {}

export default Session