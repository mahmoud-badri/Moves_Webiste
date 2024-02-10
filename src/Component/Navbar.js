import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import { useDispatch, useSelector } from 'react-redux';
import Logo from '../media/logo.jpg'
import { setSearch } from './redux/SearchAction';
import { useHistory } from "react-router-dom";



function Navbar() {
    const mynumber = useSelector((state) => state.combineNum.num);
    
//& get  and set data for search
const myWord = useSelector((state) => state.combinSearch.search)
console.log(myWord)
const deispatch = useDispatch()
const history = useHistory();
const searchAboutMovie = (e) => {
    console.log(e.target.value);
    deispatch(setSearch(myWord === "" ? e.target.value : e.target.value))
}  

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark-bg">
            <div className="container-fluid">

                <Link className="navbar-brand navbar-text" to="#">
                    <img src={Logo} alt="Logo" style={{width:"100px", borderRadius:"10px"}} className="logo-image" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link navbar-text" aria-current="page" to="/Moves">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link navbar-text" to="/FavMove">
                                Favorites
                                <i className="fa-solid fa-heart fa-beat-fade fa-lg ms-2" style={{ color: "rgba(248, 24, 8, 0.863)" }} />
                                {mynumber}
                            </Link>
                        </li> 
                    </ul>
                    <form className="d-flex">
                        <input type="search" className="form-control me-2 transparent-input" placeholder="Search" aria-label="Search" onChange={searchAboutMovie}/>
                        <button className="btn btn-outline-success" onClick={() => history.push("/Search")} type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
