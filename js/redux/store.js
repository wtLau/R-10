// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { Tracker } from 'meteor/tracker';
// import logger from 'redux-logger';
// import combineReducers from './combine-reducers';


// import { Forms } from '../../api/forms';

// export default () => {
//     const store = createStore(
//                     combineReducers,
//                     composeWithDevTools(
//                         applyMiddleware(
//                             logger
//                         )
//                     )
//     );

//     Tracker.autorun(() => {
//         store.dispatch({
//             type: 'LOAD_FORMS',
//             form: Forms.find().fetch(),
//         });
//     });


//     return store;
// }
