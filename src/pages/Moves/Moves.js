// Moves.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyCard from "../../Component/MyCard";

import "./carddetails.css";
import { getMoves } from '../../Component/redux/moves/movesAction';
import Pagination from '../../Component/Pagintaion';

function Moves() {
    const dispatch = useDispatch();
    const { moves, currentPage, totalPages } = useSelector((state) => state.moves);

    useEffect(() => {
        dispatch(getMoves(currentPage));
    }, [dispatch, currentPage]);

    const handlePageChange = (newPage) => {
        dispatch(getMoves(newPage));
    };

    const moviePosterUrl = "https://image.tmdb.org/t/p/w500/";

    return (
        <div className="container-fuiled">
            <div className="container mt-5 ">
                <div className="social">
                        <p>Popular movies</p>
                    </div>
                <div className="row g-5 mt-3">
                    {moves.map((move) => (
                        <MyCard
                            key={move.id}
                            image={`${moviePosterUrl}${move.poster_path}`}
                            title={move.title}
                            description={move.overview.substr(0, 60) + "..."}
                            path={`MovesDetelis/${move.id}`}
                        />
                    ))}
                </div>
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                    color="black"
                    width="100px"
                />
            </div>
        </div>
    );
}

export default Moves;
