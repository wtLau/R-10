import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    SectionList,
    TouchableOpacity,
} from 'react-native';
import { goToSession } from '../../lib/navigationHelpers'
import { convertTimeHelper } from '../../lib/timeConvertHelper'
import FaveHeart  from '../../components/FaveHeart/'
import { styles } from './styles'
import  LineSeparator  from '../LineSeparator/'

const SectionListView = ({ data, pageOn, faveId }) => (
    <SectionList
        renderSectionHeader= { 
            (headerItem) => 
                <Text style={[styles.h3, styles.h3_time, styles.wrapper]}>
                    {convertTimeHelper(headerItem.section.title)} </Text>}
        renderItem={
            ({item}) => 
                <View>
                    <TouchableOpacity onPress={() =>goToSession(pageOn, item)}>
                        <View style={styles.p_wrapper}>
                            <Text style={styles.h3}>
                                {item.title}
                                </Text>
                            <Text style={styles.p}>
                                {item.location}
                                </Text> 
                        </View>
                    </TouchableOpacity>
                    {faveId.find(faveId => faveId.id === item.session_id) ?
                        <View style={styles.faveHeart}>
                            <FaveHeart/>
                        </View>
                        :
                        <Text/>
                    }
                </View>
            }
        ItemSeparatorComponent = {()=> <LineSeparator/> }
        keyExtractor={data => data.session_id}
        sections={data}
    />
)


SectionListView.propTypes = {
    pageOn: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                description: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired,
                session_id: PropTypes.string.isRequired,
                speaker: PropTypes.string.isRequired,
                start_time: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
            })),
            title: PropTypes.number.isRequired,
        })
    ).isRequired,
    faveId: PropTypes.shape({
        id: PropTypes.string,
        faved_on: PropTypes.instanceOf(Date),
    }),
  }

export default SectionListView