import { StyleSheet } from 'react-native'
import { typography, colors } from '../../config/styles'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.White,      
      paddingLeft: 10,
      paddingRight: 10,
    },
    p: {
      fontSize: typography.baseSize,
      fontFamily: typography.fontMainLight,  
      paddingTop: 15,          
    },
    title: {
      fontSize: typography.baseSize,
      fontWeight: '500',
      fontFamily: typography.fontMain,
      color: colors.Purple,   

    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    icon: {
      fontSize: typography.baseSize,
      fontWeight: '500',
      fontFamily: typography.fontMain,
      color: colors.Purple, 
    }
  })
  