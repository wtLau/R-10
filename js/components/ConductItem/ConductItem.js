import React, { Component } from 'react';
import { 
    Text, 
    View,
    TouchableOpacity,
    LayoutAnimation
} from 'react-native';
import { styles } from './styles'


export default class ConductItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            display: false
        }
    }

    toggleDescription= () => {
        LayoutAnimation.linear()
        this.setState({ display: !this.state.display })
    }

    render() {
        return (
            <View> 
                <TouchableOpacity onPress={this.toggleDescription}>
                    <Text style={styles.title}>
                        {this.state.display ? '-': '+'}
                        {this.props.data.title}
                        </Text>
                </TouchableOpacity>
                {this.state.display && <Text style={styles.p}>{this.props.data.description}</Text>}
            </View>
        );
    }
}
