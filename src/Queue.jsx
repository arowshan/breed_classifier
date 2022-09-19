import React, { Component } from "react";
import "./Queue.css";

export default class Queue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: new Set(),
    };
  }

  classifyImage = () => {
    this.setState(
      (prevState) => {
        const images = prevState.images;
        images.add(this.props.currentImage);
        return { images: images };
      },
      () => this.props.fetchImage()
    );
  };

  removeImage = (imageUrl) => {
    this.setState((prevState) => {
      const images = prevState.images;
      images.delete(imageUrl);
      return { images: images };
    });
  };

  render() {
    const dogImages = Array.from(this.state.images).map((image) => (
      <div className="image-wrapper" key={image}>
        <button className="x-button" onClick={() => this.removeImage(image)}>
          x
        </button>
        <img src={image} className="classified-image" alt="queue dog" />
      </div>
    ));
    return (
      <div className="queue-wrapper">
        <button className="queue-button" onClick={this.classifyImage}>
          {this.props.breedName}
        </button>
        <div className="queue">{dogImages}</div>
      </div>
    );
  }
}
