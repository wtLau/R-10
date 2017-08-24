import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import Speaker from './Speaker'

class SpeakerContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Speaker',
        }
      }

    static propTypes = {}

    render() {
        return <Speaker speakerData={this.props.speakerData}/>
    }
}

export default SpeakerContainer