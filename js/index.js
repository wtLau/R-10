import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    createRouter,
    NavigationProvider,
    StackNavigation,
  } from '@expo/ex-navigation';

import About from './scenes/About/'

const Router = createRouter(() => ({
    // home: () => HomeScreen,
    about: () => About,
  }));

export default class R10 extends Component {
  render() {
    return (
        // <About />
        <NavigationProvider  navigatorUID="root" id="root" router={Router}>
            <StackNavigation initialRoute={Router.getRoute('about')} />
        </NavigationProvider>
    );
  }
}

