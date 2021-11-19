import React, { Component } from "react";
import "./HorizontalArticles.css";
import { Link } from "react-router-dom";
import VerticalArticle from "../Article/VerticalArticle";

class HorizontalArticles extends Component {
  render() {
    return (
      <div className="horizontal-articles">
        <h2 className="horizontal-articles-title">The Latest</h2>
        <div className="horizontal-articles-container">
          {this.props.propsBlogs.map((blog, index) => {
            return (
              <div className="article-container" key={index}>
                <Link to={`/${blog.id}`}>
                  <VerticalArticle
                    propsBlogName={blog.name}
                    propsDescription={blog.description}
                    propsCategory={blog.category}
                    propsImageURL={blog.imageURL}
                  />
                </Link>
              </div>
            );
          })}
          {/* <div className="article-container">
            <VerticalArticle />
          </div> */}
        </div>
      </div>
    );
  }
}

export default HorizontalArticles;
