import React from "react";

function Images(props) {
    return (
        <div className="card">
            <div className="img-container" key={props.id} onClick={() => props.handleClick(props.id)}>
                <img src={props.src} alt={props.name} />
            </div>
        </div>
    )
}

export default Images;