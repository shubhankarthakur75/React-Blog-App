import React, { Component } from "react";
import "./Gallery.css";
import seaImage from "../../assets/images/sea-image.jpg";

class Gallery extends Component {
  render() {
    return (
      <div
        className="gallery"
        style={{
          backgroundImage: `url(${seaImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="gallery-image-details-container">
          <p className="gallery-image-title">Title</p>
          <p className="gallery-image-category-and-date">travel/August 2017</p>
        </div>
      </div>
    );
  }
}

export default Gallery;
