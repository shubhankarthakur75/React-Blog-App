import React, { Component } from "react";
import "./AuthorPortfolio.css";
import lakeImage from "../../assets/images/lake-image.jpg";

export class AuthorPortfolio extends Component {
  render() {
    return (
      <div className="author-portfolio">
        <div className="portfolio-title">More From The Siren</div>
        <div className="articles-container">
          <div className="article">
            <img src={lakeImage} className="article-image" alt="" />
            <p className="article-name">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="article">
            <img src={lakeImage} className="article-image" alt="" />
            <p className="article-name">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="article">
            <img src={lakeImage} className="article-image" alt="" />
            <p className="article-name">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthorPortfolio;
