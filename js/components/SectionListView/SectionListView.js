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
import  LineSeparator  from '../LineSeparator/'

const SectionListView = ({ data, pageOn }) => (
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
                    <View style={styles.faveHeart}>
                        <FaveHeart/>
                    </View>
                </View>
            }
        ItemSeparatorComponent = {()=> <LineSeparator/> }
        keyExtractor={data => data.session_id}
        sections={data}
    />
)

export default SectionListView