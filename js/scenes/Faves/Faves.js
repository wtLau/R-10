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


Faves.propTypes = {}

export default Faves