import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchSingleSpeaker } from '../../redux/modules/SingleSpeaker'
import Session from './Session'

class SessionContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Session',
        }
      }

      componentDidMount() {
        this.props.dispatch(fetchSingleSpeaker(this.props.sessionData.speaker))
    }

    static propTypes = {}

    render() {
        if (this.props.loading)
            return(
                <ActivityIndicator animating={true} size="small" color="black" />
            )
        return <Session sessionData={this.props.sessionData} speakerData= {this.props.speakerData}/>
    }
}

function mapStateToProps(state) {
    return {
        speakerData: state.SingleSpeaker.Data,
        loading: state.SingleSpeaker.isLoading,
    };
  }

export default connect(mapStateToProps)(SessionContainer)

