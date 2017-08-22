import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {
    NavigationProvider,
    StackNavigation,
} from '@expo/ex-navigation';
import Router from './navigation/routes'


export default class R10 extends Component {
  render() {
    return (
        <NavigationProvider  navigatorUID="root" id="root" router={Router}>
            <StackNavigation initialRoute={Router.getRoute('about')} />
        </NavigationProvider>
    );
  }
}

