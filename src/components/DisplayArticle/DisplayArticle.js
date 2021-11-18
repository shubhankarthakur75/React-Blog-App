import React, { Component } from "react";
import "./DisplayArticle.css";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import articleImage from "../../assets/images/lake-image.jpg";
import clappingImage from "../../assets/images/clapping-image-30px.png";

export class DisplayArticle extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="display-article">
        <div className="article-title">{this.props.propsBlog.name}</div>
        <div className="author-details-container">
          <AuthorDetails propsBlog={this.props.propsBlog} />
        </div>
        <div className="article-image-container">
          <img src={articleImage} className="article-image" alt="article" />
        </div>
        <div className="article-text-container">
          {this.props.propsBlog.description}
        </div>
        <div className="keyword-container">
          <button className="keyword-btn">React</button>
          <button className="keyword-btn">Javascript</button>
        </div>
        <div className="article-reactions">
          <img
            src={clappingImage}
            className="reaction-image"
            alt="claping-hands"
          />
          <p>9.3K</p>
          <p>Claps</p>
        </div>
        <div className="author-details-container">
          <AuthorDetails propsBlog={this.props.propsBlog} />
        </div>
      </div>
    );
  }
}

export default DisplayArticle;
