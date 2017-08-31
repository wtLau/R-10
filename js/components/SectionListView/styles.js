import { typography, colors } from '../../config/styles'
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    },
    faveHeart: {
        position: 'absolute',
        right: 10, 
        bottom: 4,
    }
  })