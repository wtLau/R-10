import { queryFave } from '../../config/models'
import { formatSessionData } from '../../lib/helperFunction'

// Action Constants
const LOAD_FAVE = 'LOAD_FAVE';
const LOAD_FAVE_ID = 'LOAD_FAVE_ID';

// Action Creators
export function loadFave(FaveData) {
  return {
    type: LOAD_FAVE,
    payload: FaveData
  };
}

export function loadFaveID(faveId) {
    const FaveData = queryFave(faveId)
  return {
    type: LOAD_FAVE_ID,
    payload: FaveData
  };
}

// Fetch Action, Thunk
export function fetchFave() {
    return function (dispatch) {
      const FaveData = queryFave().map(fave=> fave.id);
      let endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
      fetch(endpoint)
          .then(response => response.json())
          .then(json => { 
              const filterFaveId= json.filter(session => {
                return FaveData.find(el => el === session.session_id)
              })
                const Data = formatSessionData(filterFaveId)
                dispatch(loadFave(Data)) 
          })
          .catch(error => console.log(`Error fetching JSON: ${error}`));
      }
}

// Reducers
const initialState = {
    isLoading: true,
    Data: [],
    faveId: []
};

export function FaveReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FAVE:
        return { 
            ...state,
            isLoading: false, 
            Data: action.payload 
        }
    case LOAD_FAVE_ID:
        return {
            ...state,
            isLoading: false, 
            faveId: action.payload 
        };
    default:
        return state;

  }
}

