import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native';

import SectionListView from '../../components/SectionListView/'

import { styles } from './styles'

const Faves = ({ data, faveId }) => (
    <View style={styles.container}>
        <SectionListView data={data} faveId={faveId}pageOn='faves'/>
    </View>
)

Faves.propTypes = {
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
    faveId: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        faved_on: PropTypes.instanceOf(Date).isRequired,
    }))
}


export default Faves