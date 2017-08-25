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
    static propTypes = {}

    constructor (props) {
        super(props)
        this.state = {
            fontSize: 15,
            translateValue: new Animated.ValueXY(),
            color: new Animated.Value(0)
        }
    }

    onPress = () => {
        // LayoutAnimation.spring()
        const animationConfig = {
            duration: 3000,
            update: {
                type: 'spring',
                springDamping: 0.1
            }
        }
        LayoutAnimation.configureNext(animationConfig)
        this.setState({ fontSize: this.state.fontSize*1.25})
    }

    animateCircle = () => {
        this.state.translateValue.setValue({ x:0 , y:0 })
        this.state.color.setValue(0)

        Animated.parallel([
            Animated.spring(
                this.state.translateValue, 
                { 
                    toValue: { x: 51, y:51 }, 
                    duration: 1000 
                }
            ),
        Animated.timing(
            this.state.color,
            { 
                toValue: 1, 
                duration: 1000 
            }
        )
        ]).start((animation) => {
            if(animation.finished) {
                this.animateCircle()
            }
        })
    }


    render() {
        let animatedStyle = {
            transform: [
                { translateX: this.state.translateValue.x },
                { translateY: this.state.translateValue.y }
            ],
            backgroundColor: color
        }

        let color = this.state.color.interpolate({
            inputRange: [0, 1],
            outputRange: ['blue', 'yellow']
        })
        return (
            <View style={styles.container}>
              <TouchableOpacity onPress={this.onPress}>
                <Text style={{fontSize: this.state.fontSize}}>
                  Welcome to React Native!
                </Text>
              </TouchableOpacity>
              <TouchableWithoutFeedback onPress={this.animateCircle}>              
                <Animated.View style={[ animatedStyle, styles.circle]} />
              </TouchableWithoutFeedback>              
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    circle: {
        borderRadius: 50,
        height: 100,
        width: 100,
        backgroundColor: 'green'
    }
  });
  
export default MapContainer