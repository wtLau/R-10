import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import User from './User'

class UserContainer extends Component {

    static propTypes = {}

    render() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return <User />
        }
    }
}

export default UserContainer