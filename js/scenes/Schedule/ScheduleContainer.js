import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import Schedule from './Schedule'

class ScheduleContainer extends Component {

    static propTypes = {}

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return <Schedule />
        }
    }
}

export default ScheduleContainer