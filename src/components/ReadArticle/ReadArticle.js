import React, { Component } from "react";
import { withRouter } from "react-router";
import "./ReadArticle.css";
import Header1 from "../Header/Header1";
import DisplayArticle from "../DisplayArticle/DisplayArticle";
import AuthorPortfolio from "../AuthorPortfolio/AuthorPortfolio";
import shareIcon from "../../assets/images/share-icon-30px.png";
import clapIcon from "../../assets/images/clapping-image-30px.png";

class ReadArticle extends Component {
  render() {
    const [...blogs] = this.props.propsBlogsArr;
    const filteredBlogsArr = blogs.filter((blog) => {
      return blog.id === this.props.match.params.id;
    });
    let filteredBlog = filteredBlogsArr[0];

    return (
      <div className="read-article">
        <Header1 />
        <div className="box-container">
          <div className="left-box">
            <div className="icons-container">
              <div
                className="icon-and-details-container"
                onClick={() => {
                  this.props.propsHandleClaps(filteredBlog.id);
                }}
              >
                <span className="icon-image">
                  <img src={clapIcon} alt="clapping" />
                </span>
                <span className="icon-image-text">{filteredBlog.claps}</span>
              </div>
              <div className="icon-and-details-container">
                <span className="icon-image">
                  <img src={shareIcon} alt="share" />
                </span>
                <span className="icon-image-text">Share this article</span>
              </div>
            </div>
          </div>
          <div className="middle-box">
            <DisplayArticle
              propsBlog={filteredBlog}
              propsHandleClaps={this.props.propsHandleClaps}
            />
          </div>
          <div className="right-box"></div>
        </div>
        <div className="footer-box">
          <AuthorPortfolio
            propsBlogsArr={this.props.propsBlogsArr}
            propsBlog={filteredBlog}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ReadArticle);
