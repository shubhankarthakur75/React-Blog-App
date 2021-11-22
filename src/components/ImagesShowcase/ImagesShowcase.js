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
        <div className="showcase-left-box hover-scale">
          <Link to={`/React-Blog-App/${randomBlog1.id}`}>
            <img
              src={`${randomBlog1.imageURL}`}
              className="showcase-image"
              alt=""
            />
            <div className="showcase-image-details-container">
              <p className="showcase-image-title">{randomBlog1.name}</p>
              <p className="showcase-image-category-and-date">
                <span>{randomBlog1.category}</span>
                <span>/</span>
                <span> August 17</span>
              </p>
            </div>
          </Link>
        </div>

        <div className="showcase-right-box">
          <div className="showcase-right-top-box hover-scale ">
            <Link to={`/React-Blog-App/${randomBlog2.id}`}>
              <img
                src={`${randomBlog2.imageURL}`}
                className="showcase-image"
                alt=""
              />

              <div className="showcase-image-details-container">
                <p className="showcase-image-title">{randomBlog2.name}</p>
                <p className="showcase-image-category-and-date">
                  <span>{randomBlog2.category}</span>
                  <span>/</span>
                  <span> August 17</span>
                </p>
              </div>
            </Link>
          </div>

          <div className="showcase-right-bottom-box hover-scale">
            <Link to={`/React-Blog-App/${randomBlog3.id}`}>
              <img
                src={`${randomBlog3.imageURL}`}
                className="showcase-image"
                alt=""
              />

              <div className="showcase-image-details-container">
                <p className="showcase-image-title">{randomBlog3.name}</p>
                <p className="showcase-image-category-and-date">
                  <span>{randomBlog3.category}</span>
                  <span>/</span>
                  <span> August 17</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ImagesShowcase;
