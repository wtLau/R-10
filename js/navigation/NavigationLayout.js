import React, { Component } from 'react'

import Router from './Routes'
import { StackNavigation, TabNavigation, TabNavigationItem as TabItem } from '@expo/ex-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, typography } from '../config/styles'

const defaultRouteConfig = {
    navigationBar: {
        tintColor: colors.White,
        // titleStyle: {
            
        // },
        // renderBackground: () => (

        // )
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
                initialTab="about"
                tabBarColor= "black" >
                <TabItem
                    id="schedule"
                    title="Schedule"
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
                    renderIcon={(isSelected) => this.renderIcon("ios-map", isSelected) }
                >
                    <StackNavigation
                        id="map"
                        initialRoute={Router.getRoute('map')}
                        defaultRouteConfig= {defaultRouteConfig}                        
                    />
                </TabItem>
                <TabItem
                    id="faves"
                    title="Faves"
                    renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected) }
                >
                    <StackNavigation
                        id="faves"
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig= {defaultRouteConfig}                        
                    />
                </TabItem>
                <TabItem
                    id="about"
                    title="About"
                    renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected) }
                >
                    <StackNavigation
                        id="about"
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
}

export default NavigationLayout