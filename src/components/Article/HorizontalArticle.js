import React, { Component } from "react";
import "./HorizontalArticle.css";
import lakeImage from "../../assets/images/lake-image.jpg";

class HorizontalArticle extends Component {
  render() {
    return (
      <div className="horizontal-article">
        <div className="article-image-container">
          <img src={lakeImage} className="article-image" alt="lake" />
        </div>
        <div className="article-details-container">
          <div className="article-title">Lorem ipsum dolor sit amet</div>
          <div className="article-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad nostrum
            aliquam accusamus a placeat! Incidunt numquam minima quod voluptas
            beatae.
          </div>
          <div className="article-category-and-date">
            <span className="article-category">Travel</span>/
            <span className="article-date">August 21 2021</span>
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalArticle;
