// reducers/movesReducer.js
const initialState = {
    moves: [], // This is moves array
    currentPage: 1,
    totalPages: 1,
};

const movesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_MOVES_SUCCESS":
            return {
                ...state,
                moves: action.payload.moves,
                totalPages: action.payload.totalPages,
                error: null,
            };
        case "FETCH_MOVES_FAILURE":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default movesReducer;
