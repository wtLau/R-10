// Action Constants
const LOAD_CODE_OF_CONDUCT = 'LOAD_CODE_OF_CONDUCT';

// Action Creators
export function loadFormRedirect(redirectOnSubmit) {
  return {
    type: LOAD_CODE_OF_CONDUCT,
    payload: redirectOnSubmit
  };
}

// Reducers
const initialState = {
    Loading: false,
    Data: [],
};

export function AboutReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CODE_OF_CONDUCT:
        return { ...state, Redirect: action.payload };
    default:
        return state;

  }
}

