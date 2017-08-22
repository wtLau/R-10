import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {fetchCodeOfConduct} from '../../redux/modules/About'
import { ActivityIndicator } from 'react-native';
import About from './About'

class AboutContainer extends Component {
    static route = {
        navigationBar: {
          title: 'About',
        }
    }

    componentDidMount() {
        this.props.dispatch(fetchCodeOfConduct())
    }

    static propTypes = {}

    render() {
        const loading = this.props.COFData.isLoading;
        if (loading) return (
            <ActivityIndicator animating={true} size="small" color="black" />
        )

        return <About data={this.props.COFData.Data}/>
    }
}

AboutContainer.propTypes = {
    COFData: PropTypes.shape({
        Data: PropTypes.arrayOf(PropTypes.shape({
            description: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
        })),
        isLoading: PropTypes.bool.isRequired
    }),
}

function mapStateToProps(state) {
  return {
        COFData: state.COFData,
  };
}

export default connect(mapStateToProps)(AboutContainer)