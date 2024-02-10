// actions.js
export const setSearch = (term) => {
    return {
        type: 'SET_SEARCH',
        payload: term,
    };
};
