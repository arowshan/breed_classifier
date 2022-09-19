import "./App.css";
import React, { Component } from "react";
import Queue from "./Queue";

class App extends Component {
  constructor() {
    super();
    this.state = {
      image: null,
    };
  }

  componentDidMount() {
    this.fetchImage();
  }

  fetchImage = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          image: data["message"],
        })
      );
  };

  render() {
    const breeds = [
      "Golden Retriever",
      "Bulldog",
      "Pitbull",
      "German Shepherd",
      "Labrador",
      "Other",
    ];
    const queues = breeds.map((breed) => (
      <Queue
        breedName={breed}
        key={breed}
        currentImage={this.state.image}
        fetchImage={this.fetchImage}
      />
    ));
    return (
      <div className="App">
        <h1 className="title">Classifier</h1>

        <div className="fetch-wrapper">
          <img className="main-image" src={this.state.image} alt="main dog" />
          <div>
            <button onClick={this.fetchImage} className="fetch-next">
              Fetch Next
            </button>
            <h1 className="instruction">
              Select the correct queue to label the breed for this dog.
            </h1>
          </div>
        </div>

        <div className="queues">{queues}</div>
      </div>
    );
  }
}

export default App;
