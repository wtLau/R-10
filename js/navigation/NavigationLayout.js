import React, { Component } from 'react'

import Router from './Routes'
import { StackNavigation, TabNavigation, TabNavigationItem as TabItem } from '@expo/ex-navigation';

const defaultRouteConfig = {
    navigationBar: {
        tintColor: 'blue',
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
                initialTab="about">
                <TabItem
                    id="schedule"
                    title="Schedule">
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                        defaultRouteConfig= {defaultRouteConfig}
                    />
                </TabItem>
                <TabItem
                    id="map"
                    title="Map">
                    <StackNavigation
                        id="map"
                        initialRoute={Router.getRoute('map')}
                    />
                </TabItem>
                <TabItem
                    id="faves"
                    title="Faves">
                    <StackNavigation
                        id="faves"
                        initialRoute={Router.getRoute('faves')}
                    />
                </TabItem>
                <TabItem
                    id="about"
                    title="About">
                    {/* selectedStyle={styles.selectedTab}
                    renderIcon={(isSelected) => <Image source={require('./assets/images/about.png')} /> } */}
                    <StackNavigation
                        id="about"
                        initialRoute={Router.getRoute('about')}
                    />
                </TabItem>
            </TabNavigation>
        );
    }
}

export default NavigationLayout