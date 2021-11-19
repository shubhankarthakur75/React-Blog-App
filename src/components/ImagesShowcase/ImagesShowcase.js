import React, { Component } from "react";
import "./ImagesShowcase.css";
import { Link } from "react-router-dom";

class ImagesShowcase extends Component {
  randomNoGenerator(min, max) {
    return Math.random() * (max - min) + min;
  }

  randomBlogSelector() {
    let max = this.props.propsBlogsArr.length;
    let randomIndex = Math.floor(this.randomNoGenerator(0, max));
    return this.props.propsBlogsArr[randomIndex];
  }
  render() {
    const randomBlog1 = this.randomBlogSelector();
    const randomBlog2 = this.randomBlogSelector();
    const randomBlog3 = this.randomBlogSelector();
    return (
      <div className="images-showcase">
        <Link to={`/${randomBlog1.id}`}>
          <div
            className="showcase-left-box hover-scale"
            style={{
              backgroundImage: `url(${randomBlog1.imageURL})`,
              backgroundSize: "cover",
            }}
          >
            <div className="showcase-image-details-container">
              <p className="showcase-image-title">{randomBlog1.name}</p>
              <p className="showcase-image-category-and-date">
                <span>{randomBlog1.category}</span>
                <span>/</span>
                <span> August 17</span>
              </p>
            </div>
          </div>
        </Link>
        <div className="showcase-right-box">
          <Link to={`/${randomBlog2.id}`}>
            <div
              className="showcase-right-top-box hover-scale "
              style={{
                backgroundImage: `url(${randomBlog2.imageURL})`,
                backgroundSize: "cover",
              }}
            >
              <div className="showcase-image-details-container">
                <p className="showcase-image-title">{randomBlog2.name}</p>
                <p className="showcase-image-category-and-date">
                  <span>{randomBlog2.category}</span>
                  <span>/</span>
                  <span> August 17</span>
                </p>
              </div>
            </div>
          </Link>
          <Link to={`/${randomBlog2.id}`}>
            <div
              className="showcase-right-bottom-box hover-scale"
              style={{
                backgroundImage: `url(${randomBlog3.imageURL})`,
                backgroundSize: "cover",
              }}
            >
              <div className="showcase-image-details-container">
                <p className="showcase-image-title">{randomBlog3.name}</p>
                <p className="showcase-image-category-and-date">
                  <span>{randomBlog3.category}</span>
                  <span>/</span>
                  <span> August 17</span>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default ImagesShowcase;
