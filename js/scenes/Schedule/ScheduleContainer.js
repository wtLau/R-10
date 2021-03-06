import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import Realm from '../../config/models'
import { fetchSession } from '../../redux/modules/Session'
import { fetchFave, loadFaveID } from '../../redux/modules/Fave'
import Schedule from './Schedule'

class ScheduleContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Schedule',
        }
      }

    componentDidMount() {
        this.props.dispatch(fetchSession())
        this.props.dispatch(loadFaveID())
        Realm.addListener('change', () => this.props.dispatch(loadFaveID()))
        Realm.addListener('change', () => this.props.dispatch(fetchFave()))
    }



    render() {
   let faveId = [];
        const loading = this.props.loading;
        if (loading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            )
        }  else {
            faveId = this.props.faveId
            return <Schedule data={this.props.data} faveId={faveId}/>
        }
    }
}

ScheduleContainer.propTypes = {
    dispatch: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.number.isRequired,
        data: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            session_id: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            start_time: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,        
            }))
        })),
    faveId: PropTypes.shape({
        id: PropTypes.string,
        faved_on: PropTypes.instanceOf(Date),
    }),
    loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        data: state.SessionData.data,
        loading: state.SessionData.isLoading,
        faveId: state.FaveData.faveId
    };
  }

export default connect(mapStateToProps)(ScheduleContainer)