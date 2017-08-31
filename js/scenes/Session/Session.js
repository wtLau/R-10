import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { goToSession, goToSpeaker } from '../../lib/navigationHelpers'
import  LineSeparator  from '../../components/LineSeparator/'
import { convertTimeHelper } from '../../lib/timeConvertHelper'
import { createFave,filterFave, queryFave } from '../../config/models'
import LinearGradientColor from '../../components/LinearGradientColor/'
import { colors } from '../../config/styles'

import { styles } from './styles'

const Session = ({ sessionData, speakerData, onFave, faveId }) => {
    const matchId = faveId.find(fave => fave === sessionData.session_id)
    return (
        <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={styles.p_grey}>{sessionData.location}</Text>
                    <Text style={styles.h3}>{sessionData.title}</Text>
                    <Text style={styles.p_time}>{convertTimeHelper(sessionData.start_time)}</Text>
                    <Text style={[styles.p, styles.descript]}>{sessionData.description}</Text>
                    <Text style={styles.p_grey}>Presented by: </Text>

                    <TouchableOpacity style={styles.touch} onPress={() =>goToSpeaker(speakerData)}>
                        <Image
                            style={styles.image_icon}
                            source={{uri: speakerData.image}} />
                        <Text style={[styles.p, styles.name]}>{speakerData.name}</Text>
                    </TouchableOpacity>
                <LineSeparator/>
                </View>
                <View style={styles.btn_container}>
                    <TouchableOpacity style={styles.fave_btn}  onPress={() => onFave(sessionData.session_id)}>
                        <LinearGradientColor startY={1.60}backgroundColor={[colors.White, colors.Purple]}/>
                        {faveId.find(faveId => faveId.id === sessionData.session_id) ?
                            <Text style={[styles.p, styles.fave_txt]}>Remove from Faves</Text>                            
                            :
                            <Text style={[styles.p, styles.fave_txt]}>Add to Faves</Text>                            
                        }

                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )

}
// description, location, session_id, speaker, start_time, title

Session.propTypes = {}

export default Session