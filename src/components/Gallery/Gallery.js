import React, { Component } from "react";
import "./Gallery.css";
import { Link } from "react-router-dom";

class Gallery extends Component {
  randomNoGenerator(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomBlogSelector() {
    let max = this.props.propsBlogsArr.length;
    let randomIndex = Math.floor(this.randomNoGenerator(0, max));
    return this.props.propsBlogsArr[randomIndex];
  }
  render() {
    const randomBlog = this.randomBlogSelector();
    return (
      <Link to={`/${randomBlog.id}`}>
        <div
          className="gallery"
          style={{
            backgroundImage: `url(${randomBlog.imageURL})`,
            backgroundSize: "cover",
          }}
        >
          <div className="gallery-image-details-container">
            <p className="gallery-image-title">{randomBlog.name}</p>
            <p className="gallery-image-category-and-date">
              <span>{randomBlog.category}</span>
              <span>/</span>
              <span> August 17</span>
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default Gallery;
