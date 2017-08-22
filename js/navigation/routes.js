import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About/'
import Map from '../scenes/Map/'
import Schedule from '../scenes/Schedule/'
import Session from '../scenes/Session/'
import Speaker from '../scenes/Speaker/'
import Faves from '../scenes/Faves/'
import NavigationLayout from './NavigationLayout'

const Router = createRouter(() => ({
    home: () => NavigationLayout,
    schedule: () => Schedule,
    session: () => Session,
    speaker: () => Speaker,
    about: () => About,
    map: () => Map,
    faves: () => Faves,
  }));

export default Router