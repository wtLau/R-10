import React, { Component } from 'react'

import Router from './Routes'
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
  } from '@expo/ex-navigation';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles'
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
            <DrawerNavigation
                id="main"
                navigatorUID="main"
                initialItem="schedule"
                drawerWidth={200} >
                <DrawerNavigationItem
                    id="schedule"
                    renderTitle={(isSelected) => this.renderTitle(isSelected, 'Schedule')}
                    renderIcon={(isSelected) => this.renderIcon("md-calendar", isSelected)}
                    selectedStyle={styles.selectedItemStyle}
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                        defaultRouteConfig= {defaultRouteConfig}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="map"
                    renderTitle={(isSelected) => this.renderTitle(isSelected, 'Map')}   
                    renderIcon={(isSelected) => this.renderIcon("md-map", isSelected) }
                    selectedStyle={styles.selectedItemStyle}
                >
                    <StackNavigation
                        id="map"
                        navigatorUID="map"                        
                        initialRoute={Router.getRoute('map')}
                        defaultRouteConfig= {defaultRouteConfig}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="faves"
                    title="Faves"
                    navigatorUID="faves1"                    
                    renderTitle={(isSelected) => this.renderTitle(isSelected, 'Faves')}
                    selectedStyle={styles.selectedItemStyle}
                    renderIcon={(isSelected) => this.renderIcon("md-heart", isSelected) }
                >
                    <StackNavigation
                        id="faves"
                        navigatorUID="faves"                                            
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig= {defaultRouteConfig}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="about"
                    title="About"
                    navigatorUID="about"                    
                    renderTitle={(isSelected) => this.renderTitle(isSelected, 'About')}
                    renderIcon={(isSelected) => this.renderIcon("md-information-circle", isSelected) }
                    selectedStyle={styles.selectedItemStyle}          
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"                                            
                        defaultRouteConfig= {defaultRouteConfig}
                        initialRoute={Router.getRoute('about')}
                    />
                </DrawerNavigationItem>
            </DrawerNavigation>
        );
    }

    renderIcon(iconName, isSelected) {
        const color = isSelected ?  colors.Purple : colors.MediumGrey
        return <Icon name={iconName} size={typography.iconSize} color={color} />
    }

    renderTitle(isSelected, title) {
        const styles ={
            color: isSelected ? colors.Purple : colors.MediumGrey,
            fontFamily: typography.main,
            fontSize: typography.baseSize,
            marginLeft: 10
        }
        return <Text style={styles}>{title}</Text>
    }
}

export default NavigationLayout