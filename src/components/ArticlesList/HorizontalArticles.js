import React, { Component } from "react";
import "./HorizontalArticles.css";
import VerticalArticle from "../Article/VerticalArticle";

class HorizontalArticles extends Component {
  render() {
    return (
      <div className="horizontal-articles">
        <h2 className="horizontal-articles-title">The Latest</h2>
        <div className="horizontal-articles-container">
          <div className="article-container">
            <VerticalArticle />
          </div>
          <div className="article-container">
            <VerticalArticle />
          </div>
          <div className="article-container">
            <VerticalArticle />
          </div>
        </div>
      </div>
    );
  }
}

export default HorizontalArticles;
