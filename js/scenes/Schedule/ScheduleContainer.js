import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';

import { fetchSession } from '../../redux/modules/Session'
import Schedule from './Schedule'

class ScheduleContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Schedule',
        }
      }

    componentDidMount() {
        this.props.dispatch(fetchSession())
    }

    static propTypes = {}

    render() {
        const loading = this.props.loading;
        if (loading) return (
            <ActivityIndicator animating={true} size="small" color="black" />
        )

        return <Schedule data={this.props.data}/>
    }
}

ScheduleContainer.propTypes = {
    dispatch: PropTypes.func,
    // data: PropTypes.shape({
    //     data: PropTypes.arrayOf(PropTypes.shape({
    //         description: PropTypes.string.isRequired,
    //         location: PropTypes.string.isRequired,
    //         session_id: PropTypes.string.isRequired,
    //         speaker: PropTypes.string.isRequired,
    //         start_time: PropTypes.number.isRequired,
    //         title: PropTypes.string.isRequired,
    //     }))
    // }),
    loading: PropTypes.bool.isRequired
}

function mapStateToProps(state) {
    return {
        data: state.SessionData.data,
        loading: state.SessionData.isLoading,
    };
  }

export default connect(mapStateToProps)(ScheduleContainer)