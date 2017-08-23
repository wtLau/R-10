// Action Constants
const LOAD_SPEAKERS = 'LOAD_SPEAKERS';

// Action Creators
export function loadSpeakers(SpeakersData) {
  return {
    type: LOAD_SPEAKERS,
    payload: SpeakersData
  };
}

// Fetch Action, Thunk
export function fetchSpeakers() {
  return function (dispatch) {
    let endpoint = 'https://r10app-95fea.firebaseio.com/speakers.json';
    fetch(endpoint)
        .then(response => response.json())
        .then(json => { 
            const Data = json
            dispatch(loadSpeakers(Data)) 
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

// Reducers
const initialState = {
    isLoading: true,
    data: [],
};

export function SpeakersReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SPEAKERS:
        return {  
            isLoading: false, 
            data: action.payload 
        };
    default:
        return state;
  }
}

