import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import Session from './Session'

class SessionContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Session',
        }
      }

    static propTypes = {}

    render() {
        return <Session data={this.props.sessionData}/>
    }
}

export default SessionContainer
