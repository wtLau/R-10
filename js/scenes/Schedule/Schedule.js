import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    SectionList
} from 'react-native';
import * as moment from 'moment'

import { styles } from './styles'
import  LineSeparator  from '../../components/LineSeparator/'

const Schedule = ({ data }) => (
    <View style={styles.container}>
        <SectionList
            renderSectionHeader= { 
                (headerItem) => 
                    <Text style={[styles.h3, styles.h3_time, styles.wrapper]}>
                        {moment.unix(headerItem.section.title).format("h:mm A")} </Text>}
            renderItem={
                ({item}) => 
                    <View style={styles.p_wrapper}>
                        <Text style={styles.h3}>
                            {item.title}
                            </Text>
                        <Text style={styles.p}>
                            {item.location}
                            </Text> 
                    </View>}
            ItemSeparatorComponent = {()=> <LineSeparator/> }
            keyExtractor={data => data.session_id}
            sections={data}
        />
    </View>
)


Schedule.propTypes = {}

export default Schedule