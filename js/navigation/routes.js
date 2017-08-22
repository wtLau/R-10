import { createRouter } from '@expo/ex-navigation';

import About from '../scenes/About/'
import Map from '../scenes/Map/'
import Schedule from '../scenes/Schedule/'
import Session from '../scenes/Session/'
import Speaker from '../scenes/Speaker/'
import User from '../scenes/User/'

const Router = createRouter(() => ({
    schedule: () => Schedule,
    session: () => Session,
    speaker: () => Speaker,
    about: () => About,
    map: () => Map,
    user: () => User,
  }));

export default Router