/**
 * Global Styles
 */
import { Platform, StyleSheet } from 'react-native';

export const colors = {
    MediumGrey: '#999999',
    LightGrey: '#e6e6e6',
    White: '#ffffff',
    Blue: '#8797D6',
    Purple: '#9963ea',
    Red: '#cf392a',
    Black: '#000000'
};

export const typography = {
    navFontSize: 10,
    baseSize: 16,
    headerSize: 30,
    iconSize: 24,
    fontMainLight: 'Montserrat-Light',    
    ...Platform.select({
        ios: {
            fontMain: 'Montserrat',
        },
        android: {
            fontMain: 'Monserrat-Regular',
        }
    })
};


