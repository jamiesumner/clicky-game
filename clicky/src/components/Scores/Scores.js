import React from "react";

function Scores(props) {
    return (
        <div className="scores">
            <p>Score: {props.currentScore} | Top Score: {props.topScore}</p>
        </div>
    )
}

export default Scores;