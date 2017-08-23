import React from 'react'
import PropTypes from 'prop-types'
import { 
    Text, 
    View,
    Image,
    SectionList
} from 'react-native';

import { styles } from './styles'

const Schedule = ({ data }) => (
    <SectionList
        renderItem={({item}) => <Text>{item.title} </Text>}
        renderSectionHeader={(headerItem) => <Text>{headerItem.section.title} </Text>}
        keyExtractor={data => data.session_id}
        sections={data}
    />
)


Schedule.propTypes = {}

export default Schedule