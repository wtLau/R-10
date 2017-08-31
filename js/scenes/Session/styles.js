import { StyleSheet } from 'react-native'
import { typography, colors } from '../../config/styles'

export const styles = {
    container: {
        flex: 1,
        backgroundColor: colors.White,
        marginTop: 20,
        marginRight: 15,
        marginLeft: 15,
        justifyContent: 'center',
      },
      h3: {
        fontSize: typography.iconSize,
        fontWeight: '600',
        fontFamily: typography.fontMain,
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
          fontFamily: typography.fontMain,
          marginBottom: 10
      },
      p: {
          fontSize: typography.baseSize,
          fontFamily: typography.fontMainLight,
      },
      p_bold: {
          fontSize: typography.baseSize,
          fontWeight: 'bold',          
          fontFamily: typography.fontMainLight,
      },
      image_icon: {
            width: 50, 
            height: 50,
            borderRadius: 25,
      },
      descript: {
        marginTop: 10,
        marginBottom: 25,
        lineHeight: 25,
      },
      touch: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,

      },
      name: {
          marginLeft: 13,
          fontWeight: 'bold',                    
      },
      fave_btn: {
          width: '70%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          borderRadius: 40,
          marginTop: 20
      },
      btn_container: {
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row',
      },
      fave_txt: {
          textAlign: 'center',
          color: colors.White,
          fontWeight: 'bold',
      }
}
  