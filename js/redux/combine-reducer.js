import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import { CodeOfConductReducer } from './modules/About'
import { SessionReducer } from './modules/Session'
import { SpeakersReducer } from './modules/Speakers'

export default combineReducers({
    navigation: NavigationReducer,
    COFData: CodeOfConductReducer,
    SessionData: SessionReducer,
    SpeakersData: SpeakersReducer,
})
