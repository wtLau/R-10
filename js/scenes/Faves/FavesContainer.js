import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';

import Faves from './Faves'

class FavesContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Faves',
        }
      }

    static propTypes = {}

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <ActivityIndicator animating={true} size="small" color="black" />
        //     );
        // } else {
            return <Faves />
        // }
    }
}

export default FavesContainer