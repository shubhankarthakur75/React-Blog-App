import React, { Component } from "react";
import "./VerticalArticles.css";
import HorizontalArticle from "../Article/HorizontalArticle";
import downwardArrow from "../../assets/images/downward-arrow.svg";
import { Link } from "react-router-dom";

class VerticalArticles extends Component {
  render() {
    const [...blogsArr] = this.props.propsBlogs;
    let noOfVerticalArticlesToBeDisplayed = this.props.propsNoOfArticles;
    const blogs = blogsArr.slice(0, noOfVerticalArticlesToBeDisplayed);

    return (
      <div className="vertical-articles">
        <h2 className="vertical-articles-title">
          {this.props.propsCategoryName}
        </h2>
        <div className="vertical-articles-container">
          {blogs.map((blog, index) => {
            return (
              <div className="article-container" key={index}>
                <Link to={`/${blog.id}`}>
                  <HorizontalArticle
                    propsBlogName={blog.name}
                    propsDescription={blog.description}
                    propsCategory={blog.category}
                  />
                </Link>
              </div>
            );
          })}

          <div className="expand-btn">
            <button>
              <img src={downwardArrow} alt="downward-arrow" />
              <span>LOAD MORE</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default VerticalArticles;
