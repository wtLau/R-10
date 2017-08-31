import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, Linking } from 'react-native';

import Speaker from './Speaker'

class SpeakerContainer extends Component {
    static route = {
        navigationBar: {
          title: 'About the Speaker',
          visible: false
        }
      }

    static propTypes = {}

    openWeb(link) {
        Linking.canOpenURL(link).then(supported => {
          if (supported) {
            Linking.openURL(link);
          } else {
            console.log('Don\'t know how to open URI: ' + link);
          }
        });
    }

    render() {
        return <Speaker speakerData={this.props.speakerData} openWeb={this.openWeb}/>
    }
}

export default SpeakerContainer