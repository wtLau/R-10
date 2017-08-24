import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    SectionList,
    TouchableOpacity,
    Platform
} from 'react-native';
import { goToSession } from '../../lib/navigationHelpers'
import { convertTimeHelper } from '../../lib/timeConvertHelper'
import FaveHeart  from '../../components/FaveHeart/'
import { styles } from './styles'
import  LineSeparator  from '../../components/LineSeparator/'

const Schedule = ({ data }) => (
    <View style={styles.container}>
        <SectionList
            renderSectionHeader= { 
                (headerItem) => 
                    <Text style={[styles.h3, styles.h3_time, styles.wrapper]}>
                        {convertTimeHelper(headerItem.section.title)} </Text>}
            renderItem={
                ({item}) => 
                    <View>
                    <TouchableOpacity onPress={() =>goToSession('schedule', item)}>
                        <View style={styles.p_wrapper}>
                            <Text style={styles.h3}>
                                {item.title}
                                </Text>
                            <Text style={styles.p}>
                                {item.location}
                                </Text> 
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() =>goToSession('schedule', item)}>
                        <FaveHeart/>
                    </TouchableOpacity>
                    </View>
                }
            ItemSeparatorComponent = {()=> <LineSeparator/> }
            keyExtractor={data => data.session_id}
            sections={data}
        />
    </View>
)


Schedule.propTypes = {
    // goToSession: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.number.isRequired,
            data: PropTypes.arrayOf(
                PropTypes.shape({
                    description: PropTypes.string.isRequired,
                    location: PropTypes.string.isRequired,
                    session_id: PropTypes.string.isRequired,
                    speaker: PropTypes.string.isRequired,
                    start_time: PropTypes.number.isRequired,
                    title: PropTypes.string.isRequired,        
                })
            )
        })
    )
}

export default Schedule