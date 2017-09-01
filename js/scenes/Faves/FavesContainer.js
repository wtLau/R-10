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



    render() {
        if (this.props.loading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
        } else {
            return <Faves data={this.props.faveData} faveId={this.props.faveId}/>
        }
    }
}

FavesContainer.propTypes = {
    faveData: PropTypes.arrayOf(
        PropTypes.shape({
            data: PropTypes.arrayOf(PropTypes.shape({
                description: PropTypes.string.isRequired,
                location: PropTypes.string.isRequired,
                session_id: PropTypes.string.isRequired,
                speaker: PropTypes.string.isRequired,
                start_time: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
            })),
            title: PropTypes.number.isRequired,
        })
    ).isRequired,
    faveId: PropTypes.shape({
        id: PropTypes.string,
        faved_on: PropTypes.instanceOf(Date),
    }),
    loading: PropTypes.bool.isRequired    
}

function mapStateToProps(state) {
    return {
        faveData: state.FaveData.Data,
        faveId: state.FaveData.faveId,
        loading: state.FaveData.isLoading,        
    };
  }
  
export default connect(mapStateToProps)(FavesContainer)