import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import { AboutReducer } from './modules/About'
// import { FormRedirectRenderer } from './modules/User'


export default combineReducers({
    navigation: NavigationReducer,
    about: AboutReducer,
//   review: reviewReducer
})
