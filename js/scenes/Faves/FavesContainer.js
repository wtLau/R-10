import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ActivityIndicator } from 'react-native';
import { fetchFave } from '../../redux/modules/Fave'
import { connect } from 'react-redux';
import { 
    Text, 
    View,
    Image,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Faves from './Faves'

class FavesContainer extends Component {
    static route = {
        navigationBar: {
          title: 'Faves',
        }
      }

      componentDidMount() {

        this.props.dispatch(fetchFave())
    }

    static propTypes = {}

    render() {
        // if (this.state.isLoading) {
        //     return (
        //         <ActivityIndicator animating={true} size="small" color="black" />
        //     );
        // } else {
            return <Faves data={this.props.faveData} faveId={this.props.faveId}/>
        // }
    }
}

function mapStateToProps(state) {
    return {
        faveData: state.FaveData.Data,
        faveId: state.FaveData.faveId        
    };
  }
export default connect(mapStateToProps)(FavesContainer)