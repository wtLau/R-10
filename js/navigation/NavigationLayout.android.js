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
        // titleStyle: {
            
        // },
        renderBackground: () => <LinearGradientColor/>
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
                {/* TODO: Add Map layout here */}
                {/* <DrawerNavigationItem
                    id="map"
                    renderTitle={(isSelected) => this.renderTitle(isSelected, 'Map')}   
                    renderIcon={(isSelected) => this.renderIcon("md-map", isSelected) }
                    selectedStyle={styles.selectedItemStyle}
                >
                    <StackNavigation
                        id="map"
                        initialRoute={Router.getRoute('map')}
                        defaultRouteConfig= {defaultRouteConfig}
                    />
                </DrawerNavigationItem> */}
                <DrawerNavigationItem
                    id="faves"
                    title="Faves"
                    navigatorUID="faves"                    
                    renderTitle={(isSelected) => this.renderTitle(isSelected, 'Faves')}
                    selectedStyle={styles.selectedItemStyle}
                    renderIcon={(isSelected) => this.renderIcon("md-heart", isSelected) }
                >
                    <StackNavigation
                        id="faves"
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig= {defaultRouteConfig}
                    />
                </DrawerNavigationItem>
                <DrawerNavigationItem
                    id="about"
                    title="About"
                    navigatorUID="about"                    
                    renderTitle={(isSelected) => this.renderTitle(isSelected, 'Schedule')}
                    renderIcon={(isSelected) => this.renderIcon("md-information-circle", isSelected) }
                    selectedStyle={styles.selectedItemStyle}          
                >
                    <StackNavigation
                        id="about"
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