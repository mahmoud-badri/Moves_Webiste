// reducers.js
const initialState = {
    search: '',
    // other reducer state...
};

const combineSearch = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload,
            };
        // other cases...
        default:
            return state;
    }
};

export default combineSearch;
