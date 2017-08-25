import { queryFave } from '../../config/models'
// Action Constants
const LOAD_FAVE = 'LOAD_FAVE';

// Action Creators
export function loadFave(FaveData) {
  return {
    type: LOAD_FAVE,
    payload: FaveData
  };
}

// Fetch Action, Thunk
export function fetchFave() {
  return function (dispatch) {
    let endpoint = queryFave();
    dispatch(loadFave(endpoint)) 
    }
}

// Reducers
const initialState = {
    isLoading: true,
    Data: [],
};

export function FaveReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_FAVE:
        return {  
            isLoading: false, 
            Data: action.payload 
        };
    default:
        return state;

  }
}

