import React, { Component } from "react";
import "./ImagesShowcase.css";
import lakeImage from "../../assets/images/lake-image.jpg";
import seaImage from "../../assets/images/sea-image.jpg";

class ImagesShowcase extends Component {
  render() {
    return (
      <div className="images-showcase">
        <div
          className="showcase-left-box hover-scale"
          style={{
            backgroundImage: `url(${lakeImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="showcase-image-details-container">
            <p className="showcase-image-title">Title</p>
            <p className="showcase-image-category-and-date">
              travel/August 2017
            </p>
          </div>
        </div>
        <div className="showcase-right-box">
          <div
            className="showcase-right-top-box hover-scale "
            style={{
              backgroundImage: `url(${seaImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="showcase-image-details-container">
              <p className="showcase-image-title">Title Of the Blog</p>
              <p className="showcase-image-category-and-date">
                travel/August 2017
              </p>
            </div>
          </div>
          <div
            className="showcase-right-bottom-box hover-scale"
            style={{
              backgroundImage: `url(${seaImage})`,
              backgroundSize: "cover",
            }}
          >
            <div className="showcase-image-details-container">
              <p className="showcase-image-title">Title Of the Blog</p>
              <p className="showcase-image-category-and-date">
                travel/August 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesShowcase;
