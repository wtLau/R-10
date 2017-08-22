import React, { Component } from 'react';

import { NavigationContext, NavigationProvider, StackNavigation } from '@expo/ex-navigation';
import { Provider } from 'react-redux';

import Store from './redux/store';
import Router from './navigation'

const navigationContext = new NavigationContext({
    router: Router,
    store: Store,
})

export default class R10 extends Component {

  render() {
    return (
        <Provider store={Store}>
            <NavigationProvider context={navigationContext}>
                <StackNavigation navigatorUID="root" id="root" initialRoute={Router.getRoute('about')} />
            </NavigationProvider>
        </Provider>
    );
  }
}

