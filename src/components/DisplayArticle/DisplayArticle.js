import React, { Component } from "react";
import "./DisplayArticle.css";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import clappingImage from "../../assets/images/clapping-image-30px.png";

export class DisplayArticle extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.propsBlog.id !== this.props.propsBlog.id) {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="display-article">
        <div className="article-title">{this.props.propsBlog.name}</div>
        <div className="author-details-container">
          <AuthorDetails propsBlog={this.props.propsBlog} />
        </div>

        <div className="article-image-container">
          <img
            src={`${this.props.propsBlog.imageURL}`}
            className="article-image"
            alt="article"
          />
        </div>

        <div className="article-text-container">
          {this.props.propsBlog.description}
        </div>

        <div className="keyword-container">
          {this.props.propsBlog.keyword.map((keyword, index) => {
            return (
              <button className="keyword-btn" key={index}>
                {keyword}
              </button>
            );
          })}
        </div>
        <div
          className="article-reactions"
          onClick={() => this.props.propsHandleClaps(this.props.propsBlog.id)}
        >
          <img
            src={clappingImage}
            className="reaction-image"
            alt="claping-hands"
          />
          <p>{this.props.propsBlog.claps}</p>
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
