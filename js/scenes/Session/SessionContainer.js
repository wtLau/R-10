import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchSingleSpeaker } from '../../redux/modules/SingleSpeaker'
import Session from './Session'
import { createFave, deleteFave } from '../../config/models'

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

    onFave = (id) => {
        if (this.props.faveId.find(faveId => faveId.id === this.props.sessionData.session_id)) {
            deleteFave(id)                        
        } else {
            createFave(id)                           
        }
    }

    render() {
        if (this.props.loading)
            return(
                <ActivityIndicator animating={true} size="small" color="black" />
            )
        return <Session sessionData={this.props.sessionData} speakerData= {this.props.speakerData} onFave={this.onFave} faveId={this.props.faveId}/>
    }
}
SessionContainer.propTypes = {
    dispatch: PropTypes.func,
    find: PropTypes.func,
    sessionData: PropTypes.shape({
        description: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        session_id: PropTypes.string.isRequired,
        speaker: PropTypes.string.isRequired,
        start_time: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,        
        }),
    speakerData: PropTypes.shape({
        bio: PropTypes.string,
        image: PropTypes.string,
        name: PropTypes.string,
        session: PropTypes.string,
        speaker_id: PropTypes.string,
        url: PropTypes.string,        
        }),
    faveId: PropTypes.shape({
        id: PropTypes.string,
        faved_on: PropTypes.instanceOf(Date),
    }),
    loading: PropTypes.bool
}

function mapStateToProps(state) {
    return {
        speakerData: state.SingleSpeaker.Data,
        loading: state.SingleSpeaker.isLoading,
        faveId: state.FaveData.faveId
    };
  }

export default connect(mapStateToProps)(SessionContainer)

