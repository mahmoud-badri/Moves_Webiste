import React from "react";

function MyButton(props) {
    return (
        <div className="d-grid">
            <button type="submit" className="btn btn-success" onClick={props.sub}>
                {" "}
                {props.btn_name}
            </button>
        </div>
    );
}

export default MyButton;