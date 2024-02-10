import React from "react";
import "./card.css"

function MyCardDetelis (props){

    return(
        <div className="card mb-3 card-content" style={{ maxWidth: 1000 }}>
            <div className="row g-0 ">
                <div className="col-md-4 ">
                    <img src={props.image} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h2 className="card-title title-content">{props.title}</h2>
                        <h4 className="card-text descrip"> {props.description}</h4>
                        <p className="card-text info">Language: {props.lang}</p>
                        <p className="card-text info">Rate: {props.rate} 🌟🌠<span className="info-span m-4">based on {props.count} votes</span></p>
                        <button type="button" className="btn btn-danger butn" data-mdb-ripple-init>{props.name_watch}</button>
                        <button type="button" className="btn btn-danger butn" data-mdb-ripple-init>{props.name_down}</button>
                    </div>
                </div>
            </div>
        </div>

    )   
}

export default MyCardDetelis


