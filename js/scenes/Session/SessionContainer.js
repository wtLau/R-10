import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchSpeakers } from '../../redux/modules/Speakers'
import Session from './Session'

class SessionContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Session',
        }
      }

      componentDidMount() {
        this.props.dispatch(fetchSpeakers())
    }

    static propTypes = {}

    render() {
        if (this.props.loading)
            return(
                <ActivityIndicator animating={true} size="small" color="black" />
            )
        return <Session data={this.props.sessionData}/>
    }
}

function mapStateToProps(state) {
    return {
        speakerData: state.SpeakersData.data,
        loading: state.SpeakersData.isLoading,
    };
  }

export default connect(mapStateToProps)(SessionContainer)

