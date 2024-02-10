// actions/FavoriteActions.js
export const addToFavorites = (payload) => {
    return {
        type: 'ADD_MOVIE',
        payload: payload
    };
};

export const removeFromFavorites = (payload) => {
    return {
        type: 'REMOVE_MOVIE',
        payload: payload
    };
};