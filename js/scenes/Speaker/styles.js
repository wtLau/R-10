import { StyleSheet } from 'react-native'
import { typography, colors } from '../../config/styles'


export const styles = {
    container: {
        flex: 1,
        paddingTop: 20,
        paddingRight: 15,
        paddingLeft: 15,
        backgroundColor: colors.Black,
      },
    h3: {
        fontSize: typography.iconSize,
        fontWeight: '600',
        fontFamily: typography.fontMain,
        paddingTop: 25,
        paddingBottom: 25,
      },
    scroll: {
        backgroundColor: colors.White,
        borderRadius: 5,
      },
    wrapper: {
        backgroundColor: colors.White,
        flex:1,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    p_white: {
        fontSize: typography.baseSize,
        color: colors.White,
        fontFamily: typography.fontMain,
        marginTop: 8,
        fontWeight: 'bold',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20,
        position: 'relative',
    },
    close_icon: {
        position: 'absolute',
        left: 0,
    },
    image_icon: {
        width: 120, 
        height: 120,
        borderRadius: 60,
    },
    bio: {
        fontSize: typography.baseSize,
        fontFamily: typography.fontMainLight,
        lineHeight: 25,        
    },
    fave_btn: {
        width: '75%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 50,
        marginTop: 20
    },
    fave_txt: {
        textAlign: 'center',
        color: colors.White,
        fontWeight: 'bold',
    }    
}
  