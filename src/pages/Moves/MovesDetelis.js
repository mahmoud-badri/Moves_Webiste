import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyCardDetelis from "../../Component/MyCardDetelis";
import "./carddetails.css"

function MovesDetelis() {
    const moviePosterUrl = "https://image.tmdb.org/t/p/w500/"
    const moveId = useParams();

    const [move, setMove] = useState({})

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${moveId.id}?api_key=d9f8da3711d3e07af8fcc31ed6a769b2`)
            .then((res) => { setMove(res.data); })
            .catch((err) => console.log(err))
    },[])

    return (

        <div className="container-fuiled">
            <MyCardDetelis image={`${moviePosterUrl}${move.poster_path}`}
                title={move.title}
                description={move.overview}
                lang={move.original_language}
                rate={move.vote_average}
                count={move.vote_count}
                name_watch="Watch"
                name_down="Downlod"
            />
        </div>
    )
}

export default MovesDetelis;