import { formatSessionData } from '../../lib/helperFunction'

// Action Constants
const LOAD_SESSION = 'LOAD_SESSION';

// Action Creators
export function loadSession(SessionData) {
  return {
    type: LOAD_SESSION,
    payload: SessionData
  };
}

// Fetch Action, Thunk
export function fetchSession() {
  return function (dispatch) {
    let endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
    fetch(endpoint)
        .then(response => response.json())
        .then(json => { 
            const Data = formatSessionData(json)
            
            dispatch(loadSession(Data)) 
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

// Reducers
const initialState = {
    isLoading: true,
    data: [],
};

export function SessionReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SESSION:
        return {  
            isLoading: false, 
            data: action.payload 
        };
    default:
        return state;
  }
}

