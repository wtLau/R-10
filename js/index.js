import React, { Component } from 'react';
import { StatusBar } from 'react-native'

import { NavigationContext, NavigationProvider, StackNavigation, NavigationStyles } from '@expo/ex-navigation';
import { Provider } from 'react-redux';

import Store from './redux/store';
import Router from './navigation/Routes'

const navigationContext = new NavigationContext({
    router: Router,
    store: Store,
})


export default class R10 extends Component {
  render() {
    return (
        <Provider store={Store}>
            <NavigationProvider context={navigationContext}>
                <StatusBar barStyle="light-content" />                
                <StackNavigation 
                    defaultRouteConfig={{
                        styles: { ...NavigationStyles.SlideVertical,}
                    }}
                    navigatorUID="root" 
                    id="root" 
                    initialRoute={Router.getRoute('home')} />
            </NavigationProvider>
        </Provider>
    );
  }
}

