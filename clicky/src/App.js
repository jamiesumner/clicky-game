import React, { Component } from "react";
import Images from "./components/Images/Images.js";
import Scores from "./components/Scores/Scores.js";
import images from "./images.json";

class App extends Component {
    state = {
        currentScore: 0,
        topScore: 0,
        clicked: [],
        images
    }

    // shuffle from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle = array => {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    handleClick = id => {
        if (this.state.clicked === []) {
            this.setState({ clicked: images })
        }

        if (this.state.clicked.includes(id)) {
            console.log(id);
            this.setState({ currentScore: 0 });
            this.setState({ clicked: [] });
            alert("You've already clicked this! You lose.");
        } else {
            this.setState({ currentScore: this.state.currentScore + 1 });
            this.state.clicked.push(id)
        }

        if (this.state.currentScore >= this.state.topScore) {
            this.setState({ topScore: this.state.currentScore });
        }

        if (this.state.currentScore === 12) {
            this.setState({ currentScore: 0 });
            this.setState({ clicked: [] });
            alert("You win!");
        }

        this.shuffle(images);
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar bg-primary">
                    <div className="navbar-brand">
                        Clicky Game!
                    </div>
                </nav>
                <div className="jumbotron jumbotron-fluid">
                    <div className="header-container">
                        <h1 className="display-4">Clicky Game!</h1>
                        <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
                    </div>
                    <div className="scores">
                        <Scores
                            currentScore={this.state.currentScore}
                            topScore={this.state.topScore}
                        />
                    </div>
                </div>
                <div className="image-container">
                    <div className="row">
                        {images.map(image => (
                            < Images
                                handleClick={this.handleClick}
                                // alt={image.name}
                                src={image.src}
                                id={image.id}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;