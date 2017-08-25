import { combineReducers } from 'redux';

import { NavigationReducer } from '@expo/ex-navigation';
import { CodeOfConductReducer } from './modules/About'
import { SessionReducer } from './modules/Session'
import { SpeakersReducer } from './modules/Speakers'
import { FaveReducer } from './modules/Fave'
import { SingleSpeakerReducer } from './modules/SingleSpeaker'

export default combineReducers({
    navigation: NavigationReducer,
    COFData: CodeOfConductReducer,
    SessionData: SessionReducer,
    SpeakersData: SpeakersReducer,
    FaveData: FaveReducer,
    SingleSpeaker: SingleSpeakerReducer,
})
