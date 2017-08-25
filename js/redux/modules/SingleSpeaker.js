// Action Constants
const LOAD_SINGLE_SPEAKER = 'LOAD_SINGLE_SPEAKER';

// Action Creators
export function loadSingleSpeaker(SingleSpeakerData) {
  return {
    type: LOAD_SINGLE_SPEAKER,
    payload: SingleSpeakerData
  };
}

// Fetch Action, Thunk
export function fetchSingleSpeaker(speaker_id) {
  return function (dispatch) {
    let endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speaker_id}`;
    fetch(endpoint)
        .then(response => response.json())
        .then(json => { 
            const Data = json
            dispatch(loadSingleSpeaker(Data)) 
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

// Reducers
const initialState = {
    isLoading: true,
    Data: [],
};

export function SingleSpeakerReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_SINGLE_SPEAKER:
        return {  
            isLoading: false, 
            Data: action.payload 
        };
    default:
        return state;

  }
}

