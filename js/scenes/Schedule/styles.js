import { StyleSheet } from 'react-native'
import { typography, colors } from '../../config/styles'

export const styles = {
    container: {
      flex: 1,
      backgroundColor: colors.White,
    },
    h3: {
      fontSize: typography.baseSize,
      fontWeight: '600',
      fontFamily: typography.main,
      paddingTop: 5,         
      paddingBottom: 5,       
    },
    h3_time: {
      paddingTop: 5,         
      paddingBottom: 5,   
      paddingLeft: 15,       
    },
    wrapper: {
        backgroundColor: colors.LightGrey,
    },
    p_wrapper: {
        paddingTop: 12,         
        paddingBottom: 12,       
        paddingLeft: 15,               
    },
    p: {
        fontSize: typography.baseSize,
        fontWeight: '600',
        color: colors.MediumGrey,
        fontFamily: typography.main,
    }
  }