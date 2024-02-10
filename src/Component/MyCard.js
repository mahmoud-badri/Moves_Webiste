// Import React library
import React from "react";
import { Link } from 'react-router-dom';
import "./MyCard.css"
import { useDispatch, useSelector } from "react-redux";
import { changeCount } from './redux/Count';
import { addToCart } from "./redux/moves/cart-slice";
// Define the MyCard component that receives image, title, and description as props
function MyCard(props) {


    //----------------------------------Favourit---------------------------------
    //-------------------------------Favourit--------------------------------

    //-------------------------------start Redux--------------------------------
    const number = useSelector((state) => state.combineNum.num);

    const dispatch = useDispatch()

    const [isFavorited, setIsFavorited] = React.useState(false); // Track heart status for each card

    const changeNumber = () => {
        setIsFavorited(!isFavorited); // Toggle favorite state
        const newNumber = isFavorited ? number - 1 : number + 1; // Calculate new count based on favorite state
        dispatch(changeCount(newNumber));
        dispatch(addToCart(props))
        //dispatch(Transferring(film.push))
    };

    //------------------------------------------------
    //-------------------------------End Redux--------------------------------
    // Return the JSX code for the card
    return (
        // Add Bootstrap grid classes to make the card responsive
        <div className={`card col-lg-2 col-md-4 col-sm-6 m-2 p-1 bg-dark`} id="allCard">
            {/* Display the movie poster */}
            <img src={props.image} className="card-img-top img-animated" alt="..." />
            {/* Display the movie title and primary badge */}
            <div className="card-body text-start">
                <div className="d-flex justify-content-between py-2">
                    <span className="badge text-bg-success bg-opacity-75">Primary</span>
                    {/* Display a heart icon */}
                    <button onClick={() => changeNumber()} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                        <i className="fa-solid fa-heart fa-beat-fade ms-2" style={{ color: "rgba(248, 24, 8, 0.863)" }} />
                    </button>
                </div>
                {/* Display the movie title and overview */}
                <Link to={props.path} className="text-decoration-none">
                    <h5 className="card-title fw-bold title-card">{props.title}</h5>
                </Link>
                <p className="card-text description">{props.description}</p>
            </div>
        </div >
    );
}


// Export the MyCard component for use in other files

export default MyCard;