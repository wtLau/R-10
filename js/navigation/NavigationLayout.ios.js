import React, { Component } from 'react'

import Router from './Routes'
import { StackNavigation, TabNavigation, TabNavigationItem as TabItem } from '@expo/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../config/styles'
import LinearGradientColor from '../components/LinearGradientColor/'

const defaultRouteConfig = {
    navigationBar: {
        tintColor: colors.White,
        renderBackground: () => <LinearGradientColor backgroundColor={[colors.Purple, colors.Red]} startY={0.55}/>
    }
}

class NavigationLayout extends Component {
    static route = {
        navigationBar: {
          visible: false,
        }
      }
    render() { 
        return (
            <TabNavigation
                id="main"
                navigatorUID="main"
                initialTab="schedule"
                tabBarColor= "black" >
                <TabItem
                    id="schedule"
                    title="Schedule"
                    renderTitle={this.renderTitle}                    
                    renderIcon={(isSelected) => this.renderIcon("ios-calendar", isSelected)}
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                        defaultRouteConfig= {defaultRouteConfig}
                    />
                </TabItem>
                <TabItem
                    id="map"
                    title="Map"
                    renderTitle={this.renderTitle}            
                    renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected) }
                >
                    <StackNavigation
                        id="map"
                        navigatorUID="map"                        
                        initialRoute={Router.getRoute('map')}
                        defaultRouteConfig= {defaultRouteConfig}                        
                    />
                </TabItem>
                <TabItem
                    id="faves"
                    title="Faves"
                    renderTitle={this.renderTitle}
                    renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected) }
                >
                    <StackNavigation
                        id="faves"
                        navigatorUID="faves"                        
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig= {defaultRouteConfig}                        
                    />
                </TabItem>
                <TabItem
                    id="about"
                    title="About"
                    renderTitle={this.renderTitle}                   
                    renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected) }
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"                                                
                        defaultRouteConfig= {defaultRouteConfig}
                        initialRoute={Router.getRoute('about')}
                    />
                </TabItem>
            </TabNavigation>
        );
    }

    renderIcon(iconName, isSelected) {
        const color = isSelected ?  colors.White : colors.MediumGrey
        return <Icon name={iconName} size={typography.iconSize} color={color} />
    }

    renderTitle(isSelected, title) {
        const styles ={
            color: isSelected ? colors.White : colors.MediumGrey,
            fontFamily: typography.main,
            fontSize: typography.navFontSize,
        }
        return <Text style={styles}>{title}</Text>
    }
}

export default NavigationLayout