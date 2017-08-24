import { StyleSheet } from 'react-native'
import { typography, colors } from '../../config/styles'

export const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.White,
      },
      h3: {
        fontSize: typography.iconSize,
        fontWeight: '600',
        fontFamily: typography.main,
        paddingTop: 5,
        paddingBottom: 5,
      },
      p_time: {
        paddingTop: 5,
        color: colors.Red,
        paddingBottom: 5,
        fontFamily: typography.fontMainLight,
        fontWeight: '500',        
      },
      wrapper: {
          backgroundColor: colors.LightGrey,
      },
      p_wrapper: {
          paddingTop: 12,         
          paddingBottom: 12,       
          paddingLeft: 15,               
      },
      p_grey: {
          fontSize: typography.baseSize,
          color: colors.MediumGrey,
          fontFamily: typography.main,
      },
      p: {
          fontSize: typography.baseSize,
          fontFamily: typography.fontMainLight,
      },
      p_bold: {
          fontSize: typography.baseSize,
          fontWeight: 'bold',          
          fontFamily: typography.fontMainLight,
      }
}
  