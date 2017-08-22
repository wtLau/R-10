import { createNavigationEnabledStore } from '@expo/ex-navigation';
import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import combineReducers from './combine-reducer'; // we haven't made these yet...

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // definitely enable Redux dev tools!

const createStoreWithNavigation = createNavigationEnabledStore({
    createStore,
    navigationStateKey: 'navigation',
}); // as per the ExNavigation docs...


const store = createStoreWithNavigation(
    combineReducers,
    {}, // initial state
    composeEnhancers(
        applyMiddleware(thunk)
    ) // enhancers
);
export default store;