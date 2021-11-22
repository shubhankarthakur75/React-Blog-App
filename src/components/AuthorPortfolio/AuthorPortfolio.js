import React, { Component } from "react";
import "./AuthorPortfolio.css";
import { Link } from "react-router-dom";
import AuthorDetails from "../AuthorDetails/AuthorDetails";

export class AuthorPortfolio extends Component {
  render() {
    const [...blogs] = this.props.propsBlogsArr;
    const filteredArr = blogs.filter((blog) => {
      return blog.author === this.props.propsBlog.author;
    });
    const splicedArr = filteredArr.splice(0, 3);

    return (
      <div className="author-portfolio">
        <div className="portfolio-title">{`More From ${this.props.propsBlog.author}`}</div>
        <div className="articles-container">
          {splicedArr.map((blog, index) => {
            return (
              <div className="article" key={index}>
                <div className="article-image-container">
                  <Link to={`/React-Blog-App/${blog.id}`}>
                    <img
                      src={`${blog.imageURL}`}
                      className="article-image"
                      alt=""
                    />
                  </Link>
                </div>

                <div className="article-details-container">
                  <p className="article-name">{blog.name}</p>
                  <div className="article-category-and-date-container">
                    <span className="article-category">{blog.category}</span>/
                    <span className="article-date">August 21 2021</span>
                  </div>
                  <div className="author-details-container">
                    <AuthorDetails
                      propsBlog={this.props.propsBlog}
                      propsIsHide={true}
                    ></AuthorDetails>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AuthorPortfolio;
