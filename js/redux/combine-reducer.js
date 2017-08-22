import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import { CodeOfConductReducer } from './modules/About'
// import { FormRedirectRenderer } from './modules/User'


export default combineReducers({
    navigation: NavigationReducer,
    COFData: CodeOfConductReducer,
//   review: reviewReducer
})
