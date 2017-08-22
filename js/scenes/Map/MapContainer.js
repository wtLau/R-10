import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import Map from './Map'

class MapContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Map',
        }
      }
    static propTypes = {}

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <ActivityIndicator animating={true} size="small" color="black" />
        //     );
        // } else {
            return <Map />
        // }
    }
}

export default MapContainer