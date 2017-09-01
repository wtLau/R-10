import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator, StyleSheet, View,LayoutAnimation, Animated ,TouchableOpacity, TouchableWithoutFeedback, Text} from 'react-native';

import Map from './Map'

class MapContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Map',
        }
      }

    render() {
        return (
            <Map />
          );
    }
}

  
export default MapContainer