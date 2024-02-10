import axios from "axios";
export const getMoves = (page) => (dispatch) => {
    axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=d9f8da3711d3e07af8fcc31ed6a769b2&page=${page}`)
        .then((response) => {
            dispatch({
                type: "FETCH_MOVES_SUCCESS",
                payload: { moves: response.data.results, totalPages: response.data.total_pages },
            });
        })
        .catch((error) => {
            console.error("Error fetching movies:", error);
            dispatch({
                type: "FETCH_MOVES_FAILURE",
                payload: error.message,
            });
        });
};
