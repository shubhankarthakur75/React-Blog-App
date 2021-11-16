import React, { Component } from "react";
import "./VerticalArticles.css";
import HorizontalArticle from "../Article/HorizontalArticle";
import downwardArrow from "../../assets/images/downward-arrow.svg";
import Gallery from "../Gallery/Gallery";

class VerticalArticles extends Component {
  render() {
    return (
      <div className="vertical-articles">
        <h2 className="vertical-articles-title">The Latest</h2>
        <div className="vertical-articles-container">
          <div className="article-container">
            <HorizontalArticle />
          </div>
          <div className="article-container">
            <HorizontalArticle />
          </div>
          <div className="article-container">
            <HorizontalArticle />
          </div>
          <div className="expand-btn">
            <button>
              <img src={downwardArrow} alt="downward-arrow" />
              <span>LOAD MORE</span>
            </button>
          </div>
          <div className="gallery-container">
            <Gallery />
          </div>
        </div>
      </div>
    );
  }
}

export default VerticalArticles;
