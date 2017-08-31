import { StyleSheet } from 'react-native'
import { typography, colors } from '../../config/styles'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.White,      
      paddingLeft: 10,
      paddingRight: 10,
    },
    p: {
      fontSize: typography.baseSize,
    },
    title: {
      fontSize: typography.iconSize,
      fontWeight: '500',
      fontFamily: typography.main,
      color: colors.Purple,   
    },
    image: {
        width: '60%',
        height: 100,
        resizeMode: 'contain',
        padding: 20,
    },
    border: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#999999'
    }
  })
  