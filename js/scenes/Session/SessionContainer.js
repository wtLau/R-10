import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import Session from './Session'

class SessionContainer extends Component {

    static propTypes = {}

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return <Session />
        }
    }
}

export default SessionContainer