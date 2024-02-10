import axios from 'axios';
import { useEffect, useState } from 'react';
import MyCard from './MyCard';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from './redux/SearchAction';

export default function Search() {
    const dispatch = useDispatch();
    const myWord = useSelector((state) => state.combineSearch.search);

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/movie/popular?api_key=d9f8da3711d3e07af8fcc31ed6a769b2`
            )
            .then((res) => {
                console.log(res.data);
                setMovies(res.data.results);
            })
            .catch((err) => console.log(err));
    }, [myWord]);
    const searchAboutMovie = (e) => {
        dispatch(setSearch(e.target.value));
    };

    const moviePosterUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className="container-fuiled">
            <div className="container mt-5 ">
                <div className="social">
                    <p>Popular movies</p>
                </div>
                <div className="row g-5 mt-3">
                    {movies.map((movie) => (
                        <MyCard
                            key={movie.id}
                            image={`${moviePosterUrl}${movie.poster_path}`}
                            title={movie.title}
                            description={movie.overview.substr(0, 60) + "..."}
                            path={`MovesDetelis/${movie.id}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
