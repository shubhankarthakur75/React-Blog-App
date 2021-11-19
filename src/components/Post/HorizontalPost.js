import React, { Component } from "react";
import "./HorizontalPost.css";
import lakeImage from "../../assets/images/lake-image.jpg";

class HorizontalPost extends Component {
  render() {
    return (
      <div className="horizontal-post">
        <div className="post-image-container">
          <img
            src={`${this.props.propsPost.imageURL}`}
            className="post-image"
            alt="lake"
          />
        </div>
        <div className="post-details-container">
          <div className="post-title">{this.props.propsPost.name}</div>

          <div className="post-category-and-date">
            <span className="post-category">
              {this.props.propsPost.category}
            </span>
            /<span className="post-date">August 21 2021</span>
          </div>
        </div>
        <div className="post-rank-container">{this.props.propsRank}</div>
      </div>
    );
  }
}

export default HorizontalPost;
