import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import { CodeOfConductReducer } from './modules/About'
import { SessionReducer } from './modules/Session'


export default combineReducers({
    navigation: NavigationReducer,
    COFData: CodeOfConductReducer,
    SessionData: SessionReducer,
//   review: reviewReducer
})
