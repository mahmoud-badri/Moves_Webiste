import axios from "axios";
import React, { useEffect, useState } from "react";
import "./carddetails.css"
import { useDispatch, useSelector } from "react-redux";
import MyCard from "../../Component/MyCard";
import { clear } from "../../Component/redux/moves/cart-slice";

function FavMove() {
    //---------------------------------

    const deipatch = useDispatch()
    const favourite = useSelector(state => state.cart)
    console.log(favourite)

    const moviePosterUrl = "https://image.tmdb.org/t/p/w500/";

    return (

        <div className="container-fuiled">
            <div className="container mt-5 ">
                <div className="social mb-5">
                    <p>Favourite movies</p>
                </div>

                <div className="row g-5 mt-3">
                    {favourite.map((move) => {


                        const overview = move.overview && typeof move.overview === 'string' ? move.overview : '';
                        return (
                            <MyCard
                                key={move.id}
                                image={`${move.image}`}
                                title={move.title}
                                description={move.description}
                                path={`MovesDetelis/${move.id}`}
                            />
                        );
                    })}
                    
                </div>
                <button onClick={()=> deipatch(clear())} className="btn btn-danger">Clear All</button>
            </div>
        </div >
    );

}

export default FavMove