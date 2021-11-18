import React, { Component } from "react";
import "./HorizontalPost.css";
import lakeImage from "../../assets/images/lake-image.jpg";

class HorizontalPost extends Component {
  render() {
    return (
      <div className="horizontal-post">
        <div className="post-image-container">
          <img src={lakeImage} className="post-image" alt="lake" />
        </div>
        <div className="post-details-container">
          <div className="post-title">Lorem ipsum dolor sit amet</div>
          <div className="post-category-and-date">
            <span className="article-category">Travel</span>/
            <span className="article-date">August 21 2021</span>
          </div>
        </div>
        <div className="post-rank-container">1</div>
      </div>
    );
  }
}

export default HorizontalPost;