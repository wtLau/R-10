import React, { Component } from 'react';
import { View,LayoutAnimation, Animated ,TouchableOpacity, Text} from 'react-native';

import { styles } from './styles'


export default class ConductItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            display: false,
            translateValue: new Animated.ValueXY(),
            spin: new Animated.Value(0)
        }
    }

    
    toggleDescription= () => {
        LayoutAnimation.linear()
        this.setState({ display: !this.state.display })
    }

    // rotateItemBullet =() => {
    //     this.state.spin.setValue(0)
    //     Animated.timing(
    //         this.state.spin,
    //         { 
    //             toValue: 1, 
    //             duration: 3000 
    //         }
    //     ).start()
    // }

    render() {
        // let animatedStyle = {
        //     transform: [
        //         { rotate: spin }
        //     ]
        // }

        // let spin = this.state.translateValue.interpolate({
        //     inputRange: [0, 1],
        //     outputRange: ['0deg', '360deg']
        // })


        return (
            <View> 
                <TouchableOpacity onPress={this.toggleDescription}>
                    {/* <Animated.Text style={animatedStyle}>
                        {this.state.display ? '-': '+'}
                        </Animated.Text> */}
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
