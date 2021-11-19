import React, { Component } from "react";
import "./VerticalArticle.css";

class VerticalArticle extends Component {
  render() {
    return (
      <div className="vertical-article">
        <div className="article-image-container">
          <img
            src={`${this.props.propsImageURL}`}
            className="article-image"
            alt="lake"
          />
        </div>
        <div className="article-title">{this.props.propsBlogName}</div>
        <div className="article-desc">{this.props.propsDescription}</div>
        <div className="article-category-and-date">
          <span className="article-category">{this.props.propsCategory}</span>/
          <span className="article-date">August 21 2021</span>
        </div>
      </div>
    );
  }
}

export default VerticalArticle;
