import React, { Component } from "react";
import Images from "./components/Images/Images.js";
import Scores from "./components/Scores/Scores.js";
import images from "./images.json";

class App extends Component {
    state = {
        currentScore: 0,
        topScore: 0,
        currentImages: images
    }

    // shuffle from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    shuffle = (array) => {
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

    handleClick = (id) => {
        const selectedImage = this.state.currentImages.filter(image => image.id === id);

        if (selectedImage.length !== 0) {
            this.setState({ currentImages: this.state.currentImages.filter(image => image.id !== id) });
            this.setState({ currentScore: this.state.currentScore + 1 });
        } else {
            this.setState({ currentScore: 0, currentImages: images })
            if (this.state.currentScore > this.state.topScore) {
                this.setState({ topScore: this.state.currentScore });
            }
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
                        {images.map(image =>
                            <Images
                                handleClick={this.handleClick}
                                name={image.name}
                                src={image.src}
                                key={image.id}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default App;