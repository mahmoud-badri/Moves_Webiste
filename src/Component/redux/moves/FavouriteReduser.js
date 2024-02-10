const INITIAL_VALUES = {
    movieList: []
}
export default function TranFilm(state = INITIAL_VALUES, action) {
    switch (action.type) {
        case 'ADD_MOVIE':
            return {
                ...state,
                movieList: [...state.movieList, action.payload]
            }
        case 'REMOVE_MOVIE':
            return {
                ...state,
                movieList: [...state.movieList.filter((move) => move.id !== action.payload.id)]
            }

        default:
            return state
    }
}
