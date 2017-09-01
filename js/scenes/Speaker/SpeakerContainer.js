import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Linking } from 'react-native';

import Speaker from './Speaker'

class SpeakerContainer extends Component {
    static route = {
        navigationBar: {
          title: 'About the Speaker',
          visible: false
        }
      }


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

SpeakerContainer.propTypes = {
  openWeb: PropTypes.func,
  speakerData: PropTypes.shape({
      bio: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      session: PropTypes.string.isRequired,
      speaker_id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,        
      }),
}

export default SpeakerContainer