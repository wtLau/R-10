import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native';
import { styles } from './styles'
import SectionListView from '../../components/SectionListView/'

const Schedule = ({ data, faveId }) => (
    <View style={styles.container}>
        <SectionListView data={data} faveId={faveId} pageOn='schedule'/>
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
    ),
    faveId: PropTypes.shape({
        id: PropTypes.string,
        faved_on: PropTypes.instanceOf(Date),
    })
}

export default Schedule