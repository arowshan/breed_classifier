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
      " Pitbull",
      "German Shepherd",
      "Labrador",
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
        <h1>Classifier</h1>

        <button onClick={this.fetchImage}>Fetch Next</button>
        <img className="main-image" src={this.state.image} alt="main dog" />
        <div className="queues">{queues}</div>
      </div>
    );
  }
}

export default App;