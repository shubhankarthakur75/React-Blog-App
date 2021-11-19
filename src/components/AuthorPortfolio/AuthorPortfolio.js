import React, { Component } from "react";
import "./AuthorPortfolio.css";
import { Link } from "react-router-dom";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import lakeImage from "../../assets/images/lake-image.jpg";

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
                <Link to={`/${blog.id}`}>
                  <img src={lakeImage} className="article-image" alt="" />
                  <p className="article-name">{blog.name}</p>
                </Link>
                <AuthorDetails
                  propsBlog={this.props.propsBlog}
                  propsIsHide={true}
                ></AuthorDetails>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default AuthorPortfolio;
