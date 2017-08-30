import { StyleSheet } from 'react-native'
import { typography, colors } from '../../config/styles'

export const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.White,
    },
    p: {
      fontSize: typography.baseSize,
      fontFamily: typography.main,      
      paddingLeft: 10,
      paddingRight: 10,
    },
    title: {
      fontSize: typography.iconSize,
      fontWeight: '500',
      fontFamily: typography.main,
      paddingTop: 15,
      paddingBottom: 15, 
      paddingLeft: 10,
      paddingRight: 10, 
    },
    image: {
        width: '60%',
        height: 100,
        resizeMode: 'contain',
        padding: 20,
    }
  }
  