// Action Constants
const LOAD_CODE_OF_CONDUCT = 'LOAD_CODE_OF_CONDUCT';

// Action Creators
export function loadCodeOfConduct(CodeOfConductData) {
  return {
    type: LOAD_CODE_OF_CONDUCT,
    payload: CodeOfConductData
  };
}

// Fetch Action, Thunk
export function fetchCodeOfConduct() {
  return function (dispatch) {
    let endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';
    fetch(endpoint)
        .then(response => response.json())
        .then(json => { 
            const Data = json
            dispatch(loadCodeOfConduct(Data)) 
        })
        .catch(error => console.log(`Error fetching JSON: ${error}`));
    }
}

// Reducers
const initialState = {
    isLoading: true,
    Data: [],
};

export function CodeOfConductReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_CODE_OF_CONDUCT:
        return {  
            isLoading: false, 
            Data: action.payload 
        };
    default:
        return state;

  }
}

