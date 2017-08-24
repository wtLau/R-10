import { NavigationActions } from '@expo/ex-navigation';
import Router from '../navigation/Routes'
import Store from '../redux/store';

export const goToSession=(currentNavigatorUID, sessionData)  =>{
    Store.dispatch(NavigationActions.push(
        currentNavigatorUID, 
        Router.getRoute('session', { sessionData })
    ));
}

export const goToSpeaker = (speakerData) => {
    Store.dispatch(NavigationActions.push(
      'root', 
      Router.getRoute('speaker', { speakerData })
    ));
  }